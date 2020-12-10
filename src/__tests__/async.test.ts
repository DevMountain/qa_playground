import { Builder, By, Capabilities, until } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// This test is NOT an async test.
test("Promise chaining", async () => {
    await driver.get('https://www.google.com/')
    await driver.wait(until.elementLocated(By.name('q')))
    await driver.findElement(By.name('q')).sendKeys('Puppies \n')
    await driver.wait(until.elementLocated(By.id('rso')))

    let myText = await driver.findElement(By.id('rso')).getText()

    expect(myText.toLowerCase()).toContain('puppies')
})

afterAll(async () => {
    await driver.quit()
})