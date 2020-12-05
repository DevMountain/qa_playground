import { Builder, Capabilities } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('Can it load Amazon', async () => {
    await (await driver).get('https://www.amazon.com/')

    await (await driver).quit()
})