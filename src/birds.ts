// We are going to create a class named Bird
// Creating a class is as easy as using the "class" keyword
// By convention the first letter in the name of a class is capitalized;
// this will help us tell thed difference between a class and an object

class Bird {
    // We declare properties by just dropping them into the class like so
    name: string
    canFly: boolean
    // The properties above are just placeholders, undefined

    // You can also assign default values as if they were regular variables
    hasFeathers: boolean = true

    // Lastly we need our constructor
    // To make a constructor, drop in a function with the name 'constructor'
    // define parameters for the properties that will need to be set when creating a new 
    // object from this class
    constructor(name: string, canFly: boolean) {
        // The word 'this' refers to an object made from the class;
        // here, it means that when the constructor is called, that version of the 
        // object will use the 'name' and 'canFly' arguments passed in,
        // and assign them to it's own properties
        this.name = name
        this.canFly = canFly
    }
}
// To use the class as a type, simply use it anywhere a type would go
let birds: Array<Bird> = [
    new Bird('Toucan', true),
    new Bird("Penguin", false),
    new Bird("Pidgeon", true),
    new Bird("Emu", false),
]
birds.forEach((item: Bird) => {
    console.log(item)
})

// If we use the keyword 'new' to declare that we're making a new instance of the bird class
// we then need to pass in our parameters

// let toucan = new Bird('Toucan', true)
// let penguin = new Bird('Penguin', false)

// console.log(toucan)
// console.log(penguin)