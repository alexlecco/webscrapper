import { chromium } from 'playwright';

const browser = await chromium.launch(
  { headless: true }
);

const page = await browser.newPage();

await page.goto('https://www.amazon.com/s?k=ps5&crid=1ZXKZTE3A169S&sprefix=ps5%2Caps%2C284&ref=nb_sb_noss_1');

const products = await page.$$eval(
  'div.s-result-item[data-component-type="s-search-result"]',
  (items) => (
    items
      .map((el) => {
        const title = el.querySelector('h2 span')?.innerText?.trim();
        if (!title) return null;

        const image = el.querySelector('img.s-image')?.getAttribute('src') || null;
        const price = el.querySelector('.a-price .a-offscreen')?.innerText?.trim() || 'See website';
        const link =
          el.querySelector('h2 a')?.getAttribute('href') ||
          el.querySelector('a.a-link-normal')?.getAttribute('href') ||
          null;

        return { title, image, price, link };
      })
      .filter(Boolean)
  )
);

/*
const products = await page.$$eval('s-search-results',
  (results) => (
    results.map((el) => {
      const title = el.querySelector('h2')?.innerText
      if (!title) return null;

      const image = el.querySelector('s-image').getAttribute('src');

      const price = el.querySelector('.a-price .a-offscreen')?.innerText || 'See website';

      const link = el.querySelector('.a-link-normal').getAttribute('href');

      return {
        title,
        image,
        price,
        link,
      };
    })
  )
);
*/

console.log("productos:::::::", products);

await browser.close();
