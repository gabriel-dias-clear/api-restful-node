module.exports = (app)=>{

app.get('/', (req,res)=>{

    res.setHeader('Content-Type', 'text/html');
    res.status(200).end('<h1> Hello </h1>');
    
})

}