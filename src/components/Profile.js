import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({user, loggedin, setUser }) {
  const [disable, setDisable] = useState({"uname":true, "email":true, "fname":true, "lname":true, "pn":true, "teamname":true, "teamrole":true})
  const [userChange, setUserchange] = useState(JSON.parse(JSON.stringify(user)))
  const navigate = useNavigate();

  const handleEdit = (area) => {
    let tempDisable = JSON.parse(JSON.stringify(disable))
    tempDisable[area] = false
    setDisable(tempDisable)
  }

  const handleChange = (e, area) => {
    let tempuser = JSON.parse(JSON.stringify(userChange))
    tempuser[area] = e.target.value
    setUserchange(tempuser)
  }

  const handleSave = () => {
    setDisable({"uname":true, "email":true, "fname":true, "lname":true, "pn":true, "teamname":true, "teamrole":true});
    fetch(`http://localhost:3001/api/users/modify/${user.email}`, {
            method: 'POST',
            body: JSON.stringify(userChange),
            headers: {'Content-Type': 'application/json'}}  
    )
    setUser(userChange)
  }

  useEffect(()=>{
    if(!loggedin){navigate('/')}
  })
  return (
    <div>
      <Container style={{width:"100%"}}>
        <Row>
          <Col>
          <span style={{fontSize:"xx-large", fontWeight:"bold"}}>Your Profile</span>
          </Col>
        </Row>
        <Row>
          <Container id="profilebox">
          <Button onClick={handleSave} variant="success" style={{marginTop:"2rem", float:"right"}}>Save</Button>
          <Form style={{marginTop:"5rem"}}>
            <Row style={{marginTop:"2rem"}}>
              <Col>
              <Form.Label style={{display:"block"}}>Username</Form.Label>
              <Form.Control onChange={(e)=>{handleChange(e, "username")}} style={{width:"90%", display:"inline"}} disabled={disable["uname"]} required value={userChange.username} type="text" placeholder="Enter Username" name={"uname"}/>
              <Button onClick={()=>{handleEdit("uname")}} style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
              </Col>
              <Col>
              <Form.Label style={{display:"block"}}>Phone Number</Form.Label>
              <Form.Control onChange={(e)=>{handleChange(e, "pn")}} style={{width:"90%", display:"inline"}} disabled={disable["pn"]} required value={userChange.pn} type="text" placeholder="Enter Your Telephone Number" name={"pn"}/>
              <Button onClick={()=>{handleEdit("pn")}} style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
              </Col>
            </Row>
            <Row style={{marginTop:"2rem"}}>
              <Col>
              <Form.Label style={{display:"block"}}>First Name</Form.Label>
              <Form.Control onChange={(e)=>{handleChange(e, "fname")}} style={{width:"90%", display:"inline"}} disabled={disable["fname"]} required value={userChange.fname} type="text" placeholder="Enter First Name" name={"fname"}/>
              <Button onClick={()=>{handleEdit("fname")}} style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
              </Col>
              <Col>
              <Form.Label style={{display:"block"}}>Last Name</Form.Label>
              <Form.Control onChange={(e)=>{handleChange(e, "lname")}} style={{width:"90%", display:"inline"}} disabled={disable["lname"]} required value={userChange.lname} type="text" placeholder="Enter Last Name" name={"lname"}/>
              <Button onClick={()=>{handleEdit("lname")}} style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
              </Col>
            </Row>
            <Row style={{marginTop:"3rem"}}>
            <Col>
              <Form.Label style={{display:"block", textAlign:"center"}}>Team Name</Form.Label>
              <Form.Control style={{width:"100%", display:"inline", textAlign:"center"}} disabled={disable["teamname"]} required value={userChange.teamName} type="text" name={"teamname"}/>
              </Col>
              <Col>
              <Form.Label style={{display:"block", textAlign:"center"}}>Role</Form.Label>
              <Form.Control style={{width:"100%", display:"inline", textAlign:"center"}} disabled={disable["teamrole"]} required value={userChange.teamRole} type="text" name={"teamrole"}/>
              </Col>
            </Row>
            <Row style={{marginTop:"2rem"}}>
              <Col></Col>
              <Col md={6}>
              <Form.Label style={{display:"block", textAlign:"center"}}>Email address</Form.Label>
              <Form.Control onChange={(e)=>{handleChange(e, "email")}} style={{width:"100%", display:"inline", textAlign:"center"}} disabled={disable["email"]} required value={userChange.email} type="email" placeholder="Enter Email" name={"email"}/>
              </Col>
              <Col></Col>
            </Row>
          </Form>
          </Container>
        </Row>
      </Container>
    </div>
  )
}

export default Profile