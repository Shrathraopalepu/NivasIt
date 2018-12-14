using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using NivasIt.Models;

namespace NivasIt.Controllers
{
    [Produces("application/json")]
    [Route("api/Email")]
    public class EmailController : Controller
    {
        // GET: api/Email
         [HttpGet]
          public IEnumerable<string> Get()
          {
              return new string[] { "value1", "value2" };
          }

          // GET: api/Email/5
          [HttpGet("{id}", Name = "Get")]
          public string Get(int id)
          {
              return "value";
          }

          // POST: api/Email
          [HttpPost]


          public IActionResult Post([FromBody] EmailNotifications  emailNotificationDetails)
          {
            //if (!ModelState.IsValid)
            //    return BadRequest("Please enter the all valid details");
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("sai charan", "namadasaicharan@gmail.com"));
            message.To.Add(new MailboxAddress(emailNotificationDetails.Name, emailNotificationDetails.Email));
            message.Subject="Testmail";
            message.Body = new TextPart("html") { Text = "Name: " + emailNotificationDetails.Name +"<br>" +
                "email: " + emailNotificationDetails.Email + "<br>" +
                "phone: " + emailNotificationDetails.Phone + "<br>" +
                "message: " + emailNotificationDetails.Message + "<br>" +
                "location: " + emailNotificationDetails.Location+ "<br>" +
                "Test Mail from code"
            };
            using (var client =new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587,false);
               
                client.Authenticate("namadasaicharan@gmail.com","Mymomdad@1996"); 
                client.Send(message);
                client.Disconnect(true);
            }


                return Ok("Email send Successfully");
          }

          // PUT: api/Email/5
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
