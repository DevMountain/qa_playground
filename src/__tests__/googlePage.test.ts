import { Google } from '../pageObjects/googlePage'
const fs = require('fs')

const google = new Google()

test("Does a search", async () => {
    await google.navigate()
    await google.search('Cyberpunk Reviews')
    let myText = await google.getResults()
    expect(myText.toLowerCase()).toContain('cyberpunk 2077 review')
    fs.writeFile(`${__dirname}/../dataOutput/google.png`,
        await google.driver.takeScreenshot(),
        "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Image Saved')
        }
    )
    fs.writeFile(`${__dirname}/../dataOutput/test.txt`, myText, (e) => {
        if (e) console.error(e)
        else console.log('File Saved')
    })
})
afterAll(async () => {
    await google.driver.quit()
})