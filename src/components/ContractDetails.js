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
                    <Form.Label style={{display:"block"}}>Company Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Company Name" name={"uname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Field</Form.Label>
                    <Form.Control  style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Field" name={"pn"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Landline</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Landline" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>AIESEC Responsible</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter AIESEC Responsible" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Website</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Website" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Email</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Email" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Enabler Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Enabler Name" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Enabler Position</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Enabler Position" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Enabler ContactNo</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Enabler ContactNo" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Updates</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" placeholder="Enter Updates" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>No Of Slots</Form.Label>
                    <Form.Control style={{width:"92.6%", display:"inline"}} required type="text" placeholder="Enter No Of Slots" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col></Col>
                    <Col xs={8} style={{marginLeft:"0rem", textAlign:"center"}}>
                        <span style={{fontSize:"x-large", fontWeight:"bold"}}>Status:</span>
                        <Form>
                            <Form.Check
                                reverse
                                style={{paddingRight:"2rem"}}
                                inline
                                label="Contacted:"
                                type="checkbox"
                            />
                            <Form.Check
                                reverse
                                style={{paddingRight:"2rem"}}
                                inline
                                label="Interseted:"
                                type="checkbox"
                            />
                            <Form.Check
                                reverse
                                style={{paddingRight:"2rem"}}
                                inline
                                label="Visted:"
                                type="checkbox"
                            />
                            <Form.Check
                                reverse
                                style={{paddingRight:"2rem"}}
                                inline
                                label="Contact Done:"
                                type="checkbox"
                            />
                        </Form>
                    </Col>
                    <Col></Col>
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