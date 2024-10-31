const { createTask, updateTask, deleteTask, getTasks } = require("../controllers/taskController");

const taskRoutes = (req, res) => {
    if (req.method==='GET'){
        getTasks(req, res);
    }else if (req.method === 'POST'){
        createTasks(req, res)
    }else if(req.method === 'patch'){taskRoutes
        updateTaskTask(req, res);
    }else if(req.method === 'delete'){
        deleteTaskask(req, res);
    }else {
        res.writeHead(404, 'Not Found', {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'umknown massage requested'}));


    }
}
module.exports =taskRoutes;