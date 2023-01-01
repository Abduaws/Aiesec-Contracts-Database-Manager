const Company = require('../models/Company')

const company_get = async (req, res) => {
    res.send(JSON.stringify(await Company.find()))
}
const company_create = (req, res) => {
    const contractdata = req.body
    console.log(contractdata)
}
const company_details = (req, res) => {

}
const company_delete = (req, res) => {

}

module.exports = {
    company_get,
    company_create,
    company_details,
    company_delete
}