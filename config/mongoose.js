const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/urlShortner');

const db = mongoose.connection;

db.on('Error', console.error.bind(console, "Error connecting the DB"));

db.once('open', function(){
    console.log('Database connected Successfully');
});

module.exports = db;