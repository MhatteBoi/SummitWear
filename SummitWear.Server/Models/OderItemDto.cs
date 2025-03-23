public class OrderItemDto
{
    public Guid OrderItemId { get; set; } // Matches "orderItemId"
    public int OrderId { get; set; } // Matches "orderId"
    public int ProductId { get; set; } // Matches "productId"
    public int Quantity { get; set; } // Matches "quantity"
    public decimal UnitPrice { get; set; } // Matches "unitPrice"
}