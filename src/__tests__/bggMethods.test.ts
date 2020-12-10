import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
} from "selenium-webdriver";

import {BggPage} from '../pageObjects/bggPage'

const chromedriver = require("chromedriver");

// this is standard "boilerplate" code.
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

const bgg = new BggPage(driver)

describe('Boardgamegeek.com', () => {
    jest.setTimeout(15000)
    beforeEach(async () => {
        await bgg.navigate()
    })
    afterAll(async () => {
        await driver.quit()
    })
    test('The page loads', async () => {
        expect(await bgg.getAttribute(bgg.headerLogo, 'alt')).toBe("boardgame geek logo")
    })
    test('Terraforming Mars has a better rating than apples to apples', async () => {
        await driver.get("https://boardgamegeek.com/boardgame/167791/terraforming-mars")
        let tmRating = parseFloat(await bgg.getText(bgg.gamePageRating))
        await driver.get("https://boardgamegeek.com/boardgame/74/apples-apples")
        let ataRating = parseFloat(await bgg.getText(bgg.gamePageRating))

        expect(tmRating).toBeGreaterThan(ataRating)
    })
})