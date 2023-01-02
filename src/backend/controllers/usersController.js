const User = require("../models/User")

//Gets all Users
const users_get = async (req, res) => {
    res.send(JSON.stringify(await User.find()))
}

//Creates a new user based on sent data
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

//Get user details for a certain user
const user_details = async (req, res) => {
    const email = req.params.email
    const user = await User.where("email").equals(email)
    if(user){
        res.send(JSON.stringify(user))
    }
}

//Modify data for certain user
const user_modify = async (req, res) => {
    const userdata = req.body
    if(await User.exists({email:userdata.email})){
        const user = await User.where("email").equals(userdata.email)
        user[0].username = userdata.username
        user[0].pn = userdata.pn
        user[0].fname = userdata.fname
        user[0].lname = userdata.lname
        await user[0].save();
    }
}

//Authinticate user login/signup
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
    user_modify
}