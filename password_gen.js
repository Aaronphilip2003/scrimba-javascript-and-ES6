let inputbox1=document.getElementById("box1")
let inputbox2=document.getElementById("box2")
let inputbox3=document.getElementById("box3")
let inputbox4=document.getElementById("box4")

alphanumeric="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&"
let pass1=""
let pass2=""
let pass3=""
let pass4=""
function generate(){
    for(let i=0;i<10;i++)
    {
        pass1+=alphanumeric[randomise()]
        pass2+=alphanumeric[randomise()]
        pass3+=alphanumeric[randomise()]
        pass4+=alphanumeric[randomise()]
    }
    inputbox1.value=pass1
    inputbox2.value=pass2   
    inputbox3.value=pass3
    inputbox4.value=pass4

}

function randomise(){
    index=Math.floor(Math.random()*(alphanumeric.length))
    return index
}