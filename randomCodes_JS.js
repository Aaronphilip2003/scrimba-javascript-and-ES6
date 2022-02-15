let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&



if (dayOfMonth===13 && weekday==="Friday")
{
    console.log("😱")
}

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function randomHand(){
    let randomIndex=Math.floor(Math.random()*3)
    return hands[randomIndex]
}

console.log(randomHand())

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit()
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
