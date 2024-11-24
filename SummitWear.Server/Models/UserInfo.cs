using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class UserInfo
    {
        [Key]
        public Guid UserInfoId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public required string PhoneNumber { get; set; }
        public Guid UserId { get; set; } // Foreign key to User
    }
}
