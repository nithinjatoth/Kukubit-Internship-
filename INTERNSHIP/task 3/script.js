document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('task');
    const priorityInput = document.getElementById('priority');
    const deadlineInput = document.getElementById('deadline');

    const task = taskInput.value.trim();
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const tasks = getTasks();
    tasks.push({ task, priority, deadline });
    saveTasks(tasks);

    taskInput.value = '';
    priorityInput.value = 'low';
    deadlineInput.value = '';

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
            <div>
                <span>${task.task}</span>
                <span class="priority-${task.priority.toLowerCase()}">${task.priority}</span>
                <span>${task.deadline}</span>
            </div>
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

function filterTasks() {
    const priorityFilter = document.getElementById('priorityFilter').value;
    const tasks = getTasks();

    if (priorityFilter === 'all') {
        loadTasks();
    } else {
        const filteredTasks = tasks.filter(task => task.priority.toLowerCase() === priorityFilter);
        displayFilteredTasks(filteredTasks);
    }
}

function displayFilteredTasks(filteredTasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    filteredTasks.forEach(function (task, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <span>${task.task}</span>
                <span class="priority-${task.priority.toLowerCase()}">${task.priority}</span>
                <span>${task.deadline}</span>
            </div>
            <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}
