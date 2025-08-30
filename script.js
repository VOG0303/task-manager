const taskInput = document.querySelector(".new-task-textbox");
const addButton = document.querySelector(".add-task-button");
const taskList = document.querySelector(".task-list");

addButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // create list item
        const li = document.createElement("li");              
        li.classList.add("task-item");

        // span for task text
        const span = document.createElement("span"); 
        span.textContent = taskText;

        // complete button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✓";
        completeBtn.classList.add("complete-button");

        // delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✗";
        deleteBtn.classList.add("delete-button");

        // Create button container
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("task-buttons");

        buttonContainer.appendChild(completeBtn);
        buttonContainer.appendChild(deleteBtn);

        // Append text + buttons
        li.appendChild(span);
        li.appendChild(buttonContainer);

        // add li to task list
        taskList.appendChild(li);

        // clear textbox
        taskInput.value = "";
        
         // ✅ functionality
        completeBtn.addEventListener("click", function () {
            li.classList.toggle("task-completed"); // toggle completed style
            buttonContainer.removeChild(completeBtn); // remove complete button
            
        });
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(li); // remove from DOM
        });
    }
});

