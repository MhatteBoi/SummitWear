public class OrderDto
{
    public int OrderId { get; set; } // Matches "orderId"
    public DateTime OrderDate { get; set; } // Matches "orderDate"
    public Guid UserId { get; set; } // Matches "userId"
    public List<OrderItemDto> OrderItems { get; set; } = new(); // Matches "orderItems"
}