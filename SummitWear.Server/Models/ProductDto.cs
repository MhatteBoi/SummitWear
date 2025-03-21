namespace SummitWear.Server.Models
{
    public class ProductDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public int CategoryId { get; set; }
        public string CategoryType { get; set; }
        public string CategorySeason { get; set; }
        public List<ImageDto> Images { get; set; }
    }

    public class ImageDto
    {
        public int ImageId { get; set; }
        public string Url { get; set; }
    }
}
