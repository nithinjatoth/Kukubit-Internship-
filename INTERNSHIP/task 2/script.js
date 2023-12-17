document.addEventListener('DOMContentLoaded', function () {
    loadTasks();

    document.getElementById('taskForm').addEventListener('submit', function (event) {
        event.preventDefault();
        addTask();
    });
});

function addTask() {
    const taskInput = document.getElementById('task');
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);

    taskInput.value = '';
    loadTasks();
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
}

function loadTasks() {
    const tasks = getTasks();
    const taskList = document.getElementById('taskList');

    // Clear existing tasks
    taskList.innerHTML = '';

    // Display tasks
    tasks.forEach(function (task, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task}</span>
            <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

function getTasks() {
    const tasksString = localStorage.getItem('tasks');
    return tasksString ? JSON.parse(tasksString) : [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
