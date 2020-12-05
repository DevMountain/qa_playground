import { Builder, Capabilities } from "selenium-webdriver"

const chromedriver = require("chromedriver")
// This make sure that the test can find the chromedriver that we just installed.

// We need to build the driver that we will use to interact with chrome
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// If we are hooking into the UI of a website, we need the keyword "async"
test("Can it load Google", async () => {
    // We can load pages with 'driver.get()'
    await driver.get('https://www.google.com/')
    // We can use a 'driver.quit()' to shut down the driver, freeing up memory
    await (await driver).quit()
})