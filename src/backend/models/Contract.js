const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Contract = mongoose.model('contract', contractSchema)

module.exports = Contract;