using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
using ServerApp.Models.TargetBindings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace ServerApp.Controllers
{
    [Route("api/products")]
    public class ProductValuesController : Controller
    {
        private readonly DataContext _ctx;

        public ProductValuesController(DataContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("{id}")]
        public Product GetProduct(long id)
        {
            // await _ctx.Products.FindAsync(id); (1)

            // Displaying additional info for the product - throws a circular reference exception
            //Thread.Sleep(3000);
            //return await _ctx.Products
            //    .Include(s => s.Supplier)
            //    .Include(r => r.Ratings)
            //    .FirstOrDefaultAsync(p => p.ProductId == id); (2)

            // Solving the circular reference exception

            Product result = _ctx.Products
                .Include(p => p.Supplier).ThenInclude(s => s.Products)
                .Include(p => p.Ratings)
                .FirstOrDefault(p => p.ProductId == id);
            
            if (result != null)
            {
                if (result.Supplier != null)
                {
                    result.Supplier.Products = result.Supplier.Products.Select(p =>
                        new Product
                        {
                            ProductId = p.ProductId,
                            Name = p.Name,
                            Category = p.Category,
                            Description = p.Description,
                            Price = p.Price,
                        });
                }
                if (result.Ratings != null)
                {
                    foreach (Rating r in result.Ratings)
                    {
                        r.Product = null;
                    }
                }
            }
            return result;
        }


        [HttpGet]
        public IEnumerable<Product> GetProducts( string category, string search, bool related = false)
        {
            IQueryable<Product> query = _ctx.Products;

            // query filtering based on category
            if(!string.IsNullOrWhiteSpace(category))
            {
                string catLower = category.ToLower();
                query = query.Where(p => p.Category.Contains(catLower));
            }

            // query search in name or description
            if (!string.IsNullOrWhiteSpace(search))
            {
                string searchLower = search.ToLower();
                query = query.Where(p => p.Name.Contains(searchLower) || p.Description.Contains(searchLower));
            }

            if (related)
            {
                query = query.Include(p => p.Supplier).Include(p => p.Ratings);
                List<Product> data = query.ToList();
                data.ForEach(p =>
                {
                    if (p.Supplier != null)
                    {
                        p.Supplier.Products = null;
                    }
                    if (p.Ratings != null)
                    {
                        p.Ratings.ForEach(r => r.Product = null);
                    }
                });
                return data;
            }
            else
            {
                return query;
            }
        }

        [HttpPost]
        public IActionResult CreateProduct([FromBody] ProductData pdata)
        {
            if (ModelState.IsValid)
            {
                Product p = pdata.Product;
                if (p.Supplier != null && p.Supplier.SupplierId != 0)
                {
                    _ctx.Attach(p.Supplier);
                }
                _ctx.Add(p);
                _ctx.SaveChanges();
                return Ok(p.ProductId);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ReplaceProduct(long id, [FromBody] ProductData pdata)
        {
            if (ModelState.IsValid)
            {
                Product p = pdata.Product;
                p.ProductId = id;
                if (p.Supplier != null && p.Supplier.SupplierId != 0)
                {
                    _ctx.Attach(p.Supplier);
                }
                _ctx.Update(p);
                _ctx.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public void DeleteProduct(long id)
        {
            _ctx.Products.Remove(new Product { ProductId = id });
            _ctx.SaveChanges();
        }







    }
}





