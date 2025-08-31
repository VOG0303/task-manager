# Task Manager

A visually appealing, interactive **Task Manager** web app built with **HTML, CSS, and JavaScript**. It features a liquid glass aesthetic, smooth animations for task addition, completion, and deletion, and a minimalistic, user-friendly interface.

---

## 🔹 Features

- **Add Tasks**: Users can add tasks through the input box and press "Add" to append them to the list.
- **Fade-in Animation**: Newly added tasks fade in smoothly to enhance visual appeal.
- **Complete Tasks**: Clicking the ✅ button marks tasks as completed with a strike-through and a color change. The complete button fades out after marking.
- **Delete Tasks**: Clicking the ✗ button deletes tasks with a smooth fade-out animation.
- **Hover Effects**: Buttons and tasks have subtle hover effects to improve interaction feedback.
- **Liquid Glass Design**: The app and tasks have semi-transparent backgrounds with subtle blur and gradient effects, giving a "liquid glass" appearance.
- **Responsive Buttons**: Buttons have smooth color and text transitions.

---

## 🎨 Visual Style

- **Liquid Glass Design**: Semi-transparent backgrounds with subtle opacity to create a glass-like, layered effect.  
- **Fade Animations**: Smooth fade-in for newly added tasks and fade-out when tasks are completed or deleted.  
- **Interactive Buttons**: Hover and active states for complete and delete buttons with color and text-shadow transitions.  
- **Task Highlighting**: Tasks change background color on hover for better visual feedback.  
- **Completed Tasks**: Text is struck through with a subtle background color change to indicate completion.

---

## 🔹 How It Works

1. **Adding a Task**:  
   - Enter the task text in the input box.
   - Press the "Add" button.
   - The task fades in using the `.show` class for opacity transition.

2. **Completing a Task**:  
   - Click the ✅ button next to a task.
   - The task text gets a strike-through (`text-decoration: line-through`) and a background color change (`.task-completed`).
   - The complete button fades out and is removed from the DOM.

3. **Deleting a Task**:  
   - Click the ✗ button next to a task.
   - The task fades out with the `.remove` class applied and is removed from the DOM after the transition ends.

4. **Animations**:  
   - Fade-in: Controlled by `.show` (opacity 1).  
   - Fade-out: Controlled by `.remove` (opacity 0).  
   - Background-color transitions for tasks and hover states enhance visual feedback.

---

## 🔧 Future Enhancements

- **Persistent Data Storage**: Use `localStorage` to retain tasks across page reloads.
- **Task Reordering**: Drag-and-drop support to reorder tasks.
- **Task Editing**: Edit task text inline with smooth transition effects.
- **Subtasks**: Add subtasks visible only when the parent task is expanded.
- **Accessibility Improvements**: Add ARIA labels for better screen reader support.
- **Responsive Design**: Optimize layout for mobile and tablet screens.

---

## Notes

- This project is a work-in-progress for learning and demonstration purposes.
- AI assistance was used for guidance on code structure.

---

## Demo

You can see the live demo here:
- https://vog0303.github.io/task-manager/?v=2

---
