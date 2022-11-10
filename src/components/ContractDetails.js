import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap'

function ContractDetails({show, setShow}) {
  return (
    <Modal size="xl" centered show={show} onHide={()=>{setShow(false)}}>
        <Modal.Header closeButton>
            <Modal.Title><span style={{fontSize:"xx-large", fontWeight:"bold"}}>Contract Details</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container style={{width:"100%"}}>
            <Row>
                <Container className='newScroll' style={{marginTop:"-1rem", overflowY:"scroll", overflowX:"hidden"}} id="profilebox">
                <Form style={{marginTop:"2rem"}}>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Username</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Username" name={"uname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Phone Number</Form.Label>
                    <Form.Control  style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Your Telephone Number" name={"pn"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>First Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter First Name" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Last Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Last Name" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>First Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter First Name" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Last Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Last Name" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>First Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter First Name" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Last Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Last Name" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>First Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter First Name" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Last Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Last Name" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>First Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter First Name" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Last Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Last Name" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>First Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter First Name" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Last Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Last Name" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                </Form>
                </Container>
            </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={()=>{setShow(false)}}>
            Save
            </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ContractDetails