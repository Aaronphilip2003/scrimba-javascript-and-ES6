let countEl=document.getElementById("count-el")
let saveEntry=document.getElementById("save-feature")

let count=0;

function increment(){
    count=count+1;
    countEl.textContent=count;

}

function save(){
    saveEntry.textContent+=" "+count+" -";
    count=0
}
