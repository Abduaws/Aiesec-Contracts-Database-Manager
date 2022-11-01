const User = require("../models/User")

const users_get = async (req, res) => {
    res.send(JSON.stringify(await User.find()))
}
const user_create = async (req, res) => {
    const userdata = req.body
    if(await User.exists({email:userdata.email})){
        res.send(JSON.stringify({status:"NO"}))
    }
    else{
        await User.create({email:userdata.email, password:userdata.password});
        res.send(JSON.stringify({status:"OK"}))
    }
}    
const user_details = async (req, res) => {
    const email = req.params.email
    const user = await User.where("email").equals(email)
    if(user){
        res.send(JSON.stringify(user))
    }
}
const user_delete = (req, res) => {

}

const user_authenticate = async (req, res) => {
    const userdata = req.body
    const user = await User.where("email").equals(userdata.email)
    if(user.length != 0){
        if(user[0].password == userdata.password){
            res.send(JSON.stringify({status:"OK"}))
        }
        else{
            res.send(JSON.stringify({status:"NO"}))
        }
    }
    else{
        res.send(JSON.stringify({status:"NO"}))
    }
}

module.exports = {
    user_authenticate,
    users_get,
    user_create,
    user_details,
    user_delete
}