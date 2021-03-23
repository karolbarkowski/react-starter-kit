using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using YourTurnNowApi.Api.Account.Model;

namespace YourTurnNowApi.Api.Account
{
    [Route("api/account/registration")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        public UserManager<IdentityUser> UserManager { get; }

        public RegistrationController(UserManager<IdentityUser> userManager)
        {
            UserManager = userManager;
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
