import React from 'react'
import { Container, Row, Col, Table, ProgressBar, Button, Form, Nav, Navbar, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { FaSearch, FaPlus } from 'react-icons/fa'
import ContractDetails from './ContractDetails';


function Contracts({loggedin}) {
  const [disable, setDisable] = useState(true);
  const [width, setWidth] = useState(0);
  const [show, setShow] = useState(false);
  const [contractData, setcontractData] = useState({
    User: "",
    contractType:"",
    companyName:"",
    companyEmail: "",
    companywebsite: "",
    companyphone: "",
    companyAddress: "",
    contactPersonName:"",
    contactPersonPhone:"",
    companySize:10,
    industry:"",
    contractOpportunitiesNo:"",
    contractOpportunitiesDetails:"",
    contacted:false,
    interested:false,
    visted:false,
    contactDone:false,
    status:"",
    No_Of_Slots:0
  })
  const navigate = useNavigate();

  const getData = (e) => {
    let tata = JSON.parse(JSON.stringify(contractData))
    e = e.target.parentNode.firstChild;
    e = e.nextSibling;
    tata.companyName = e.innerText
    e = e.nextSibling;
    tata.User = e.innerText
    e = e.nextSibling;
    tata.status = e.innerText
    console.log(tata);
    setcontractData(tata);
  }

  useEffect(()=>{
    if(!loggedin){navigate('/')}
  })
  return (
    <div>
      <ContractDetails show={show} setShow={setShow} contractData={contractData}/>
      <Container className='newScroll' style={{width:"95%", marginTop:"-1rem", padding:"0", overflowY:"scroll", overflowX:"hidden", height:"90vh"}} id="contractbox" fluid>
          <Row style={{marginTop:"0.5rem"}}>
              <Col>
              <div style={{border:"4px solid #212529", borderRadius:"2%", background:"#212529", height:"98%"}}>
              <Table style={{textAlign:"center"}} striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th style={{textAlign:"center"}} colSpan={5}>
                      <Navbar>
                        <Nav style={{marginLeft:"1rem", fontSize:"x-large"}} className='me-auto my-2 my-lg-0'>Contracts</Nav>
                        <Nav style={{justifyContent:"flex-end"}}>
                          <motion.div initial={{width:0}} animate={{ width }}>
                          <Form className="d-flex">
                              <Form.Control
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                              hidden = {disable}
                              />
                          </Form>
                          </motion.div>
                          <Button onClick={()=>{(width===300) ? setWidth(0) : setWidth(300);setDisable(!disable);console.log(disable)}} style={{margin:"0", border:"1px solid #a6b0cf", marginRight:"1rem"}} variant='light'><FaSearch/></Button>
                          <Button style={{margin:"0", border:"1px solid #a6b0cf", marginRight:"1rem"}} variant='light'><FaPlus style={{paddingBottom:"0.25rem"}}/></Button>
                        </Nav>  
                      </Navbar>
                    </th>
                  </tr>
                  <tr>
                    <th>#</th>
                    <th>Company Name</th>
                    <th>Procured By</th>
                    <th>Status</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>1</td>
                    <td>AISEC</td>
                    <td>Abduaws</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${90}%`} style={{marginBottom:"0.5rem"}} animated variant={"success"} now={90} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>2</td>
                    <td>AISEC</td>
                    <td>TeraByte</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${90}%`} style={{marginBottom:"0.5rem"}} animated variant={"success"} now={90} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>3</td>
                    <td>AISEC</td>
                    <td>Shehab</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${90}%`} style={{marginBottom:"0.5rem"}} animated variant={"success"} now={90} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>4</td>
                    <td>AISEC</td>
                    <td>Sa3eed</td>
                    <td>Failed</td>
                    <td><ProgressBar label={`Failed`} style={{marginBottom:"0.5rem"}} variant={"danger"} now={100} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>5</td>
                    <td>AISEC</td>
                    <td>Osama Leesho</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${90}%`} style={{marginBottom:"0.5rem"}} animated variant={"success"} now={90} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>6</td>
                    <td>AISEC</td>
                    <td>Undefined</td>
                    <td>Completed</td>
                    <td><ProgressBar label={`Completed`} style={{marginBottom:"0.5rem"}} variant={"success"} now={100} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>7</td>
                    <td>AISEC</td>
                    <td>Adham</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${80}%`} style={{marginBottom:"0.5rem"}} animated variant={"success"} now={80} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>8</td>
                    <td>AISEC</td>
                    <td>Omar</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${75}%`} style={{marginBottom:"0.5rem"}} animated variant={"success"} now={75} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>9</td>
                    <td>AISEC</td>
                    <td>Mohammed</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${70}%`} style={{marginBottom:"0.5rem"}} animated variant={"warning"} now={70} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>10</td>
                    <td>AISEC</td>
                    <td>Osama el tany</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${65}%`} style={{marginBottom:"0.5rem"}} animated variant={"warning"} now={65} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>11</td>
                    <td>AISEC</td>
                    <td>Abdelraof</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${60}%`} style={{marginBottom:"0.5rem"}} animated variant={"warning"} now={60} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>12</td>
                    <td>AISEC</td>
                    <td>Abdelraof</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${55}%`} style={{marginBottom:"0.5rem"}} animated variant={"warning"} now={55} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>13</td>
                    <td>AISEC</td>
                    <td>Abdelraof</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${50}%`} style={{marginBottom:"0.5rem"}} animated variant={"danger"} now={50} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>14</td>
                    <td>AISEC</td>
                    <td>Abdelraof</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${40}%`} style={{marginBottom:"0.5rem"}} animated variant={"danger"} now={40} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>15</td>
                    <td>AISEC</td>
                    <td>Abdelraof</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${30}%`} style={{marginBottom:"0.5rem"}} animated variant={"danger"} now={30} /></td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>16</td>
                    <td>AISEC</td>
                    <td>Abdelraof</td>
                    <td>OnGoing</td>
                    <td><ProgressBar label={`${20}%`} style={{marginBottom:"0.5rem"}} animated variant={"danger"} now={20} /></td>
                  </tr>
                </tbody>
              </Table>
              </div>
              </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contracts