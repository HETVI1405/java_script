const input = document.querySelector("#task");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const err = document.querySelector("#err");
function addnote() {
    let task = input.value.trim();
    console.log(task);
    if (task === "") {
        err.innerHTML = "Please enter your task...";
    } else {
        err.innerHTML = ""; 
        let li = document.createElement("li");
        li.innerHTML = task + "<button class='delete'>delete</button>";
        list.appendChild(li);
        input.value = "";
        savedata();
    }
}


btn.addEventListener("click", addnote);

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        savedata(); 
    }
});

function savedata() {
    localStorage.setItem("data", list.innerHTML);
}

function showdata() {
    list.innerHTML = localStorage.getItem("data") || "";
}

showdata(); 
