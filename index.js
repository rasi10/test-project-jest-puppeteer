const puppeteer = require('puppeteer');

async function checkTitle(url, page) {
 	console.log('foo called');
  	await page.goto(url);
    const title = await page.title();
    return title
}

//Exporting the function to be used in other files.
// If you want to export more functions, you add a comma 
//between the functions.
module.exports = {
	checkTitle
}