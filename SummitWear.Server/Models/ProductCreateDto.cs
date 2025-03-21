
using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models

{
    public class ProductCreateDto
    {
        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        public int Stock { get; set; }

        [Required]
        public int CategoryId { get; set; }
        public List<ProductImageDto> Images { get; set; }
    }

    public class ProductImageDto
    {
        public string Url { get; set; }
    }
}
