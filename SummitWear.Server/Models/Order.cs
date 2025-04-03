using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        public DateTime OrderDate { get; set; }
        public Guid UserId { get; set; } // Foreign key to User

        // Navigation property for related OrderItems
        public List<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}

