import React from 'react'
import { Navbar, Nav, Container, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBars, FaSearch } from 'react-icons/fa'
import { BsPersonSquare } from 'react-icons/bs'
import { motion } from "framer-motion"
import { useState } from 'react'

function Navigation({toggleShow}) {
    const [disable, setDisable] = useState(true);
    const [width, setWidth] = useState(0);
    const [x, setX] = useState(0);
    return (
        <Navbar sticky="top" style={{background:"#2A3042", width:"100vw"}} expand="lg">
        <Container fluid>
            <motion.div animate={{ x }}>
            <Navbar.Brand><Button style={{margin:"0", border:"1px solid #a6b0cf"}} id="myanim" variant='light' onClick={()=>{(x==245) ? setX(0) : setX(245);toggleShow()}}><FaBars/></Button></Navbar.Brand>
            </motion.div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll"> 
            <Nav className='me-auto my-2 my-lg-0'></Nav>
            <Nav>
            <Button as={Link} to="/Profile" style={{margin:"0", border:"1px solid #a6b0cf", marginRight:"1rem"}} id="myanim" variant='light'><BsPersonSquare/></Button>
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
            <Button onClick={()=>{(width===300) ? setWidth(0) : setWidth(300);setDisable(!disable);console.log(disable)}} style={{margin:"0", border:"1px solid #a6b0cf", marginRight:"1rem"}} id="myanim" variant='light'><FaSearch/></Button>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Navigation