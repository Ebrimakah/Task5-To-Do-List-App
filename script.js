const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") return alert("Please enter a task!");
    let li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        let newText = prompt("Edit task:", li.firstChild.textContent);
        if (newText) li.firstChild.textContent = newText;
    };
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});
