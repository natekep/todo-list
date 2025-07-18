const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const clearAllBtn = document.getElementById("clear-all");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-card";
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <div class="actions">
        <button onclick="toggleComplete(${index})" title="Mark Complete">✔</button>
        <button onclick="deleteTask(${index})" title="Delete">✖</button>
      </div>
    `;

    // Animate on insertion
    li.classList.add("fade-in");
    taskList.appendChild(li);
  });
}

function addTask(text) {
  tasks.push({ text, completed: false });
  saveTasks();
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  const li = taskList.children[index];
  li.classList.add("fade-out");

  setTimeout(() => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }, 300); // match the fade-out animation duration
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text !== "") {
    addTask(text);
    taskInput.value = "";
  }
});

clearAllBtn.addEventListener("click", () => {
  tasks = [];
  saveTasks();
  renderTasks();
});

// Initial render
renderTasks();
