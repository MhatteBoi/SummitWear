using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }

        public string Name { get; set; }
    }
}
