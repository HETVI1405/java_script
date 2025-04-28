const display_list=document.getElementById("display_list");
const input=document.getElementById("input");
const title =document.getElementById("title")

const btn=document.getElementById("btn");
const err=document.getElementById("err");

function addRecipe(){
    let inputres=input.value;
   
    console.log( inputres);
    if(inputres==="" || title ===" "){
        err.innerHTML="please enter recipe or title......"
    }
    else{
        err.innerHTML=" ";
        let li =document.createElement("li")
        li.innerHTML= "title :-"+title.value+"<br>" +inputres+"<button class='delete'>delete</button> "
        display_list.appendChild(li);
        title.value=" "
        input.value=" "
        savedata();
    }
}

btn.addEventListener("click",addRecipe)

display_list.addEventListener("click", function(e){
       if (e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        savedata();
       }
})



function savedata(){
    localStorage.setItem("data", display_list.innerHTML)
}
function showdata(){
    display_list.innerHTML=localStorage.getItem("data")|| " ";
}
showdata()
