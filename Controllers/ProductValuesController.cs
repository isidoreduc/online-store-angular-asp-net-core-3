using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Controllers
{
    [Route("api/product")]
    public class ProductValuesController : Controller
    {
        private readonly DataContext _ctx;

        public ProductValuesController(DataContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("{id}")]
        public async Task<Product> GetProduct(long id) => 
            await _ctx.Products.FindAsync(id);
            // await _ctx.Products.FindAsync(id);








    }
}




