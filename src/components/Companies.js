import React from 'react'
import { Container, Row, Col, Table, Button, Form, Nav, Navbar } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { FaSearch, FaPlus } from 'react-icons/fa'
import CompanyDetails from './CompanyDetails'

function Companies({loggedin}) {
  const [disable, setDisable] = useState(true);
  const [width, setWidth] = useState(0);
  const [show, setShow] = useState(false);
  const [companyData, setCompanyData] = useState({
    name:"", 
    field:"", 
    landLine:"", 
    AIESEC_responsible:"", 
    contacted:false, 
    interested:false,
    visted:false,
    contactDone:false,
    No_Of_Slots:0,
    website:"",
    email:"",
    enablerName:"",
    enablerPosition:"",
    enablerContactNo:0,
    updates:""});    
  const navigate = useNavigate();

  // Get data of currently Selected Row and send it ti modal
  const getData = (e) => {
    let tata = JSON.parse(JSON.stringify(companyData))
    e = e.target.parentNode.firstChild;
    e = e.nextSibling;
    tata.name = e.innerText
    e = e.nextSibling;
    tata.field = e.innerText
    e = e.nextSibling;
    tata.website = e.innerText
    e = e.nextSibling;
    tata.landLine = e.innerText
    console.log(tata);
    setCompanyData(tata);
  }

  useEffect(()=>{
    if(!loggedin){navigate('/')}
  })
  return (
    <div>
      <CompanyDetails show={show} setShow={setShow} companyData={companyData}/>
      <Container className='newScroll' style={{width:"95%", marginTop:"-1rem", padding:"0", overflowY:"scroll", overflowX:"hidden", height:"90vh"}} id="contractbox" fluid>
          <Row style={{marginTop:"0.5rem"}}>
              <Col>
              <div style={{border:"4px solid #212529", borderRadius:"2%", background:"#212529", height:"98%"}}>
              <Table style={{textAlign:"center"}} striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th style={{textAlign:"center"}} colSpan={5}>
                      <Navbar>
                        <Nav style={{marginLeft:"1rem", fontSize:"x-large"}} className='me-auto my-2 my-lg-0'>Companies</Nav>
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
                    <th>Field</th>
                    <th>Website</th>
                    <th>Landline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>1</td>
                    <td>AISEC</td>
                    <td>Development of youth</td>
                    <td><a href="https://aiesec.org/">https://aiesec.org/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>2</td>
                    <td>Facebook</td>
                    <td>Social Media</td>
                    <td><a href="https://www.facebook.com/">https://www.facebook.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>3</td>
                    <td>Google</td>
                    <td>Enginnering & Technology</td>
                    <td><a href="https://www.google.com/">https://www.google.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>4</td>
                    <td>Apple</td>
                    <td>Technology</td>
                   <td><a href="https://www.apple.com/eg/">https://www.apple.com/eg/</a></td>
                   <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>5</td>
                    <td>Nvidia</td>
                    <td>Graphics Cards and Electronics</td>
                    <td><a href="https://www.nvidia.com/en-us/">https://www.nvidia.com/en-us/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>6</td>
                    <td>AMD</td>
                    <td>Graphics Cards and Electronics</td>
                    <td><a href="https://www.amd.com/en">https://www.amd.com/en</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>7</td>
                    <td>Ifixit</td>
                    <td>Repair</td>
                    <td><a href="https://www.ifixit.com/">https://www.ifixit.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>8</td>
                    <td>Soundcloud</td>
                    <td>Streaming</td>
                    <td><a href="https://soundcloud.com/">https://soundcloud.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>9</td>
                    <td>Spotify</td>
                    <td>Streaming</td>
                    <td><a href="https://open.spotify.com/">https://open.spotify.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>10</td>
                    <td>Discord</td>
                    <td>Social Media</td>
                    <td><a href="https://discord.com/">https://discord.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>11</td>
                    <td>Youtube</td>
                    <td>Streaming</td>
                    <td><a href="https://www.youtube.com/">https://www.youtube.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>12</td>
                    <td>Instagram</td>
                    <td>Social Media</td>
                    <td><a href="https://www.instagram.com/">https://www.instagram.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>13</td>
                    <td>Tiktok</td>
                    <td>Social Media</td>
                    <td><a href="https://www.tiktok.com/">https://www.tiktok.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>14</td>
                    <td>Snapchat</td>
                    <td>Social Media</td>
                    <td><a href="https://www.snapchat.com/">https://www.snapchat.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>15</td>
                    <td>Twitter</td>
                    <td>Social Media</td>
                    <td><a href="https://twitter.com/">https://twitter.com/</a></td>
                    <td>011548956246</td>
                  </tr>
                  <tr onClick={(e)=>{setShow(true);getData(e)}}>
                    <td>16</td>
                    <td>Linkedin</td>
                    <td>Social Media</td>
                    <td><a href="https://www.linkedin.com/feed/">https://www.linkedin.com/feed/</a></td>
                    <td>011548956246</td>
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

export default Companies