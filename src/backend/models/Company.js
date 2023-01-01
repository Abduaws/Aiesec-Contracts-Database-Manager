const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    
    field:String,
    
    landLine:{
        type:String,
        required:true
    },
    
    AIESEC_responsible:{
        type:String,
        required:true
    },

    contacted:{
        type:Boolean,
        required:true
    },
    
    interested:Boolean,

    visted:Boolean,

    contactDone:Boolean,

    No_Of_Slots:{
        type:Number,
        min:0,
        max:3
    },

    website:{
        type:String,
        required:true,
        lowercase:true
    },

    email:{
        type:String,
        required:true
    },

    enablerName:String,

    enablerPosition:String,

    enablerContactNo:Number,

    updates:String,



}, { timestamps: true });

const Company = mongoose.model('company', companySchema)

module.exports = Company;