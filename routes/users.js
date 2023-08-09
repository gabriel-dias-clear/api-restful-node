let NeDB = require('nedb'); //lib simula database
let db = new NeDB({
    filename: 'users.db',   // nome do arquivo a ser gerado
    autoload: true          // auto criação do arquivo
});


module.exports = (app)=>{

    let route = app.route('/users')

route.get((req,res)=>{

    db.find({}).sort({name:1}).exec((err, users)=>{
        if(err){

            app.utils.error.send(err, req, res);

        } else {

            res.status(200).json({users})

        }
    })

})

    let routeId = app.route('/users/:id')

routeId.get((req, res)=>{

    db.findOne({_id:req.params.id}).exec((err, user)=>{

        if(err){

            app.utils.error.send(err, req, res);

        } else {

            res.status(200).json(user)

        }

    })

})

routeId.put((req, res) => {

    if (!app.utils.validator.user(app, req, res)) return false;

    db.update({ _id: req.params.id }, req.body, err => {

        if (err) {
            app.utils.error.send(err, req, res);
        } else {
            res.status(200).json(Object.assign(req.params, req.body));
        }

    });

});





route.post((req,res)=>{

    db.insert(req.body, (err, user)=>{ //primeiro parâmetro: objeto à ser inserido na db , segundo parametro função que tem parametro erro e parametro do objeto
        
        if(err){

            app.utils.error.send(err, req, res);

        } else {

            res.status(200).json({user})

        }

    })
  
})

routeId.delete((req, res)=>{

    db.remove({ _id: req.params.id }, {}, err=>{

        if (err) {
            app.utils.error.send(err, req, res);
        } else {
            res.status(200).json(req.params);
        }

    });

});

};