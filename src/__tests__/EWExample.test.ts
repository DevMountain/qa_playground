import { EnterWanted } from '../pageObjects/enterWanted';
import { Builder, Capabilities, until, WebDriver } from 'selenium-webdriver';

const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const ewpage = new EnterWanted(driver);


describe("Enter Wanted", ()=>{
    jest.setTimeout(30000);
    beforeEach(async () => {
      await ewpage.navigate();
    });
   
    afterAll(async () => {
      await driver.quit();
    });

    test("load the page", async()=>{
        await driver.wait(until.elementsLocated(ewpage.title));
        expect(await (await driver.findElement(ewpage.title)).getText()).toBe("Enter Wanted");

    })

    test("submit with validation", async()=>{
        //input header
        await driver.wait(until.elementsLocated(ewpage.header));
        await driver.findElement(ewpage.header).sendKeys("Killing People\n");
        //input mke
        await driver.wait(until.elementsLocated(ewpage.mke));
        await driver.findElement(ewpage.mke).sendKeys("mke\n");
        //input originating agency identifier
        await driver.wait(until.elementsLocated(ewpage.oai));
        await driver.findElement(ewpage.oai).sendKeys("K00000007\n");
        //input name
        await driver.wait(until.elementsLocated(ewpage.name));
        await driver.findElement(ewpage.name).sendKeys("Peter Tran\n");
        //input sex
        await driver.wait(until.elementsLocated(ewpage.sex));
        await driver.findElement(ewpage.sex).sendKeys("m\n");
        //input race
        await driver.wait(until.elementsLocated(ewpage.race));
        await driver.findElement(ewpage.race).sendKeys("a\n");
        //input height
        await driver.wait(until.elementsLocated(ewpage.height));
        await driver.findElement(ewpage.height).sendKeys("170\n");
        //input weight
        await driver.wait(until.elementsLocated(ewpage.weight));
        await driver.findElement(ewpage.weight).sendKeys("170\n");
        //input hair
        await driver.wait(until.elementsLocated(ewpage.hair));
        await driver.findElement(ewpage.hair).sendKeys("black\n");
        //input offense
        await driver.wait(until.elementsLocated(ewpage.offense));
        await driver.findElement(ewpage.offense).sendKeys("killer\n");
        //input date of warrant 
        await driver.wait(until.elementsLocated(ewpage.dow));
        await driver.findElement(ewpage.dow).sendKeys("01012019\n");
        //click submit
        await driver.wait(until.elementsLocated(ewpage.submit));
        await (await driver.findElement(ewpage.submit)).click();

        expect (await ewpage.getResult()).toContain(
            "Killing People.mke.K00000007.Peter Tran.m.a.170.170.black.killer.01012019");

    })
    
})