$(document).ready(function() {
    let savedTasks = getTasks()

    if (savedTasks.length !== 0 ) {
        for (let i = 0; i < savedTasks.length; i++) {
            $("#tbody-tasks").append(
                "<tr>" +
                    "<td>" +
                        savedTasks[i].task +
                    "</td>" +
                    "<td>" +
                        savedTasks[i].date +
                    "</td>" +
                    "<td>" +
                        savedTasks[i].status +
                    "</td>" +
                    "<td>" +
                        "Editar - Excluir" +
                    "</td>" +
                "</tr>"
            )
        }
        
    } else {
        $("#table-tasks").hide()
        $("#title-tasks").text("There aren't any tasks yet").css("color","red")
    }

})

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks-todo-list")) || []
}