const command = process.argv[2]
const args = process.argv.slice(3)
const {add_task, update_task, update_task_state, delete_task} = require("./task_func.js");

function check_arg_fail(arg, type){
    if (arg === undefined) {return true}
    switch(type) {
        case "string":
            return !(Number.isNaN(parseInt(arg)))
        
        case "number":
            return (Number.isNaN(parseInt(arg)))
    }
}

switch (command) {
    // Añadir nueva tarea, se pasa la tarea (string)
    case "add":
        if (check_arg_fail(args[0], "string")) {console.log("Error: Se requiere una descripcion textual.");}
        else {add_task(args[0]);}
        break;
    
    // Actualizar descripcion de tarea por ID
    case "update":
        if (check_arg_fail(args[0], "number") || check_arg_fail(args[1], "string")) {console.log("Error: ID y/o descripcion incorrectos")}
        else {update_task(args[0],args[1])}
        break
    
    // Marcar progreso de tarea por ID (to-do)
    case "mark-to-do":
        if (check_arg_fail(args[0], "number")) {console.log("Error: ID incorrecto");}
        else {update_task_state(args[0], "pendiente");}
        break
    
    // Marcar progreso de tarea por ID (in-progress)
    case "mark-in-progress":
        if (check_arg_fail(args[0], "number")) {console.log("Error: ID incorrecto");}
        else {update_task_state(args[0], "en progreso");}
        break
    
    // Marcar progreso de tarea por ID (done)
    case "mark-done":
        if (check_arg_fail(args[0], "number")) {console.log("Error: ID incorrecto");}
        else {update_task_state(args[0], "realizado");}
        break
    
    // Borrar tarea por ID
    case "delete":
        if (check_arg_fail(args[0], "number")) {console.log("Error: ID incorrecto");}
        else {delete_task(args[0])}
        break
    
    // Mostrar lista de tareas, posible filtro
    case "list":
        //list_tasks
    
    default:
        console.log("Comando incorrecto.")
}
