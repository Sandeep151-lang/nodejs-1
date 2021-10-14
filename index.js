
const fs = require('fs');
var http= require('http')
http.createServer((req, res) => {
    let date = new Date();
    fs.writeFileSync("currentDateTime.txt", `${date}`);
    const data = fs.readFileSync("currentDateTime.txt", 'utf8');
    res.write(data);
    res.end();
}).listen(8000);