using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SummitWear.Server.Models;

namespace SummitWear.Server.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        // Your DbSet properties...
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ShoppingCart> ShoppingCarts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<ShoppingCartItem> ShoppingCartItems { get; set; }
        public DbSet<UserInfo> UserInfos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            const string NormalUserId = "b74ddd14-6340-4840-95c2-db12554843e5";
            const string AdminUserId = "86646feb-71f7-4b88-b17d-2a0c6ccd282e";

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = AdminUserId,
                    UserName = "admin@example.com",
                    NormalizedUserName = "ADMIN@EXAMPLE.COM",
                    Email = "admin@example.com",
                    NormalizedEmail = "ADMIN@EXAMPLE.COM",
                    EmailConfirmed = true,
                    PasswordHash = "AQAAAAIAAYagAAAAECbna+zc7NtdoZRW5crNSPrcGOThDbWlo/apUG5b5yCX1vNjg07+gQO3xyNOfvcs7A==",
                    SecurityStamp = "aceefe46-b163-4b1c-85b1-bd7e170dd5aa",
                    ConcurrencyStamp = "919f581c-4865-476d-948f-ff45a641fa24",
                    FullName = "Admin User"
                },
                new User
                {
                    Id = NormalUserId,
                    UserName = "user@example.com",
                    NormalizedUserName = "USER@EXAMPLE.COM",
                    Email = "user@example.com",
                    NormalizedEmail = "USER@EXAMPLE.COM",
                    EmailConfirmed = true,
                    PasswordHash = "AQAAAAIAAYagAAAAEBBhD5JHjRbQMUbE4/0sZcNfALzl5jtPRGMQvlPVc7xNXZMDKGpYGYqxnRRhMHGcVA==",
                    SecurityStamp = "RNQD5JCPJZPXLXLKZQTLPXKGMYQNQNPQ",
                    ConcurrencyStamp = "c8554266-b401-4519-9aeb-a9283053fc58",
                    FullName = "Normal User"
                }
            );

            // Seed your other entities here...
        }
    }
}

