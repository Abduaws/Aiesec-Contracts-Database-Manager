import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'

function Profile() {
  const [disable, setDisable] = useState({"uname":true, "email":true, "fname":true, "lname":true, "pn":true})
  return (
    <div>
      <Container style={{width:"100%", paddingLeft:"3rem", paddingTop:"5rem"}}>
        <Row>
          <Col>
          <span style={{fontSize:"xx-large", fontWeight:"bold"}}>Your Profile</span>
          </Col>
        </Row>
        <Row>
          <Container id="profilebox">
          <Button variant="success" style={{marginTop:"2rem", float:"right"}}>Save</Button>
          <Form style={{marginTop:"6rem"}}>
            <Row style={{marginTop:"2rem"}}>
              <Col>
              <Form.Label style={{display:"block"}}>Username</Form.Label>
              <Form.Control style={{width:"90%", display:"inline"}} disabled={disable["uname"]} required type="text" placeholder="Enter Username" name={"uname"}/>
              <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
              </Col>
              <Col>
              <Form.Label style={{display:"block"}}>Email address</Form.Label>
              <Form.Control style={{width:"90%", display:"inline"}} disabled={disable["email"]} required type="email" placeholder="Enter Email" name={"email"}/>
              <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
              </Col>
            </Row>
            <Row style={{marginTop:"2rem"}}>
              <Col>
              <Form.Label style={{display:"block"}}>First Name</Form.Label>
              <Form.Control style={{width:"90%", display:"inline"}} disabled={disable["fname"]} required type="text" placeholder="Enter First Name" name={"fname"}/>
              <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
              </Col>
              <Col>
              <Form.Label style={{display:"block"}}>Last Name</Form.Label>
              <Form.Control style={{width:"90%", display:"inline"}} disabled={disable["lname"]} required type="text" placeholder="Enter Last Name" name={"lname"}/>
              <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
              </Col>
            </Row>
            <Row style={{marginTop:"2rem"}}>
              <Col></Col>
              <Col md={6}>
              <Form.Label style={{display:"block"}}>Phone Number</Form.Label>
              <Form.Control style={{width:"90%", display:"inline"}} disabled={disable["pn"]} required type="text" placeholder="Enter Your Telephone Number" name={"pn"}/>
              <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
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