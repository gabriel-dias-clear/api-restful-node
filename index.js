const http = require('http');

const server = http.createServer((req, res) => {

    console.log('URL: ', req.url);
    console.log('METHOD', req.method);

    res.end('OK')

});

server.listen(3000, 'localhost', ()=>{

    console.log('servidor rodando!')

})