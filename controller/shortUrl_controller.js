const ShortURL = require('../models/shortURL');

module.exports.shrink = async function(req, res){
    await ShortURL.create({
        full: req.body.fullUrl
    }, function(err, newURL){
        if(err){
            console.log(`Error in Creating URL : ${err}`);
            return;
        }
        return res.redirect('back');
    });
    
}