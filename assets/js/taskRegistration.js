$(document).ready(function () {
  $("#form-task").submit(function (e) {
    e.preventDefault();
    let task = $("#taskInput").val();
    let date = $("#date").val();
    
    if (!task || !date) {
      $("#alert-register-error").show();
      return false;
    }
      saveTaskLocalStorage(task, date)
    
  });

  $(".btn-close").click(function () {
    $(this).parent().css("display", "none");
  });

  $(".date").mask("00/00/0000");
});

function saveTaskLocalStorage(task, date) {
  
  const  obj = {
    id: new Date().getTime(),
    task,
    date,
    status: "PENDENTE",
  };

  let savedTasks = JSON.parse(localStorage.getItem("tasks-todo-list"));
 
  if ( savedTasks !== null) {

    savedTasks.push(obj);
    localStorage.setItem("tasks-todo-list", JSON.stringify(savedTasks));
    
  } else {
    localStorage.setItem("tasks-todo-list", JSON.stringify([obj]));
  }

  $("#alert-register-success").show()
  $("#taskInput").val("")
  $("#date").val("")
}

