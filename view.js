
function displayTasks() {
    const viewContainer = document.getElementById('viewcontainer');

    
    viewContainer.innerHTML = '';

    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];


    storedTasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        

        const taskTitle = document.createElement('h3');
        taskTitle.textContent = task.title;
        taskDiv.appendChild(taskTitle);

       
        viewContainer.appendChild(taskDiv);
    });
}