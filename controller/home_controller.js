const ShortURL = require('../models/shortURL');

module.exports.home = async function(req, res){
    const shortUrls = await ShortURL.find();

    return res.render('home', {
        shortUrl: shortUrls
    });
}