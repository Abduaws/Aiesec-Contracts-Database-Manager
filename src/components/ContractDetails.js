import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap'

function ContractDetails({show, setShow, contractData}) {
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
                    <Form.Label style={{display:"block"}}>Responsible User</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.User} placeholder="Enter Responsible User Name" name={"uname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Contract Type</Form.Label>
                    <Form.Control  style={{width:"85%", display:"inline"}} required type="text" value={contractData.contractType} placeholder="Enter Contract Type" name={"pn"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Company Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.companyName} placeholder="Enter Company Name" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Company Email</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.companyEmail} placeholder="Enter Company Email" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Company Website</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.companywebsite} placeholder="Enter Company Website" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Company Phone</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.companyphone} placeholder="Company Phone" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Company Address</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.companyAddress} placeholder="Enter Company Address" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Contact Person Name</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.contactPersonName} placeholder="Enter Contact Person Name" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Contact Person Phone</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.contactPersonPhone} placeholder="Enter Contact Person Phone" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Company Size</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.companySize} placeholder="Enter Company Size" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Industry</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.industry} placeholder="Enter Industry" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>Number of Contract Opportunities</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.contractOpportunitiesNo} placeholder="Enter No Of Contract Opportunities" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Contract Opportunities</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.contractOpportunitiesDetails} placeholder="Enter Contract Opportunities" name={"fname"}/>
                    <Button  style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                    <Col>
                    <Form.Label style={{display:"block"}}>No Of Slots</Form.Label>
                    <Form.Control style={{width:"85%", display:"inline"}} required type="text" value={contractData.No_Of_Slots} placeholder="Enter No Of Slots" name={"lname"}/>
                    <Button style={{marginLeft:"1rem"}} variant="dark"><AiFillEdit/></Button>
                    </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                    <Col>
                    <Form.Label style={{display:"block"}}>Status</Form.Label>
                    <Form.Control style={{width:"92.6%", display:"inline"}} required type="text" value={contractData.status} placeholder="Enter Status" name={"lname"}/>
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
                                checked={contractData.contacted}
                            />
                            <Form.Check
                                reverse
                                style={{paddingRight:"2rem"}}
                                inline
                                label="Interseted:"
                                type="checkbox"
                                checked={contractData.interested}
                            />
                            <Form.Check
                                reverse
                                style={{paddingRight:"2rem"}}
                                inline
                                label="Visted:"
                                type="checkbox"
                                checked={contractData.visited}
                            />
                            <Form.Check
                                reverse
                                style={{paddingRight:"2rem"}}
                                inline
                                label="Contact Done:"
                                type="checkbox"
                                checked={contractData.contactDone}
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