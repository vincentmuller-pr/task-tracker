// Aqui se gestiona el archivo JSON
const fs = require("fs/promises");
const path = require("path")
const data_path = path.join(__dirname, "../data/data.json")

async function exist_file(){
    try {
        await fs.access(data_path)
    } catch {
        await fs.writeFile(data_path, "[]")
    }
}

async function read_file(){
    await exist_file()
    
    const data = await fs.readFile(data_path, "utf-8")
    const arch_string = JSON.parse(data);
    return arch_string
}

async function save_file(content){
    await exist_file();
    
    const data = JSON.stringify(content, null, 2);
    await fs.writeFile(data_path, data, "utf-8");
}

module.exports = {read_file, save_file}
