// This line will enable us to interact with our file system
const fs = require('fs')

const myObject = {
    name: 'Dre',
    title: 'Teacher',
    profession: 'Not a Doctor'
}

// writeFile() will save a to specified file path
fs.writeFile(
    // The first thing you give is the path to where you will save the file
    `${__dirname}/person${myObject.name}.json`,
    // Next is the thing you're wanting to save
    JSON.stringify(myObject, null, "    "),
    // The last thing required is a callback
    (bacon) => {
        if (bacon) console.error(bacon)
        else console.log('The file was saved')
    }
)

fs.writeFile(`${__dirname}/textExample.txt`, 'Whatever Text I Want.', (e) => {
    if (e) console.error(e)
    else console.log('File Saved Successfully')
})