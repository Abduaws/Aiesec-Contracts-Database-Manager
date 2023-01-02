import React from 'react'
import { Button, Modal, Form,  } from 'react-bootstrap' 
import { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'

function Login({setShowlogin, showlogin, setUser, setLoggedin}) {
  const [passtype, setPasstype] = useState("password");
  const [scale, setScale] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsivalid] = useState({"email":false,"password":false});
  const [errMSG, setErrMSG] = useState({"email":"","password":""});
  const navigate = useNavigate();

  // Handles User Login and checks if account doesn't exist in Database or incorrect password
  const handleLogin = () => {
    if(!email && !password){setIsivalid({"email":true,"password":true});setErrMSG({"email":"Required","password":"Required"});return}
    if(!email){setIsivalid({"email":true,"password":isInvalid["password"]});setErrMSG({"email":"Required","password":errMSG["password"]});return}
    if(!password){setIsivalid({"email":isInvalid["email"],"password":true});setErrMSG({"email":errMSG["email"],"password":"Required"});return}
    fetch('http://localhost:3001/api/users/login', {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {'Content-Type': 'application/json'}}
    ).then(res => {res.json().then(data => {
      if (data.status == "OK"){
        setIsivalid({"email":false,"password":false})
        setErrMSG({"email":"","password":""})
        fetch(`http://localhost:3001/api/users/details/${email}`, {
            method: 'GET'
        }).then((res)=>{
            res.json().then((data)=>{
              setUser(data[0])
            })
        })
        setScale(0);setTimeout(()=>{setShowlogin(false);setScale(1)}, 200)
        setLoggedin(true)
        setTimeout(()=>{navigate("/Dashboard")}, 400)
      }
      else{
        setIsivalid({"email":true,"password":true})
        setErrMSG({"email":"Invalid Email or Password","password":"Invalid Email or Password"})
      }
    })})
  }
  
  // Handles User Signup and checks if account already exist in Database
  const handleSignup = () => {
    if(!email && !password){setIsivalid({"email":true,"password":true});setErrMSG({"email":"Required","password":"Required"});return}
    if(!email){setIsivalid({"email":true,"password":isInvalid["password"]});setErrMSG({"email":"Required","password":errMSG["password"]});return}
    if(!password){setIsivalid({"email":isInvalid["email"],"password":true});setErrMSG({"email":errMSG["email"],"password":"Required"});return}
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)){
      fetch('http://localhost:3001/api/users/create', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'}}
      ).then(res => {res.json().then(data => {
        if (data.status == "OK"){
          setIsivalid({"email":false,"password":false})
          setErrMSG({"email":"","password":""})
          setScale(0);setTimeout(()=>{setShowlogin(false);setScale(1)}, 200)
          setLoggedin(true)
          setTimeout(()=>{navigate("/Dashboard")}, 400)
        }
        else{
          setIsivalid({"email":true,"password":isInvalid["password"]})
          setErrMSG({"email":"Email Already in Use","password":errMSG["password"]})
        }
      })})
    }
    else{
      setIsivalid({"email":true,"password":isInvalid["password"]})
      setErrMSG({"email":"Invalid Email Format","password":errMSG["password"]})
    }
  }

  // Reset state after User reenter data
  const handleChange = (e)=>{
    setIsivalid({"email":false,"password":false})
    setErrMSG({"email":"","password":""})
  }
  return (
    <Modal animation={false} show={showlogin} centered fullscreen>
      <Modal.Body style={{overflow:"hidden", background:"#2A3042"}}>
        <motion.div animate={{scale}}>
        <div id="thelogin">
          <Form style={{marginLeft:"14rem", marginTop:"3rem", width:"50%"}}>
            <img src="https://i.imgur.com/Srsg9So.png" alt="..." width="100%"/><br />
            <span style={{marginLeft:"7rem", transform: "translate(0px, 10px)"}}>Database & Contract Manager</span>
            <h3 style={{marginTop:"2rem", textAlign:"center"}}>Welcome Back!</h3>
            <Form.Group style={{marginTop:"4rem"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label><span style={{float:"right", marginRight:"0.5rem", color:"#dc3545"}}>{errMSG["email"]}</span>
            <Form.Control isInvalid={isInvalid["email"]} required onChange={(e)=>{setEmail(e.target.value);handleChange()}} value={email} type="email" placeholder="Enter email" name={"email"}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label><span style={{float:"right", marginRight:"0.5rem", color:"#dc3545"}}>{errMSG["password"]}</span>
            <Form.Control onKeyDown={(e)=>{if(e.code === "Enter"){handleLogin()}}} isInvalid={isInvalid["password"]} required onChange={(e)=>{setPassword(e.target.value);handleChange()}} value={password} type={passtype} placeholder="Enter Password" name={"password"} style={{width:"90%", display:"inline"}}/>
            <Button onClick={()=>{(passtype==="text") ? setPasstype("password") : setPasstype("text")}} variant="outline-light" style={{float:"right", verticalAlign:"middle"}}>{(passtype==="text") && <AiFillEye/>}{(passtype!=="text") && <AiFillEyeInvisible/>}</Button>
            </Form.Group>
            <Button variant="light" onClick={handleLogin}>Login</Button>
            <Button style={{marginLeft:"1rem"}} variant="light" onClick={handleSignup}>Signup</Button>
          </Form>
        </div>
        </motion.div>
        </Modal.Body>
      </Modal>
  )
}

export default Login