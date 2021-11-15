// Tyler Griffin 
// grif0241@algonquinlive.com
// November 6, 2021

const fs = require("fs")
const data = require('./data')

// FILTER METHOD
let chars = data.characters.filter((element) => {
    if(element.race[0] !== "S" && element.race[0] !== "s" ) {
        return true
    }
})
console.log(chars)

// SORT METHOD
let sortedChars = chars.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    } else if (b.name  > a.name) {
        return -1
    } else {
        return 0
    }
})
console.log(sortedChars)

