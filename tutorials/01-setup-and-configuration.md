# Tutorial 1: GTM Setup and GA4 Configuration

This tutorial will guide you through setting up Google Tag Manager and configuring GA4 for e-commerce tracking.

## Part 1: Google Tag Manager Setup

### 1.1 Create a GTM Account and Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Create Account"
3. Fill in the details:
   - Account Name: [Your Business Name]
   - Country: [Your Country]
4. Create Container:
   - Container name: [Your Website Name]
   - Target platform: Web
5. Accept the Terms of Service

### 1.2 Install GTM Code

Add the following code as high as possible in the `<head>` of your website:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->
```

Add this code immediately after the opening `<body>` tag:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Part 2: GA4 Configuration

### 2.1 Create a GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" (gear icon)
3. In the Account column, click "Create Account" if needed
4. Create a new property:
   - Property name: [Your Website Name]
   - Reporting time zone: [Your Time Zone]
   - Currency: [Your Currency]
5. Click "Create"

### 2.2 Configure Data Streams

1. In GA4 property, go to Admin → Data Streams
2. Click "Add Stream" → Web
3. Enter your website URL and stream name
4. Enable enhanced measurement if desired

### 2.3 Link GTM with GA4

1. In GTM, create a new tag:
   - Tag Type: Google Analytics: GA4 Configuration
   - Measurement ID: G-XXXXXXXX (from GA4)
   - Fields to Set:
     ```javascript
     {
       send_page_view: true,
       allow_google_signals: true,
       allow_ad_personalization_signals: true
     }
     ```
2. Triggering: All Pages
3. Save and publish

## Part 3: Data Layer Setup

### 3.1 Initialize Data Layer

Add this code before the GTM script:

```html
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXX');
</script>
```

### 3.2 Test Basic Implementation

1. Enable Preview mode in GTM
2. Visit your website
3. Verify that:
   - GTM is loading correctly
   - GA4 Configuration tag fires
   - Page views are being recorded

## Exercises

1. Set up a new GTM account and container
2. Create a GA4 property and configure a data stream
3. Implement the basic tracking code
4. Use GTM Preview mode to verify the implementation
5. Check real-time reports in GA4

## Validation Checklist

- [ ] GTM container loads successfully
- [ ] GA4 Configuration tag fires on all pages
- [ ] Data Layer is properly initialized
- [ ] Preview mode shows expected behavior
- [ ] Real-time reports show data in GA4

## Common Issues and Solutions

1. **GTM Not Loading**
   - Check if the container ID is correct
   - Verify code placement in HTML
   - Check for JavaScript errors

2. **GA4 Not Receiving Data**
   - Verify Measurement ID
   - Check tag firing triggers
   - Validate through real-time reports

3. **Data Layer Issues**
   - Ensure proper initialization
   - Check for syntax errors
   - Verify timing of pushes

## Next Steps

Once you've completed this setup, proceed to Tutorial 2 where we'll implement basic e-commerce events like view_item and add_to_cart.

## Additional Resources

- [GTM Documentation](https://developers.google.com/tag-manager)
- [GA4 E-commerce Documentation](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)
- [Data Layer Reference](https://developers.google.com/tag-manager/devguide) 