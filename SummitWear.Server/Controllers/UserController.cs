using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SummitWear.Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace SummitWear.Server.Controllers
{

    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly UserManager<User> _userManager;


        public UserController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }
        // Get all users
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userManager.Users.ToListAsync();

            var userList = new List<object>();

            foreach (var user in users)
            {
                var roles = await _userManager.GetRolesAsync(user); // ✅ Get user roles

                userList.Add(new
                {
                    user.Id,
                    Name = user.FullName,
                    user.Email,
                    Status = "Active",
                    Roles = roles // ✅ Include roles
                });
            }

            return Ok(userList);
        }

        [HttpPost("{id}/assign-admin")]
        public async Task<IActionResult> AssignAdminRole(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound(new { Message = "User not found" });
            }

            if (!await _userManager.IsInRoleAsync(user, "Admin"))
            {
                await _userManager.AddToRoleAsync(user, "Admin");
                return Ok(new { Message = "Admin role assigned successfully!" });
            }

            return Ok(new { Message = "User already has the Admin role." });
        }
    }
}
