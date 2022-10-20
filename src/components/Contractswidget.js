import React from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdOutlineDangerous } from 'react-icons/md'
import { BiLoaderCircle } from 'react-icons/bi'

function Contractswidget({variant, percentage}) {
  return (
    <Container fluid>
        <Row>
        <Container fluid>
            <Row>
            <Col id="widgetbox" style={{padding:"0"}}>
                <Container>
                <Row>
                <div style={{fontSize:"medium", textAlign:"center", paddingTop:"0.5rem"}}>Ongoing Contracts</div>
                </Row>
                <Row>
                <div style={{fontWeight:"bold", fontSize:"medium", textAlign:"center"}}>5<BiLoaderCircle style={{paddingBottom:'2px'}}/></div>
                </Row>
                </Container>
            </Col>
            <Col id="widgetbox" style={{marginLeft:"1rem", padding:"0"}}>
                <Container>
                <Row>
                <div style={{fontSize:"medium", textAlign:"center", padding:"0", paddingTop:"0.5rem"}}>Completed Contracts</div>
                </Row>
                <Row>
                <div style={{fontWeight:"bold", fontSize:"medium", textAlign:"center"}}>5<AiOutlineCheckCircle style={{paddingBottom:'2px'}}/></div>
                </Row>
                </Container>
            </Col>
            <Col id="widgetbox" style={{marginLeft:"1rem", padding:"0"}}>
                <Container>
                <Row>
                <div style={{fontSize:"medium", textAlign:"center", paddingTop:"0.5rem"}}>Failed Contracts</div>
                </Row>
                <Row>
                <div style={{fontWeight:"bold", fontSize:"medium", textAlign:"center"}}>5<MdOutlineDangerous style={{paddingBottom:'2px'}}/></div>
                </Row>
                </Container>
            </Col>
            </Row>
        </Container>
        </Row>
        <Row style={{marginTop:"1rem"}}>
        <Col id="widgetbox" style={{textAlign:"center"}}>
            <div>Contract Success Rate:</div>
            <ProgressBar label={`${percentage}%`} style={{marginBottom:"0.5rem"}} animated variant={variant} now={percentage} />
        </Col>
        </Row>
    </Container>
  )
}

export default Contractswidget