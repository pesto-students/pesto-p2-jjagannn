const http = require('http');
const PORT = process.env.PORT || 5000;

const vanillaServer = http.createServer(async (req,res)=>{
    if (req.url === '/api' && req.method === 'GET'){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write('Hello! GET!')
        res.end();
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "Route not found"}));
    }
})

vanillaServer.listen('3000', 'localhost', () => {
    console.log("Server is listening on port 3000. Visit `http://localhost:3000`") 
});