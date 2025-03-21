using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using SummitWear.Server.Models;
using SummitWear.Server.Services;
using System.Security.Claims;

namespace SummitWear.Server.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly JwtService _jwtService;

        public AuthController(UserManager<User> userManager, JwtService jwtService)
        {
            _userManager = userManager;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] Register model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = new User
            {
                UserName = model.Email,  // Use Email as Username
                Email = model.Email,
                FullName = model.FullName
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded) return BadRequest(result.Errors);

            await _userManager.AddToRoleAsync(user, "User");
            return Ok(new { Message = "User registered successfully!" });
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] Login model)
        {
            if (model == null)
            {
                return BadRequest(new { Message = "invalid request" });
            }
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null || !await _userManager.CheckPasswordAsync(user, model.Password))
            {
                return Unauthorized(new { Message = "Invalid username or password" });
            }

            var roles = await _userManager.GetRolesAsync(user);
            var token = _jwtService.GenerateToken(user, (List<string>)roles); // JWT generation logic

            return Ok(new { Token = token, user.FullName });
        }

        [Authorize]
        [HttpGet("validate")]
        public IActionResult ValidateToken()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized(new { Message = "Invalid token" });
            }

            return Ok(new { Message = "Valid token", UserId = userId });
        }

        [Authorize(Roles = "Admin")] // Ensure only Admins can access this
        [HttpPost("promote-to-admin")]
        public async Task<IActionResult> AssignRole([FromBody] AssignRoleDto model)
        {
            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user == null) return NotFound(new { Message = "User not found" });

            if (!await _userManager.IsInRoleAsync(user, model.Role))
            {
                await _userManager.AddToRoleAsync(user, model.Role);
                return Ok(new { Message = "Role assigned successfully!" });
            }

            return BadRequest(new { Message = "User already has this role." });
        }

        public class AssignRoleDto
        {
            public string UserId { get; set; }
            public string Role { get; set; }
        }
    }
}
