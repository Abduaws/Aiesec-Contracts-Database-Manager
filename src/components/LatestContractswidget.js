import React from 'react'
import { Container, Table } from 'react-bootstrap'

function LatestContractswidget() {
  return (
    <Container fluid style={{marginTop:"1rem", padding:"0"}}>
        <div style={{fontSize:"large", textAlign:"center", paddingTop:"0rem", fontWeight:"bold"}}>Latest Contracts</div>
        <hr id="elhr"/>
        <div style={{marginTop:"1rem", border:"4px solid #212529", borderRadius:"2%", background:"#212529", height:"14rem"}}>
            <Table id="widgetbox2" style={{textAlign:"center", marginTop:"0rem", marginLeft:"0rem", width:"100%", height:"100%", backgroundColor:"black"}} striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Contract</th>
                <th>Assigned Memeber</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>iHub</td>
                <td>Abduaws</td>
            </tr>
            <tr>
                <td>YouHub</td>
                <td>TeraByte</td>
            </tr>
            <tr>
                <td>EntaHub</td>
                <td>Shehab</td>
            </tr>
            <tr>
                <td>HowaHub</td>
                <td>Sa3eed</td>
            </tr>
            </tbody>
            </Table>
        </div>
    </Container>
  )
}

export default LatestContractswidget