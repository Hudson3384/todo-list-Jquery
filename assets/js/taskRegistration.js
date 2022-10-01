$(document).ready(function () {
  $("#form-task").submit(function (e) {
    let task = $("#taskInput").val()
    let date = $("#date").val()

    if (!task || !date) {
        return 
    }
    console.log(task, date)
    e.preventDefault();
  });
});
