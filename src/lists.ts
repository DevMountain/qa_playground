let firstList: Array<number> = []
// Altough this array is currently empty, we will be adding to it later in this file
let secondList: Array<string> = ['Thing1', 'Thing2', 'Thing3']

// arrayName.push() will add an item to an array
firstList.push(121)
firstList.push(122)
firstList.push(123)
// After these pushes, our first list should be [121, 122, 123]
console.log('The first list is', firstList)
// Because we haven't added anything to the second list, let's use a pop!
// using arrayName.pop() will remove the last item, in our case: Thing3
console.log('The last item in the second list is', secondList.pop())
// Having popped that last item, our second list should be ['Thing1', 'Thing2']
console.log('The remaining items in the second list are', secondList)

// Let's access the 2 items in secondList
console.log('This should be Thing1', secondList[0])
console.log('This should be Thing2', secondList[1])