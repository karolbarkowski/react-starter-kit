using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using YourTurnNowApi.Api.Model;

namespace YourTurnNowApi.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class Account : ControllerBase
    {
        public UserManager<IdentityUser> UserManager { get; }

        public Account(UserManager<IdentityUser> userManager)
        {
            UserManager = userManager;
        }


        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new List<string>() { "OK", "OK 2" };
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RegistrationViewModel model)
        {
            var result = await UserManager.CreateAsync(new IdentityUser
            {
                Email = model.Email,
                UserName = model.Email
            }, model.Password);

            if (!result.Succeeded)
                return new BadRequestResult();

            return new OkResult();
        }
    }
}
