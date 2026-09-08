const command = process.argv[2]
const args = process.argv.slice(3)
const {add_task, update_task, list_tasks} = require("./task_func.js");

function check_arg_fail(arg, type){
    return ((arg === undefined) || (typeof arg !== type))
}

switch (command) {
    // Añadir nueva tarea, se pasa la tarea (string)
    case "add":
        if ((args[0] === undefined) || (typeof args[0] !== "string")) {console.log("Error: Se requiere una descripcion textual.");}
        else {add_task(args[0]);}
        break;
    
    // Actualizar tarea por ID
        case "update":
            if (check_arg_fail(args[0], "number") && check_arg_fail(args[1], "string")) {console.log("Error: ID y/o descripcion incorrectos")}
            else {update_task(args[0],args[1])}
            break
    
    // Borrar tarea por ID
    case "delete":
        //delete_task()
        break
    
    // Mostrar lista de tareas, posible filtro
    case "list":
        list_tasks();
        break
    
    default:
        console.log("Comando incorrecto.")
}
