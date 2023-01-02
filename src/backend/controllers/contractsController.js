const Contract = require('../models/Contract')

//Get all contracts
const contracts_get = async (req, res) => {
    res.send(JSON.stringify(await Contract.find()))
}

//Create a new contract
const contract_create = (req, res) => {
    const contractdata = req.body
    console.log(contractdata)
}

//Empty for now
const contract_details = (req, res) => {

}

//Empty for now
const contract_delete = (req, res) => {

}

module.exports = {
    contracts_get,
    contract_create,
    contract_details,
    contract_delete
}