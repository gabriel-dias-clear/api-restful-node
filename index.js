const express = require('express');

let app = express();


app.get('/', (req,res)=>{

    res.setHeader('Content-Type', 'text/html');
    res.status(200).end('<h1> Hello </h1>');

})

app.get('/users', (req,res)=>{

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ users: [{
        name: 'Gabriel',
        email: 'email@email.com',
        id: 1
    }] })

})


app.listen(3000, 'localhost', ()=>{

    console.log('servidor rodando!')

})