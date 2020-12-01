// This is a list of things to do.
var todos: Array<string> = ['Wash the car', 'Get groceries', 'Go to the gym', 'Feed the cat']

// Let's use a for loop to log each item in the console

// for loops: for (we declare the variable; statement to check; increment/decrement the variable) {The code that you want to run each loop}
// In this loop we're going to start at 0
// We want to loop using the array.length as our statement to check
// By using the arrayName.length, we are making sure that we will check every item in the array.
for (let i = 0; i < todos.length; i++) {
    console.log(`Todo #${i+1}: ${todos[i]}`)
}

// A forEach loop will repeat the function you give it for each item in the array
// arrayName.forEach(variable => {do this for each item})
todos.forEach(chore => {
    console.log(`You forgot to ${chore}`)
})