
module.exports = (app)=>{

app.get('/users', (req,res)=>{

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ users: [{
        name: 'Gabriel',
        email: 'email@email.com',
        id: 1
    }] })

})

};