using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class OrderItem
    {
        [Key]
        public Guid OrderItemId { get; set; }

        public Guid OrderId { get; set; } // Foreign key to Order
        public Guid ProductId { get; set; } // Foreign key to Product
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
