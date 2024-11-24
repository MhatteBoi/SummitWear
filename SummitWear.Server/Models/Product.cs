using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class Product
    {
        [Key]
        public Guid ProductId { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public Guid CategoryId { get; set; } // Foreign key to Category
    }
}
