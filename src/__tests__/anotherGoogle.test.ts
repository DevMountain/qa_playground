import { Builder, By, Capabilities, WebDriver } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// Creating a standard class.
class Page {
    // A url can be helpful, however it is unnecessary
    url: string
    // You should a WebDriver property in your class
    driver: WebDriver
    searchBar: By = By.css('input[name="q"]')
    results: By = By.css('#res')
    // Let's add a constructor so we can create new instances of this class
    // We'll use the driver as a parameter
    constructor(url?: string, driver?: WebDriver) {
        if (url) this.url = url // We're only assigning the url if a url is passed into the constructor
        if (driver) this.driver = driver // We're only assigning the driver if a driver is passed into the constructor
        else this.getDriver // Otherwise our constructor will use the getDriver() method to create a new driver.
    }
    getDriver() {
        if (this.driver) // if the page already has a driver, return the driver
            return this.driver
        else // If the page doesn't have a driver, we will create one for it
            return new Builder().withCapabilities(Capabilities.chrome()).build()
    }
    async navigate() {
        await this.driver.get(this.url)
    }
}

test('Loading and searching Google', async () => {
    const google: Page = new Page('https://www.google.com/', driver)
    await google.navigate()
    await (await driver).findElement(google.searchBar).sendKeys('Kittens \n')
    const myText = await (await (await driver).findElement(google.results)).getText()
    expect(myText).toContain('kittens')

    await (await driver).sleep(5000)

    await (await driver).quit()
})