# Demo E-commerce Store

This is a demo e-commerce store built specifically for learning GA4 E-commerce tracking implementation through Google Tag Manager. It provides a realistic environment to practice implementing various e-commerce events.

## Features

- Product listing page with multiple categories
- Product detail pages
- Shopping cart functionality
- Checkout process
- Order confirmation
- User account management
- Promotional banners
- Search functionality

## Technical Stack

- React.js for frontend
- Node.js/Express for backend
- Local storage for cart management
- Bootstrap for styling
- Data Layer implementation for GTM

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

## Data Layer Implementation

The demo store implements the following data layer events:

### Product Listing Page
```javascript
dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    items: [{
      item_id: "SKU_12345",
      item_name: "Product Name",
      item_brand: "Brand Name",
      item_category: "Category",
      price: 99.99,
      quantity: 1
    }]
  }
});
```

[Additional event examples will be documented here]

## Directory Structure

```
demo-store/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── data/
├── public/
└── tests/
```

## Testing Tools

The demo store includes built-in testing tools for validating your GTM implementation:

1. Data Layer Inspector
2. Event Validation Tool
3. Debug Console

## Best Practices

- Always use the debug mode in GTM when testing
- Validate data layer events in the browser console
- Check for proper event formatting
- Ensure all required parameters are present
- Test across different scenarios and user flows 