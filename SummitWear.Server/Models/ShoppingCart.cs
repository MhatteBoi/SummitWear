using System;
using System.ComponentModel.DataAnnotations;
namespace SummitWear.Server.Models
{
    public class ShoppingCart
    {
        [Key]
        public Guid CartId { get; set; }

        public int? UserId { get; set; } // Foreign key to User
        public DateTime CreatedDate { get; set; }
        public decimal TotalPrice { get; set; }
        public string CartStatus { get; set; }
    }
}
