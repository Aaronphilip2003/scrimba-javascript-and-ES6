//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random"; 

async function getJoke(){
    const response=await fetch(apiUrl);
    
    const data=await response.json();
    
    console.log(data)
}

getJoke()
