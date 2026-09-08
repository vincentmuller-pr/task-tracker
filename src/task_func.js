// Aqui se definen las funciones de la APP
const {read_file, save_file} = require("./dataManage.js");

function find_next_id(taskObjList){
    let id = 0
    if (taskObjList.length === 0) {id = 1}
    else {
        for (obj of taskObjList){
            (id < obj.id ? id = obj.id+1 : null)
        }
    }
    return id;
}

async function add_task(desc){
    const taskObjList = await read_file();
    const id = find_next_id(taskObjList);
    const dateNow = new Date();
    
    const task = {
        id,
        description: desc,
        status: "todo",
        createdAt: dateNow,
        updatedAt: dateNow
    };
    taskObjList.push(task);
    await save_file(taskObjList);
}

module.exports = {add_task}