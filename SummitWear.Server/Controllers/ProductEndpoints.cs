using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.OpenApi;
using SummitWear.Server.Data;
using SummitWear.Server.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
namespace SummitWear.Server.Controllers;

public static class ProductEndpoints
{
    public static void MapProductEndpoints (this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/api/Product").WithTags(nameof(Product));

        group.MapGet("/", async (ApplicationDbContext db) =>
        {
            var products = await db.Products
                .Include(p => p.Images)
                .Include(p => p.Category)
                .ToListAsync();

            return products.Select(p => new ProductDto // This prevents circular serialization
            {
                ProductId = p.ProductId,
                Name = p.Name,
                Description = p.Description,
                Price = p.Price,
                Stock = p.Stock,
                CategoryId = p.CategoryId,
                CategoryType = p.Category.Type,
                CategorySeason = p.Category.Season,
                Images = p.Images.Select(i => new ImageDto
                {
                    ImageId = i.ImageId,
                    Url = i.Url
                }).ToList()
            });
        })
        .WithName("GetAllProducts")
        .WithOpenApi();

        group.MapGet("/{productid}", async Task<Results<Ok<ProductDto>, NotFound>> (int productid, ApplicationDbContext db) =>
        {
            var product = await db.Products
                .Include(p => p.Images)
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.ProductId == productid);

            if (product is null)
                return TypedResults.NotFound();

            var productDto = new ProductDto
            {
                ProductId = product.ProductId,
                Name = product.Name,
                Price = product.Price,
                Description = product.Description,
                Images = product.Images.Select(img => new ImageDto
                {
                    ImageId = img.ImageId,
                    Url = img.Url
                }).ToList()
            };

            return TypedResults.Ok(productDto);
        })
        .WithName("GetProductById")
        .WithOpenApi();

        group.MapPut("/{productid}", async Task<Results<Ok, NotFound>> (int productid, ProductCreateDto updatedProduct, ApplicationDbContext db) =>
        {
            // 1. Get the existing product with its images
            var product = await db.Products
                .Include(p => p.Images)
                .FirstOrDefaultAsync(p => p.ProductId == productid);

            // 2. If the product doesn't exist, return a NotFound response
            if (product == null)
                return TypedResults.NotFound();

            // 3. Update scalar properties of the product
            product.Name = updatedProduct.Name;
            product.Description = updatedProduct.Description;
            product.Price = updatedProduct.Price;
            product.Stock = updatedProduct.Stock;
            product.CategoryId = updatedProduct.CategoryId;

            // 4. Handle images
            product.Images ??= new List<ProductImage>();

            // 4.1 Remove deleted images
            var currentUrls = product.Images.Select(i => i.Url).ToList();
            var newUrls = updatedProduct.Images?.Select(i => i.Url).ToList() ?? new List<string>();

            var toRemove = product.Images
                .Where(i => !newUrls.Contains(i.Url))
                .ToList();

            foreach (var img in toRemove)
            {
                product.Images.Remove(img);
            }

            // 4.2 Add new images
            var toAdd = updatedProduct.Images?
                .Where(i => !currentUrls.Contains(i.Url))
                .Select(i => new ProductImage { Url = i.Url })
                .ToList();

            if (toAdd?.Any() == true)
            {
                foreach (var img in toAdd)
                {
                    product.Images.Add(img);
                }
            }

            // 5. Save changes to the database
            await db.SaveChangesAsync();

            // 6. Return OK response
            return TypedResults.Ok();
        })
        .WithName("UpdateProduct")
        .WithOpenApi();


        group.MapPost("/", async (ProductCreateDto productDto, ApplicationDbContext db) =>
        {
            var product = new Product
            {
                Name = productDto.Name,
                Description = productDto.Description,
                Price = productDto.Price,
                Stock = productDto.Stock,
                CategoryId = productDto.CategoryId,
                Images = productDto.Images?.Select(i => new ProductImage { Url = i.Url }).ToList()
            };

            db.Products.Add(product);
            await db.SaveChangesAsync();
            // Return DTO without navigation properties
            return TypedResults.Created($"/api/Product/{product.ProductId}", new
            {
                product.ProductId,
                product.Name,
                product.Description,
                product.Price,
                product.Stock,
                product.CategoryId,
                Images = product.Images?.Select(i => new { i.Url })
            });
        })
        .WithName("CreateProduct")
        .WithOpenApi();

        group.MapDelete("/{productid}", async Task<Results<Ok, NotFound>> (int productid, ApplicationDbContext db) =>
        {
            var affected = await db.Products
                .Where(model => model.ProductId == productid)
                .ExecuteDeleteAsync();
            return affected == 1 ? TypedResults.Ok() : TypedResults.NotFound();
        })
        .WithName("DeleteProduct")
        .WithOpenApi();
    }
}
