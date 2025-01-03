using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
        public class ProductImage
        {
        [Key]
        public int ImageId { get; set; } // Primary Key

        [Required]
        public string? Url { get; set; } // Image URL stored as a string

        [ForeignKey("Product")]
        public int ProductId { get; set; } // Foreign Key to Product

        public Product Product { get; set; }
    }
}
