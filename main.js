const input = document.querySelector("input")
const addBtn = document.querySelector(".btn")
const output = document.querySelector(".output")
let toDo = []

function check(inputVal,toDo){
    if(inputVal === "") return false
    for (let i = 0;i<toDo.length;i++){
        if(toDo[i].title === inputVal){
            alert("Task Already Exist")
            return false
        }
    }
    return true
}

function toDoDel(i){
    console.log(i)
    toDo.splice(i,1)
    console.log(toDo)
    display()
}

function toDoDone(i){
    toDo[i].completed = !toDo[i].completed
    display()
    console.log(toDo)
    
}


function display(){
    output.innerHTML = ""
        for(let i = 0;i<toDo.length; i++){
            
          output.innerHTML += 
            `
            <span>
            <div>${toDo[i].title}
            <span>

            <span>
            <button onclick="toDoDone(${i})">Done</button>
            <button onclick="toDoDel(${i})">Del</button>
            </span>

            </div>

            `
        }
}

function add(){
    const inputVal = input.value.trim()
    if(check(inputVal,toDo)){
        toDo.push({
            title : inputVal,
            completed : false
        })
        console.log(toDo)
        display()
    }
    input.value = ""

}

addBtn.addEventListener("click",add)
input.addEventListener("keypress",(e)=>{
    if(e.key === "Enter") add()
})