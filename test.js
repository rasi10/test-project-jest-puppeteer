const puppeteer = require('puppeteer');


describe('Just a sample project to get started', () => {
  var browser, page;
  var url = 'https://www.google.com'

beforeEach (async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  })

afterEach (() => {
    browser.close()
  })

test('Title == Google', async () => {
    await page.goto(url);
    const title = await page.title();
    expect(title).toBe("Google");
  });

test('Location == https://www.google.com', async () => {
    await page.goto(url);
    const location = await page.url();
    expect(location).toBe("https://www.google.com/");
  });
})