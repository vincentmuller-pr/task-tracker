// Aqui se definen las funciones de la APP
const {read_file, save_file} = require("./dataManage.js");

function find_next_id(task_obj_list){
    let id = 0
    if (task_obj_list.length === 0) {id = 1}
    else {
        for (obj of task_obj_list){
            (id <= obj.id ? id = obj.id+1 : null)
        }
    }
    return id;
}

function find_by_id(task_obj_list, id){
    let task_pos = null;
    for (let i = 0; i < task_obj_list.length; i++){
        if (task_obj_list[i].id.toString() === id.toString()) {task_pos = i; break;}
    }
    return task_pos;
}

function format_date(date) {
    return date.slice(0,10).split("-").reverse().join("-")
}

async function add_task(desc){
    const task_obj_list = await read_file();
    const id = find_next_id(task_obj_list);
    const date_now = new Date();
    
    const task = {
        id,
        description: desc,
        status: "pendiente",
        createdAt: date_now,
        updatedAt: date_now
    };
    task_obj_list.push(task);
    await save_file(task_obj_list);
    console.log(`La tarea ha sido creado con ID: ${id}`)
}

async function update_task(id, desc){
    const task_obj_list = await read_file();
    const task_pos = find_by_id(task_obj_list, id);
    if (task_pos === null) {console.log(`Error: No se encontro una tarea con ID: ${id}.`); return;}
    task_obj_list[task_pos].description = desc;
    task_obj_list[task_pos].updatedAt = new Date();
    await save_file(task_obj_list)
    console.log(`La tarea con ID: ${id} ha sido actualizada con exito.`)
}

async function update_task_state(id, state){
    const task_obj_list = await read_file();
    const task_pos = find_by_id(task_obj_list, id);
    if (task_pos === null) {console.log(`Error: No se encontro una tarea con ID: ${id}`); return;}
    task_obj_list[task_pos].status = state;
    task_obj_list[task_pos].updatedAt = new Date();
    await save_file(task_obj_list);
    console.log(`La tarea con ID: ${id} esta ahora ${state}`);
}

async function delete_task(id) {
    const task_obj_list = await read_file();
    const task_pos = find_by_id(task_obj_list, id);
    if (task_pos === null) {console.log(`Error: No se encontro una tarea con ID: ${id}`); return;}
    task_obj_list.splice(task_pos, 1);
    await save_file(task_obj_list);
    console.log(`La tarea con ID: ${id} ha sido eliminada`);
}

async function list_tasks(filter="none"){
    const task_obj_list = await read_file();
    let filter_function
    //Filtro
    switch (filter) {
        case "none":
            filter_function = (task) => true;
            break;
            
        case "to-do":
            filter_function = (task) => (task.status === "pendiente");
            break;
        
        case "in-progress":
            filter_function = (task) => (task.status === "en progreso");
            break;
        
        case "done":
            filter_function = (task) => (task.status === "realizada");
            break
    }
    //Print
    for (obj of task_obj_list) {
        if (filter_function(obj)) {
            const cdate_string = format_date(obj.createdAt);
            const udate_string = format_date(obj.updatedAt);
            console.log(`id: ${obj.id} | estado: ${obj.status} | '${obj.description}' | creado: ${cdate_string} | actualizado: ${udate_string}`)
        } else {continue}
    }
}

module.exports = {add_task, update_task, update_task_state, delete_task, list_tasks}