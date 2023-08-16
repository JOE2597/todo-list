//inputs
let task = document.querySelector("#task");
let dateInput = document.querySelector("#dateInput");
let addBtn = document.querySelector("#addTask");
let display = document.querySelector("#listDisplay");

let taskItems = JSON.parse(localStorage.getItem("taskItems"))

let displayitems = () => {
    if (taskItems == null){
        display.innerHTML = `<tr>
                                <td>No Task Added</td>
                            </tr>`
    }
    else {
        let taskList = "";
        taskItems.forEach((list) => {
        taskList += `<tr>
                        <td>${list.task}</td>
                        <td>${list.dateInput}</td>
                        <td type="button">Delete</td>
                    </tr>`
        display.innerHTML = taskList
    })
    }
} 
  displayitems();

let addTask = () => {
    id = 0;

    let taskInfo = {
        task : task.value,
        dateInput : dateInput.value,
        Id : ++id  
    }
    if (taskItems == null){
        taskItems = [];
    }
    taskItems.push(taskInfo);
    console.log(taskInfo);

    //localstorage
    localStorage.setItem("taskItems", JSON.stringify(taskItems));
}


addBtn.addEventListener("click" , addTask);