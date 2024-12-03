using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class UserInfo
    {
        [Key]
        public int UserInfoId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public required string PhoneNumber { get; set; }
        public int UserId { get; set; } // Foreign key to User
    }
}
