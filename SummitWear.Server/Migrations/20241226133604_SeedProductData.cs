using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SummitWear.Server.Migrations
{
    /// <inheritdoc />
    public partial class SeedProductData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "CategoryId", "Description", "Name", "Price", "Stock" },
                values: new object[,]
                {
                    { 1, 1, "Warm jacket", "Jacket", 150m, 10 },
                    { 2, 1, "Totemo fireu!", "winter-jacket", 120m, 15 }
                });

            migrationBuilder.InsertData(
                table: "ProductImage",
                columns: new[] { "ImageId", "ProductId", "Url" },
                values: new object[,]
                {
                    { 1, 1, "https://drive.google.com/uc?id=17K_lwUtbgkput0pWFkt6kYDlMPAGiP9a" },
                    { 2, 2, "https://drive.google.com/uc?id=1DNTRyruDPuAIewlLyPz1phySo0LxhgPd" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ProductImage",
                keyColumn: "ImageId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ProductImage",
                keyColumn: "ImageId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductId",
                keyValue: 2);
        }
    }
}
