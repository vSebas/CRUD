import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    name: String,
    phone: String,
    address: String,
    email: String,
    dateOfBirth: String
}, {
    timestamps: true
})

export default model('Task', taskSchema);

// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const Task = new Schema({
//     name: String,
//     phone: String,
//     address: String,
//     email: String,
//     dateOfBirth: String
// });

// module.exports = mongoose.model('Data', Task)