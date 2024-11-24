using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class Category
    {
        [Key]
        public Guid CategoryId { get; set; }

        public string Name { get; set; }
    }
}
