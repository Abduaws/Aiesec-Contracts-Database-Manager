const Contract = require('../models/Contract')

const contracts_get = async (req, res) => {
    res.send(JSON.stringify(await Contract.find()))
}
const contract_create = (req, res) => {
    const contractdata = req.body
    console.log(contractdata)
}
const contract_details = (req, res) => {

}
const contract_delete = (req, res) => {

}

module.exports = {
    contracts_get,
    contract_create,
    contract_details,
    contract_delete
}