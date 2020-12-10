import { Builder, By, Capabilities, until } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// This test is NOT an async test.
test("Promise chaining", () => {
    return driver.get('https://www.google.com/')
        .then(() => {
            // Each callback we add will return another promise
            // Each promise, we can call another .then()
            return driver.wait(until.elementLocated(By.name('q')))
        })
        .then(() => {
            return driver.findElement(By.name('q')).sendKeys('Puppies \n')
        })
        .then(() => {
            // We want to wait for the results to be located
            return driver.wait(until.elementLocated(By.id('rso')))
        })
        .then(() => {
            // This promise will resolve into the text of the selector
            return driver.findElement(By.id('rso')).getText()
        })
        // We can pass that value from the .getText() into our next callback as "result"
        // We want to use that result in our callback, or we can throw it into a variable
        // that we've declared outside of this chain
        .then((result) => {
            // This is how we're handling the result of the previous promise
            // We'll use that text we got from last callback inside of this one
            expect(result.toLowerCase()).toContain('puppies')

            // After adding in that .then(), our test is now returning a promise to return another promise
            // Jest will wait for the whole chain to resolve.
            return driver.quit()
        })
        .catch((e) => {
            console.log(e)
            expect(false).toBeTruthy()
        })
})