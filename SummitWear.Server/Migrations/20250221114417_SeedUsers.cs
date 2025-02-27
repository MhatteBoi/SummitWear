using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SummitWear.Server.Migrations
{
    /// <inheritdoc />
    public partial class SeedUsers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FullName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "86646feb-71f7-4b88-b17d-2a0c6ccd282e", 0, "919f581c-4865-476d-948f-ff45a641fa24", "admin@example.com", true, "Admin User", false, null, "ADMIN@EXAMPLE.COM", "ADMIN@EXAMPLE.COM", "AQAAAAIAAYagAAAAECbna+zc7NtdoZRW5crNSPrcGOThDbWlo/apUG5b5yCX1vNjg07+gQO3xyNOfvcs7A==", null, false, "aceefe46-b163-4b1c-85b1-bd7e170dd5aa", false, "admin@example.com" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "86646feb-71f7-4b88-b17d-2a0c6ccd282e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "02c24973-4104-4a75-905e-5ca8abda1e32", null, "User", "USER" },
                    { "43cf588f-3996-490a-a4de-0ec46e95b776", null, "Admin", "ADMIN" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[,]
                {
                    { "43cf588f-3996-490a-a4de-0ec46e95b776", "86646feb-71f7-4b88-b17d-2a0c6ccd282e" },
                    { "02c24973-4104-4a75-905e-5ca8abda1e32", "b74ddd14-6340-4840-95c2-db12554843e5" }
                });
        }
    }
}
