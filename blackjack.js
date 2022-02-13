let firstCard=11
let secondCard=1
let sum=firstCard+secondCard
let message=""

let hasblackjack=false
let isAlive=true

function startgame(){
    if (sum<21)
    {
        message="Do you want to draw a new card? 😄"
    }
    else if(sum==21)
    {
        message="Wohoo you've got Blackjack! 🥳"
        hasblackjack=true
    }
    else
    {
        message="You're out of the Game!😭"
        isAlive=false
    }

    console.log(message)        
}



