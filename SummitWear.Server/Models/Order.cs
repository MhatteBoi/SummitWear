using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class Order
    {
        [Key]
        public Guid OrderId { get; set; }

        public DateTime OrderDate { get; set; }
        public Guid UserId { get; set; } // Foreign key to User
    }
}
