const command = process.argv[2]
const args = process.argv.slice(3)
console.log(command, args)

switch (command) {
    // Añadir nueva tarea, se pasa la tarea (string)
    case "add":
        //add_task()
        break
    
    // Actualizar tarea por ID
        case "update":
        //update_task()
        break
    
    // Borrar tarea por ID
    case "delete":
        //delete_task()
        break
    
    default:
        console.log("Comando incorrecto.")
}   
