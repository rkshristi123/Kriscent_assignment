const express = require('express');
const { Builder, By } = require('selenium-webdriver');
 
const app = express();
const port = 3000;


app.get('/', async (request, response) => {
    // Web Scraping Code here
    try {
      const data = await WebScrapingLocalTest();
      response.send(data);
    } catch (error) {
      response.status(500).json({
        message: 'Server error occurred',
      });
    }
   });

   app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
   });


   async function WebScrapingLocalTest() {
    try {
      driver = await new Builder().forBrowser('chrome').build();
      await driver.get('https://food.grab.com/sg/en/restaurants');
     const title= await driver.findElement(By.className("name___2epcT"));
//    return title
console.log(title)
    
    } catch (error) {
      throw new Error(error);
    } finally {
      await driver.quit();
    }
   }

 