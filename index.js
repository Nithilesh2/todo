let task = document.querySelector("#task");
let add = document.querySelector(".button");
let listcontainer = document.querySelector(".list-container");
let box = document.querySelector(".box");

window.addEventListener("load",()=>{
    if(listcontainer.childElementCount = 0){
        box.style.maxHeight = "220px";
    }
    if(listcontainer.childElementCount > 0){
        box.style.maxHeight = "520px";
    }
})

add.addEventListener("click",()=>{
    if(listcontainer.childElementCount = 0){
        box.style.maxHeight = "220px";
    }
    else{
        box.style.maxHeight = "520px";
        if(task.value == ""){
            alert("Please enter task before adding XD");
        }
        else{
            let li = document.createElement("li");
            let span = document.createElement("span");
            let i = document.createElement("i");
            li.innerHTML = task.value;
            listcontainer.appendChild(li);
            li.appendChild(span);
            span.appendChild(i);
            i.className = "fa-solid fa-trash-can";
        }
        task.value = "";
        getData();
    }
})

task.addEventListener("keypress",(event)=>{
    if(event.key == "Enter"){
        if(listcontainer.childElementCount = 0){
            box.style.maxHeight = "220px";
        }
        else{
            box.style.maxHeight = "520px";
            if(task.value == ""){
                alert("Please enter task before adding XD");
            }
            else{
                let li = document.createElement("li");
                let span = document.createElement("span");
                let i = document.createElement("i");
                li.innerHTML = task.value;
                listcontainer.appendChild(li);
                li.appendChild(span);
                span.appendChild(i);
                i.className = "fa-solid fa-trash-can";
            }
            task.value = "";
            getData();
        }
    }
})


listcontainer.addEventListener("click",(eve)=>{
    if(eve.target.tagName === "LI"){
        eve.target.classList.toggle("checked");
        getData();
    }
    else if(eve.target.tagName === "SPAN"){
        eve.target.parentElement.remove();
        getData();
    }
    else{
        eve.target.parentElement.parentElement.remove();
        getData();
    }
})



function getData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showData(){
    listcontainer.innerHTML = localStorage.getItem("data")
}


showData();