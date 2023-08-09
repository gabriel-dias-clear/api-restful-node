const express = require('express');

let app = express();

const routesIndex = require('./src/routes/index.routes');
const routesUsers = require('./src/routes/users.routes');

app.use(routesIndex);
app.use('/users', routesUsers);



app.listen(3000, 'localhost', ()=>{

    console.log('servidor rodando!')

})