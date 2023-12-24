const http = require('http');
const fs = require('fs');

fs.readFile('./index.html', (err, html) => {
    if (err) return console.error(err);

    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    }).listen(5000, () => {
        console.log('Server running at http://localhost:5000/');
    });
});
