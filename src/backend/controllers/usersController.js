const User = require("../models/User")

const users_get = async (req, res) => {
    res.send(JSON.stringify(await User.find()))
}
const user_create = (req, res) => {
    const userdata = req.body
    console.log(userdata)
}    
const user_details = (req, res) => {

}
const user_delete = (req, res) => {

}

module.exports = {
    users_get,
    user_create,
    user_details,
    user_delete
}