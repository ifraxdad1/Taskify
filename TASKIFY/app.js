const http = require('http');
const taskRoutes = require('./routes/taskRoutes');
const HOSTNAME = 'localhost';
const PORT = 9000;
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/tasks')) {
    taskRoutes(req, res)
    }else{
        res.writeHead(404,'Not Found',{'Content-Type': 'application/json'});
        res.end(JSON.stringify({massage: 'sorry got lose'}));
    }
});

server.listen(PORT, HOSTNAME,() => {
    console.log(`Server running on ${PORT}`);
});