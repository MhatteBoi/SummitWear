using SummitWear.Server.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SummitWear.Server.Models
{
    public class Category
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CategoryId { get; set; }

        [Required]
        public string Type { get; set; } // Example: "Pants", "Jacket", "Boots"

        [Required]
        public string Season { get; set; } // Example: "Winter", "Spring", "Summer", "Fall"
    }
}


                // CategoryId = 1, Type = "Pants" Season = "Winter" 
                // CategoryId = 2, Type = "Pants", Season = "Spring" 
                // CategoryId = 3, Type = "Pants", Season = "Summer" 
                // CategoryId = 4, Type = "Pants", Season = "Fall" 


                // CategoryId = 5, Type = "Jacket", Season = "Winter"
                // CategoryId = 6, Type = "Jacket", Season = "Spring"
                // CategoryId = 7, Type = "Jacket", Season = "Summer"
                // CategoryId = 8, Type = "Jacket", Season = "Fall" 

                // CategoryId = 9, Type = "Boots", Season = "Winter" 
                // CategoryId = 10, Type = "Boots", Season = "Spring"
                // CategoryId = 11, Type = "Boots", Season = "Summer"
                // CategoryId = 12, Type = "Boots", Season = "Fall" 