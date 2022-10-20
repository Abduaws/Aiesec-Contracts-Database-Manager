import React from 'react'
import { MdLeaderboard } from 'react-icons/md'
import { Container, Table } from 'react-bootstrap'
function Leaderboardwidget() {
  return (
    <Container fluid style={{marginTop:"2.1rem"}}>
    <div style={{border:"4px solid #212529", borderRadius:"2%", background:"#212529"}}>
    <Table id="widgetbox2" style={{textAlign:"center", margin:"0", width:"100%", height:"91%", backgroundColor:"black"}} striped bordered hover variant="dark">
        <thead>
        <tr>
            <th style={{textAlign:"center"}} colSpan={4}><MdLeaderboard style={{marginRight:"1rem"}}></MdLeaderboard>Top 5 LeaderBoard</th>
        </tr>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>Score</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Abduaws</td>
            <td>100</td>
        </tr>
        <tr>
            <td>2</td>
            <td>TeraByte</td>
            <td>90</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Shehab</td>
            <td>80</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Sa3eed</td>
            <td>70</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Osama Leesho</td>
            <td>60</td>
        </tr>
        </tbody>
    </Table>
    </div>
    </Container>
  )
}

export default Leaderboardwidget