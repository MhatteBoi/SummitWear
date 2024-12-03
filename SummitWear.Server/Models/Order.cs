using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }

        public DateTime OrderDate { get; set; }
        public int UserId { get; set; } // Foreign key to User
    }
}
