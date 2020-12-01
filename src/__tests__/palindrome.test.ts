// This function will just return a string but reversed.
function getPalindrome(word: string) {
    return word.split("").reverse().join("")
}

let Palindromes: Array<string> = ["tacocat", "racecar", "hannah", "asdffdsa", "civic"]
let notPalindromes: Array<string> = ["test", "Sos", "Dre"]

// Looping through an array and making a test for each item is super helpful!
Palindromes.forEach(word => {
    test(`Looking to see if ${word} is a palindrome`, () => {
        expect(getPalindrome(word)).toEqual(word)
    })
})

notPalindromes.forEach(word => {
    test(`Looking to see if ${word} is NOT a palindrome`, () => {
        expect(getPalindrome(word)).not.toEqual(word)
    })
})