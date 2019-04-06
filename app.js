const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url);

    let filePath = path.join(__dirname, 'web', req.url === '/' ? 'home.html' : req.url);

    let extname = path.extname(filePath);

    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    if (contentType == "text/html" && extname == "") filePath += ".html";

    console.log(filePath);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'web', '404.html'),
                    (err, content) => {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf8');
                    })
            } else {
                res.writeHead(500);
                res.end('Server error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

// var express = require('express');
// var app = express();

// app.get('/', function(req, res, next){
//     res.send("Home page");
// });

// app.get('/', function(req, res, next){
//     res.send('About page');
// });

// app.get('/', function(req, res, next){
//     res.send('Gallery page');
// });

// app.get('/', function(req, res, next){
//     res.send('Contact page');
// });

// app.listen(5000, function(err){
//     console.log('Listening http://localhost:5000');
// });

    const PORT = process.env.PORT || 5000;
    // app.listen(5000);
    server.listen(PORT, () => {
        console.log('Server is running on port:' + PORT);
});