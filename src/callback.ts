function getUser(id: number, callback) {
    // Some code here that would go to our servers
    // and get some user

    // Currently we don't have any servers, so we are 
    // going to create a fake user
    let user = { id: 2, subscriber: true }
    callback(user)
}

function handleDeliveryFee(user): number {
    // We'll use a ternary statement! If user.subscriber is true, 
    // 0 is returned. Else, 3 is returned
    let fee: number = user.subscriber ? 0 : 3
    console.log(`You will pay a $${fee} fee.`)
    return user.subscriber ? 0 : 3
}

// To pass a predefined function in as a callback we don't "call" the function, 
// instead, we give the function name, without the "()", that's it!
getUser(1, handleDeliveryFee)

// This is an anonymous version of the same callback
getUser(1, (user) => {
    let fee: number = user.subscriber ? 0 : 3
    console.log(`You will pay a $${fee} fee.`)
    return user.subscriber ? 0 : 3
})