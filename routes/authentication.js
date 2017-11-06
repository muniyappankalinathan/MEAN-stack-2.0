const User = require('../models/user');

module.exports = (router) =>{

    router.post('/register', (req, res) =>{
        if(!req.body.email){
            res.json({ success: false, message: 'You must provide an e-mail'});
        }else{
            res.send('Hello world');
        }
    });
    return router;
}