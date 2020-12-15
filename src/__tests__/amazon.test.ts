import { Builder, By, Capabilities } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test("Amazon Practice", async () => {
    await (await driver).get('https://www.amazon.com')
    const searchBar: By = By.css('#twotabsearchtextbox')
    const result: By = By.xpath('(//div[@class="a-section a-spacing-none a-spacing-top-small"])[1]')

    await (await driver).findElement(searchBar).sendKeys('Baby Yoda \n')
    let resultText = await (await (await driver).findElement(result)).getText()
    expect(resultText).toContain("The Child")
    await (await driver).quit()
})


console.log('Hello World')