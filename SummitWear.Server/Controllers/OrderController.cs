using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SummitWear.Server.Data;
using SummitWear.Server.Models;
using System.Security.Claims;
namespace SummitWear.Server.Controllers;

[ApiController]
[Route("api/Order")]
public class OrderController : ControllerBase
{
    private readonly ApplicationDbContext _context; // Your DbContext
    private readonly UserManager<User> _userManager; // If using ASP.NET Identity

    public OrderController(ApplicationDbContext context, UserManager<User> userManager)
    {
        _context = context;
        _userManager = userManager;
    }

    // Existing GET method, fetching orders based on UserID (from localStorage or authenticated user)
 
    [HttpGet("{orderId}")]
    public async Task<ActionResult<Order>> GetOrder(int orderId)
    {
        var order = await _context.Orders
                                  .Include(o => o.OrderItems) // Include OrderItems if needed
                                  .FirstOrDefaultAsync(o => o.OrderId == orderId);

        if (order == null)
        {
            return NotFound($"Order with ID {orderId} not found.");
        }

        return Ok(order);
    }

    // POST method to create a new order
    [HttpPost("CreateOrder")]
    public async Task<ActionResult<Order>> CreateOrder([FromBody] OrderDto orderDto)
    {
        if (orderDto == null)
        {
            return BadRequest("Order data is required.");
        }

        var userId = GetCurrentUserId(); // This would retrieve the user ID from local storage or authentication context

        var order = new Order
        {
            OrderDate = DateTime.Now,
            UserId = userId,
        };

        _context.Orders.Add(order);
        await _context.SaveChangesAsync();

        foreach (var item in orderDto.OrderItems)
        {
            var orderItem = new OrderItem
            {
                OrderId = order.OrderId,
                ProductId = item.ProductId,
                Quantity = item.Quantity,
                UnitPrice = item.UnitPrice
            };

            _context.OrderItems.Add(orderItem);
        }

        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetOrder), new { orderId = order.OrderId }, order);
    }

    // Helper method to retrieve user ID from localStorage or authenticated user
    private int GetCurrentUserId()
    {
        // This assumes the user ID is stored in localStorage or JWT token.
        // If you're using ASP.NET Identity and JWT, you can get the user ID from the User object
        // For now, we'll mock this as a simple example:
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);

        if (userIdClaim == null)
        {
            throw new Exception("User ID not found in token.");
        }

        return int.Parse(userIdClaim.Value); // Placeholder for actual user retrieval logic
    }
}