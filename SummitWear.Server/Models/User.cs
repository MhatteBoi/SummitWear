using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
        public class User
        {
            [Key]
            public required int UserId { get; set; }

            public required string Username { get; set; }
            public required string Email { get; set; }
            public required string Password { get; set; }
        }
    
}
