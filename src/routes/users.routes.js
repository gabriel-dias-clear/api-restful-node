const express = require('express');
const routes = express.Router();

routes.get('/', (req,res)=>{

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ users: [{
        name: 'Gabriel',
        email: 'email@email.com',
        id: 1
    }] })

})

module.exports = routes;