const express =  require('express');
const port = 8000;
const db = require('./config/mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error starting the server : ${err}`);
        return;
    }

    console.log(`Server is running on port : ${port}`);
});