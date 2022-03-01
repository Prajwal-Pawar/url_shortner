const ShortURL = require('../models/shortURL');

module.exports.goTo = async function(req, res){
    const shortUrl = await ShortURL.findOne({
        short: req.params.shortUrl
    });

    if(shortUrl == null){
        // return res.sendStatus(404);
        return res.send('nahi he');
    }

    shortUrl.clicks++;
    shortUrl.save();

    return res.redirect(shortUrl.full);

}