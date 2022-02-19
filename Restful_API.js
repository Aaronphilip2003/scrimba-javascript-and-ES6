
fetch('https://jsonplaceholder.typicode.com/comments/1')
.then(response=>response.json())
.then(response=>console.log(response))

fetch('https://jsonplaceholder.typicode.com/comments',{
    method:'POST',
    body:JSON.stringify({
        name:'Comment 105',
        email:'aaronphilip2003@gmail.com',
        body: 'Dopes comment in the game',
        postId: 1
    })
})
.then((response)=>response.json())
.then((data)=>console.log(data))
