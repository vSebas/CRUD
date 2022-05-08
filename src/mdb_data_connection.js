import { connect } from "mongoose";

(async () => {
    try {
        const db = await connect('mongodb://localhost/crud-database');
        console.log("DB connected to", db.connection.name);
    } catch (error) {
        console.error(error)
    }
})();

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/crud-database')
//     .then(db => console.log('DB is connected'))
//     .catch(err => console.error(err));