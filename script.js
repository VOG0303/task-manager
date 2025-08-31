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
        
        // Trigger fade-in
        requestAnimationFrame(() => {
        li.classList.add("show");
        });

         // ✅ functionality
        completeBtn.addEventListener("click", function () {
            li.classList.add("task-completed"); // toggle completed style
            //Complete Button Fade
            completeBtn.classList.add("remove"); // start the animation
            completeBtn.addEventListener("transitionend", function() {
            completeBtn.remove(); // remove from DOM after animation
            });
        });

        deleteBtn.addEventListener("click", function () {
            buttonContainer.classList.add("remove");  
            //Task Item Fade
            li.classList.add("remove"); // start the animation
            li.addEventListener("transitionend", function() {
            li.remove(); // remove from DOM after animation
            });
        });
    }
});

