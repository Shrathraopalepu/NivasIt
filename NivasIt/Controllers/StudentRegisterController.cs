using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NivasIt.Models;

namespace NivasIt.Controllers
{
    [Produces("application/json")]
    [Route("api/StudentRegister")]
    public class StudentRegisterController : Controller
    {
     
        
        // POST: api/StudentRegister
        [HttpPost]
        public IActionResult Post([FromBody] StudentRegister studentRegister)
        {
            if (!ModelState.IsValid)
                return BadRequest("Please enter the all valid details");
            return Ok("Email send Successfully");
    }

        // PUT: api/StudentRegister/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
