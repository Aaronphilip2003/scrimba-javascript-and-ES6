let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&



if (dayOfMonth===13 && weekday==="Friday")
{
    console.log("😱")
}

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function randomHand(){
    let randomIndex=Math.floor(Math.random()*3)
    return hands[randomIndex]
}

console.log(randomHand())

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
