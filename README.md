# Web Scraper

A simple web scraper built with Playwright that extracts product information from Amazon search results.

## Description

This web scraper uses Playwright to automate browser interactions and scrape product data from Amazon's search pages. It extracts key information including product titles, images, prices, and links for PlayStation 5 consoles and related products.

### Features

- **Headless browsing**: Runs in headless mode for efficient scraping
- **Product extraction**: Extracts title, image, price, and product links
- **Error handling**: Includes proper error handling with optional chaining
- **Clean data output**: Filters out incomplete results and returns structured data

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. **Clone or download this project**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```
   
   Or install only Chromium (which this scraper uses):
   ```bash
   npx playwright install chromium
   ```

## Usage

Run the scraper:

```bash
node index.mjs
```

The scraper will:
1. Launch a headless Chromium browser
2. Navigate to Amazon's PS5 search results page
3. Extract product information from search results
4. Display the scraped data in the console
5. Close the browser

## Output

The scraper returns an array of product objects with the following structure:

```javascript
{
  title: "Product title",
  image: "https://image-url.jpg",
  price: "$XX.XX" || "See website",
  link: "/product-link"
}
```

## Dependencies

- **playwright**: Web automation library for browser control and scraping

## Notes

- The scraper is configured for Amazon's current page structure
- Prices may show as "See website" if not directly available in search results
- Links are relative URLs that need to be prefixed with `https://amazon.com`
- The scraper includes error handling for missing elements

## Legal Notice

This scraper is for educational purposes. Please ensure you comply with the target website's robots.txt file and terms of service when using this tool.