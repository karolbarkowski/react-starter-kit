using Api.Results;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Api.Api.Account.Register
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
        public async Task<IResult<RegisterResponse>> Post([FromBody] RegisterRequest model)
        {
            var result = await UserManager.CreateAsync(new IdentityUser
            {
                Email = model.Email,
                UserName = model.Email
            }, model.Password);

            if (!result.Succeeded)
            {
                return new FailedResult<RegisterResponse>("REGISTER");
            }

            return new SuccessfulResult<RegisterResponse>(new RegisterResponse());
        }
    }
}
