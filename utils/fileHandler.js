const fs = require('fs');
const Path = require('path');

const filePath='./data/tasks.json';

exports.writeTasksToFile =(tasks)=>{
   fs.writeFileSync(filePath,JSON.stringify(tasks))
}

exports.readTasksFromFile = () => {
    if(!fs.existsSync(filePath)) {
        this.writeTasksToFile([])
    }

    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}