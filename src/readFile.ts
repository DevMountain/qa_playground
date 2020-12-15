export {}
const fs = require('fs')

fs.readFile(`${__dirname}/personDre.json`, (e, data) => {
    if (e) console.error(e)
    else console.log(JSON.parse(data))
})