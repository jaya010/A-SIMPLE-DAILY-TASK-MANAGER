// script.js

// Task class
class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

// Function to add a task
function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;

    if (!title || !description) {
        alert('Please enter both title and description!');
        return;
    }

    const task = new Task(title, description);
    saveTask(task);
}

// Function to save task to local storage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${task.title}</strong>: ${task.description} 
                        <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

// Function to delete a task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Initial render
renderTasks();
