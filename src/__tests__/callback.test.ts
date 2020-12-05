/** gets a number between 1 and 10 for the callback
@callback numberHandler is passed the number generated */

function getNumber(numberHandler) {
    numberHandler(Math.ceil(Math.random() * 10))
}

function ourCallback (result: number) {
    console.log(result)
}

test('My Callback Test', () => {
    getNumber(ourCallback)
})