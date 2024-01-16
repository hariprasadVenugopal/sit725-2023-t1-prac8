let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/api/cat', function(req,res){
    controller.postCat(req,res);
});

router.get('/api/cats', (req,res)=>{
    controller.getAllCats(req,res);
});


router.get('/',(req,res)=>{
    res.render('indexMongo.html');
})


module.exports = router;