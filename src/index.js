const command = process.argv[2]
const args = process.argv.slice(3)
//console.log(command, args)
const {add_task} = require("./task_func.js");

switch (command) {
    // Añadir nueva tarea, se pasa la tarea (string)
    case "add":
        if ((args[0] === undefined) || (typeof args[0] !== "string")) {console.log("Error: Se requiere una descripcion textual.");}
        else {add_task(args[0]);}
        break;
    
    // Actualizar tarea por ID
        case "update":
        //update_task()
        break
    
    // Borrar tarea por ID
    case "delete":
        //delete_task()
        break
    
    // Mostrar lista de tareas, posible filtro
    case "list":
        //list_tasks
    
    default:
        console.log("Comando incorrecto.")
}   
