// Aqui se gestiona el archivo JSON
const fs = require("fs/promises");
const path = "./data/data.json"

async function exist_file(){
    try {
        await fs.access(path)
    } catch {
        await fs.writeFile(path, "[]")
    }
}

async function read_file(){
    await exist_file()
    
    const data = await fs.readFile(path, "utf-8")
    const arch_string = JSON.parse(data);
    return arch_string
}

async function save_file(content){
    await exist_file();
    
    const data = JSON.stringify(content, null, 2);
    await fs.writeFile(path, data, "utf-8");
}

module.exports = {read_file, save_file}
