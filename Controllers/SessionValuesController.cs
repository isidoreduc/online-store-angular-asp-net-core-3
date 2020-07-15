using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ServerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Controllers
{
    
    [Route("/api/session")]
    [ApiController]
    public class SessionValuesController : Controller
    {
        [HttpGet("cart")]
        public IActionResult GetCart()
        {
            return Ok(HttpContext.Session.GetString("cart"));
        }
        [HttpPost("cart")]
        public void StoreCart([FromBody] CartProductSelection[] products)
        {
            var jsonData = JsonConvert.SerializeObject(products);
            HttpContext.Session.SetString("cart", jsonData);
        }
    }

    
}
