const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contractSchema = new Schema({
    
    User: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },

    contractType:{
        type:String,
        required:true
    },

    companyName:{
        type:String,
        required: true
    },

    companyEmail: {
        type: String,
        required: true
    },

    companywebsite: {
        type: String,
        required: true
    },

    companyphone: {
        type: String,
        required: true
    },

    companyAddress: {
        type: String,
        required: true
    },

    contactPersonName:{
        type:String,
        required:true
    },
    
    contactPersonPhone:{
        type:String,
        required:true
    },

    companySize:{
        type:Number,
        required:true,
        min:10
    },

    industry:{
        type:String,
        required:true
    },
    
    contractOpportunitiesNo:{
        type:String,
        required:true,
        min:1,
        max:3
    },

    contractOpportunitiesDetails:{
        type:[String],
        required:true
    },

    contacted:{
        type:Boolean,
        required:true
    },
    
    interseted:{
        type:Boolean,
        default:false
    },

    visted:{
        type:Boolean,
        default:false
    },

    contactDone:{
        type:Boolean,
        default:false
    },

    status:{
        type:String,
        default:"Contacted"
    },

    No_Of_Slots:{
        type:Number,
        min:0,
        max:3
    },
}, { timestamps: true });

const Contract = mongoose.model('contract', contractSchema)

module.exports = Contract;