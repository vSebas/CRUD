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

module.exports = model('Task', taskSchema)
// export default model('Task', taskSchema); // When imported, add require(...).default