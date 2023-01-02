const Company = require('../models/Company')

//Get all companies
const company_get = async (req, res) => {
    res.send(JSON.stringify(await Company.find()))
}

//Create a new Company
const company_create = (req, res) => {
    const contractdata = req.body
    console.log(contractdata)
}

//Empty for now
const company_details = (req, res) => {

}

//Empty for now
const company_delete = (req, res) => {

}

module.exports = {
    company_get,
    company_create,
    company_details,
    company_delete
}