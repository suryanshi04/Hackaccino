

function addText() {
    var inputText = document.getElementById("textInput").value;
  
    if (inputText.trim() !== "") {
        var newTextElement = document.createElement("p");
        newTextElement.textContent = inputText;
  
        document.getElementById("inputContainer").appendChild(newTextElement);
        document.getElementById("textInput").value = "";
  
       
        saveTaskToLocalStorage(inputText);
    }
  }
  
  function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = { id: Date.now(), title: taskText, description: '' };
    storedTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }