let firstCard=11
let secondCard=10
let sum=firstCard+secondCard
let message=""

let hasblackjack=false
let isAlive=true

let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")

function startgame(){
    if (sum<21)
    {
        message="Do you want to draw a new card?"
    }
    else if(sum==21)
    {
        message="Wohoo you've got Blackjack!"
        hasblackjack=true
    }
    else
    {
        message="You're out of the Game!"
        isAlive=false
    }
    messageEl.textContent=message  
    sumEl.textContent="Sum:"+sum
}



