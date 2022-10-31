const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        default: "Noob"
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        default:"John"
    },
    lname: {
        type: String,
        default:"Doe"
    },
    pn: {
        type: String,
        default:"000000000"
    },
    rank: {
        type: Number,
        default: 0
    },
    completedcontracts: {
        type: Number,
        default: 0
    },
    failedcontracts: {
        type: Number,
        default: 0
    },
    ongoingcontracts: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

const User = mongoose.model('user', userSchema)

module.exports = User;