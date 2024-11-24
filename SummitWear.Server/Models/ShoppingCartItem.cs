using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class ShoppingCartItem
    {
        [Key]
        public Guid CartItemId { get; set; }

        public Guid CartId { get; set; } // Foreign key to ShoppingCart
        public Guid ProductId { get; set; } // Foreign key to Product
        public int Quantity { get; set; }
    }
}
