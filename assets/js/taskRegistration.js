$(document).ready(function () {
  $("#form-task").submit(function (e) {
    let task = $("#taskInput").val();
    let date = $("#date").val();

    if (!task || !date) {
      $("#alert-register-error").show();
      return false;
    }

    saveTaskLocalStorage(task, date);

    e.preventDefault();
  });

  $(".btn-close").click(function () {
    $(this).parent().css("display", "none");
  });

  $("#date").mask("00/00/0000");
});

function saveTaskLocalStorage(task, date) {
  
  let  obj = {
    id: new Date().getTime(),
    task,
    date,
  };

  let savedTasks = JSON.parse(getTasksLocalStorage());
 
  if (savedTasks.length) {
    savedTasks.push(obj);

    localStorage.setItem("tasks-todo-list", JSON.stringify(savedTasks));
    
  } else {
    localStorage.setItem("tasks-todo-list", JSON.stringify([obj]));
  }
}

function getTasksLocalStorage() {
  
  return localStorage.getItem("tasks-todo-list");
}
