import express from 'express';
import exphbs from 'express-handlebars';

// const express = require('express');
require('./mdb_data_connection');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const customerRoutes = require('./routes/customer_routes');
const cors = require('cors');
const app = express();


// app.set('views', path.join(__dirname, 'views'));
// app.engine(".hbs", exphbs({
//     extname: ".hbs",
// }));

// Settings
app.set('port', 5000); // process.env.PORT || 5000   (el servidor nos puede dar un puerto, si no, usa 5000)

// Middlewares : function that aid in processing before the URLs arrive
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());

// Routes
app.use('/customer',customerRoutes); // Poner /customer aquí, y no en routes/customer_routes sirve para definir qué operaciones
                                     // tiene disponibles la aplicación de front end aquí

// Static files : sends /public to server, where the html files are located
app.use(express.static(__dirname + '/public'));
app.use('/js',express.static(__dirname + '/app'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});