using System;

namespace Core.Entities;

public class ShoppingCart
{
    public required string Id { get; set; }
    public List<CartItem> Items { get; set; } = [];

    public int? DeliveryMethodId { get; set; }

    public string? ClientSecret { get; set; } //we get this when we create a payment intent

    public string? PaymentIntentId { get; set; }
    public AppCoupon? Coupon { get; set; }


    

}
