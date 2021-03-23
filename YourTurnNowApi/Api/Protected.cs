using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace YourTurnNowApi.Api
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]")]
    [ApiController]
    public class Protected : ControllerBase
    {
        [HttpGet("test")]
        public IActionResult Get()
        {
            return new OkObjectResult("OK");
        }
    }
}
