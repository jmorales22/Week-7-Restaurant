//loads the library into the application
const express = require('express');
es6Renderer = require('express-es6-template-engine'),

//this second constant makes the methods available to us from express
app = express();

//this tells express that, if you hit any html
//use this engine - output will be html
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

//first argument is the port (anything above 3000 and 8000 are usually safe 
//- choose these so they do not conflict with other ports)
app.listen(3333, ()=> {
    console.log('Server running on port 3333');
});

//the arguements will take the route that we want then it will take a function
const rootController = require('./routes/index'),
    restaurantController = require('./routes/restaurant');
    

app.use('/', rootController);
app.use('/restaurant', restaurantController);