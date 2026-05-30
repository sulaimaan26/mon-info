const http = require('http');

const server = http.createServer((req, res) => {

    console.log(
        `${new Date().toISOString()} ${req.method} ${req.url}`
    );

    if (req.url === '/health') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        return res.end(JSON.stringify({
            status: 'ok',
            server: 'android-phone',
            timestamp: new Date().toISOString()
        }));
    }

    res.writeHead(404);
    res.end('Not Found');
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});
