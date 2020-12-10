import { Builder, By, Capabilities, until } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

import * as animals from '../animals.json'

animals.forEach((animal) => {
    test(`Searching Google for ${animal}`, async () => {
        await (await driver).get("https://www.google.com")
        await driver.wait(until.elementLocated(By.name('q')))
        await (await driver).findElement(By.name('q')).sendKeys(`${animal} \n`)
        await driver.wait(until.elementLocated(By.id('rso')))
        let myText = await (await driver.findElement(By.id('rso'))).getText()
        expect(myText.toLowerCase()).toContain(animal)
    })
})

afterAll(async () => {
    await (await driver).quit()
})