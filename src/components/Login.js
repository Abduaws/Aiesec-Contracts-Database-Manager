import React from 'react'
import { Button, Modal, Form,  } from 'react-bootstrap' 
import { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { motion } from "framer-motion"

function Login({setShowlogin, showlogin}) {
  const [passtype, setPasstype] = useState("password");
  const [scale, setScale] = useState(1);
  return (
    <Modal animation={false} show={showlogin} centered fullscreen>
      <Modal.Body style={{overflow:"hidden", background:"#2A3042"}}>
        <motion.div animate={{scale}}>
        <div id="thelogin">
          <Form style={{marginLeft:"14rem", marginTop:"3rem", width:"50%"}}>
            <img src="./images/companylogo4.png" alt="..." width="100%"/><br />
            <span style={{marginLeft:"7rem", transform: "translate(0px, 10px)"}}>Database & Contract Manager</span>
            <h3 style={{marginTop:"2rem", textAlign:"center"}}>Welcome Back!</h3>
            <Form.Group style={{marginTop:"4rem"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" name={"email"}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label><br/>
            <Form.Control required type={passtype} placeholder="Enter Password" name={"password"} style={{width:"90%", display:"inline"}}/>
            <Button onClick={()=>{(passtype==="text") ? setPasstype("password") : setPasstype("text")}} variant="outline-light" style={{float:"right", verticalAlign:"middle"}}>{(passtype==="text") && <AiFillEye/>}{(passtype!=="text") && <AiFillEyeInvisible/>}</Button>
            </Form.Group>
            <Button variant="light" onClick={()=>{
              setScale(0);setTimeout(()=>{setShowlogin(false);setScale(1)}, 200)
            }}>Login</Button>
            <Button style={{marginLeft:"1rem"}} variant="light" onClick={()=>{
              setScale(0);setTimeout(()=>{setShowlogin(false);setScale(1)}, 200)
            }}>Signup</Button>
          </Form>
        </div>
        </motion.div>
        </Modal.Body>
      </Modal>
  )
}

export default Login