document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
  });
  
  function addTask() {
    var input = document.getElementById("taskInput");
    var category = document.getElementById("categorySelect").value;
    var dueDate = document.getElementById("dueDate").value;
    var priority = document.getElementById("prioritySelect").value;
    
    var taskText = input.value.trim();
    
    if (taskText !== "") {
      var ul = document.getElementById("taskList");
      var li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <span>Category: ${category}</span>
        <span>Due Date: ${dueDate}</span>
        <span>Priority: ${priority}</span>
      `;
      li.addEventListener("click", function() {
        li.classList.toggle("complete");
      });
      ul.appendChild(li);
      input.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  