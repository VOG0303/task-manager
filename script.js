const taskInput = document.querySelector(".new-task-textbox");
const addButton = document.querySelector(".add-task-button");
const taskList = document.querySelector(".task-list");

addButton.addEventListener("click", function() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        const li = document.createElement("li");  
        li.textContent = taskText;               
        li.classList.add("task-item");           
        taskList.appendChild(li);
        taskInput.value = "";
    }
});