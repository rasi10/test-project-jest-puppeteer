const {checkTitle} = require('./index');

// If you want to import all the functions from a file
//const funcs = require('./index');
//if you import as funcs, you call the function as -> funcs.function();

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
    const title = await checkTitle("http://www.google.com", page);
    expect(title).toBe("Google");
    
  });

test('Location == https://www.google.com', async () => {
    //funcs.foo();
    await page.goto(url);
    const location = await page.url();
    expect(location).toBe("https://www.google.com/");
  });
})