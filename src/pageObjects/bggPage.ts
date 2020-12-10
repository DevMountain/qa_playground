import {WebDriver, By, until} from 'selenium-webdriver'

export class BggPage {
    driver: WebDriver;
    url: string = "https://boardgamegeek.com/";
    headerLogo: By = By.className("menu-logo-symbol"); // this element has a unique class
    searchBar: By = By.name("searchTerm"); // this element has a unique name
    gamePageName: By = By.xpath("//h1/a"); // many selectors pulled multiple elements, but the game name was the only a tag in an h1
    gamePageRating: By = By.css('[ng-show="showRating"]'); // you can use all sorts of different attributes for locators
    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.headerLogo));
        await this.driver.wait(
            until.elementIsVisible(await this.driver.findElement(this.headerLogo))
        );
    }
    async getResultNameLink(name: string) {
        let xpathToFind = `//div[@id='maincontent']//a[text()='${name}']`;
        await this.driver.wait(until.elementLocated(By.xpath(xpathToFind)));
        return await this.driver.findElement(By.xpath(xpathToFind));
    }
    /**
     * @param {By} elementBy - The By you are using to find a certain element
     * @returns Promise<string> - Resolves into the element's text
     * @example 
     * expect(await page.getText(By.name'foo')).toBe('something')
     */
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))

        return await this.driver.findElement(elementBy).getText()
    }
    async getAttribute(elementBy: By, attribute: string) {
        await this.driver.wait(until.elementLocated(elementBy))

        return await (await this.driver.findElement(elementBy)).getAttribute(attribute)
    }
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));

        return (await this.driver.findElement(elementBy)).click();
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));

        return await this.driver.findElement(elementBy).sendKeys(keys);
    }
}