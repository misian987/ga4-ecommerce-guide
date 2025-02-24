# Tutorial 2: Implementing Core E-commerce Events

This tutorial covers the implementation of essential GA4 e-commerce events through Google Tag Manager.

## Overview of Core E-commerce Events

GA4 uses the following primary e-commerce events:
- view_item
- add_to_cart
- remove_from_cart
- begin_checkout
- add_shipping_info
- add_payment_info
- purchase

## Part 1: view_item Event

### 1.1 Data Layer Implementation

```javascript
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object
dataLayer.push({
  event: "view_item",
  ecommerce: {
    currency: "USD",
    value: 99.99,
    items: [{
      item_id: "SKU_12345",
      item_name: "Premium T-Shirt",
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Mens",
      item_category3: "Shirts",
      item_category4: "T-Shirts",
      item_variant: "Black",
      price: 99.99,
      quantity: 1
    }]
  }
});
```

### 1.2 GTM Configuration

1. Create a Custom Event Trigger:
   - Trigger Type: Custom Event
   - Event name: view_item
   
2. Create Variables:
   - ecommerce.items
   - ecommerce.currency
   - ecommerce.value

3. Create GA4 Event Tag:
   - Tag Type: GA4 Event
   - Event Name: view_item
   - Event Parameters: Map all relevant ecommerce variables
   - Trigger: view_item custom event

## Part 2: add_to_cart Event

### 2.1 Data Layer Implementation

```javascript
dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
    currency: "USD",
    value: 99.99,
    items: [{
      item_id: "SKU_12345",
      item_name: "Premium T-Shirt",
      item_brand: "Google",
      item_category: "Apparel",
      price: 99.99,
      quantity: 1
    }]
  }
});
```

### 2.2 GTM Configuration

Similar to view_item, but with:
- Event name: add_to_cart
- Custom trigger for add_to_cart event

## Part 3: begin_checkout Event

### 3.1 Data Layer Implementation

```javascript
dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "begin_checkout",
  ecommerce: {
    currency: "USD",
    value: 99.99,
    items: [{
      item_id: "SKU_12345",
      item_name: "Premium T-Shirt",
      item_brand: "Google",
      item_category: "Apparel",
      price: 99.99,
      quantity: 1
    }]
  }
});
```

## Part 4: purchase Event

### 4.1 Data Layer Implementation

```javascript
dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "purchase",
  ecommerce: {
    transaction_id: "T_12345",
    value: 99.99,
    tax: 4.90,
    shipping: 5.99,
    currency: "USD",
    items: [{
      item_id: "SKU_12345",
      item_name: "Premium T-Shirt",
      item_brand: "Google",
      item_category: "Apparel",
      price: 99.99,
      quantity: 1
    }]
  }
});
```

## Best Practices

1. **Data Layer Management**
   - Always clear previous ecommerce object
   - Maintain consistent currency format
   - Include all required parameters
   - Use consistent naming conventions

2. **GTM Configuration**
   - Use variables for reusable values
   - Test in debug mode before publishing
   - Document all implementations
   - Use version control for container changes

3. **Data Validation**
   - Verify all required parameters
   - Check currency formatting
   - Validate numeric values
   - Test across different scenarios

## Common Implementation Patterns

### Sequential Event Tracking

```javascript
// Product view
dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "view_item",
  ecommerce: {
    // ... item details
  }
});

// Add to cart
dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
    // ... cart details
  }
});

// Begin checkout
dataLayer.push({ ecommerce: null });
dataLayer.push({
  event: "begin_checkout",
  ecommerce: {
    // ... checkout details
  }
});
```

## Exercises

1. Implement view_item event on product pages
2. Set up add_to_cart tracking
3. Configure checkout event sequence
4. Test purchase event implementation
5. Validate data in GA4 DebugView

## Validation Checklist

- [ ] All required parameters present
- [ ] Currency formatting consistent
- [ ] Numeric values properly formatted
- [ ] Events firing in correct sequence
- [ ] Data appearing in GA4 reports

## Debugging Tools

1. **GTM Preview Mode**
   - Verify event triggers
   - Check data layer values
   - Validate tag firing sequence

2. **GA4 DebugView**
   - Real-time event validation
   - Parameter inspection
   - User journey analysis

3. **Console Debugging**
```javascript
dataLayer.push = function(obj) {
  console.log('dataLayer:', obj);
  Array.prototype.push.call(this, obj);
}
```

## Next Steps

Proceed to Tutorial 3 to learn about enhanced e-commerce features like promotions and refunds.

## Additional Resources

- [GA4 E-commerce Specification](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)
- [GTM E-commerce Implementation Guide](https://support.google.com/tagmanager/answer/6107169)
- [GA4 Debugging Guide](https://support.google.com/analytics/answer/7201382) 