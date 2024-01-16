let client = require('../dbConnection');
let collection = client.db().collection('Cats');

function postCat(cat, callback) {
    collection.insertOne(cat,callback).then(function(res, err){
        if(!err)
            callback(err,res);
    });
}

function getAllCats(callback) {
    collection.find().toArray().then(function(res, err){
        console.log(res);
        callback(err,res);
    });
}


module.exports = {postCat,getAllCats}