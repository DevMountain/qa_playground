class Bird {
    name: string
    canFly: boolean

    hasFeathers: boolean = true

    constructor(name: string, canFly: boolean) {
        this.name = name
        this.canFly = canFly
    }
    // Adding a method to a class is easy, just 'methodName(){}'
    // It's declaring a function, without the 'function' keyword.
    flapWings() {
        if(this.canFly) {
            // Just like the constructor, an object can access it's own properties with the 'this' keyword
            console.log(`The ${this.name} flaps it's wings and takes off into the sun!`)
        }
        else {
            console.log(`The ${this.name} flaps it's wings, and sadly looks at the ground`)
        }
    }
}
let birds: Array<Bird> = [
    new Bird('Toucan', true),
    new Bird("Penguin", false),
    new Bird("Pidgeon", true),
    new Bird("Emu", false),
]

birds.forEach((item: Bird) => {
    // To use a method on an object, you use the dot notation to acces that method,
    // in this case, item.flapWings()
    item.flapWings()
})