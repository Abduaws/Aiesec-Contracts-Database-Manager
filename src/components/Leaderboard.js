import React from 'react'
import { Container, Table, Row, Col } from 'react-bootstrap'
import { BiCrown } from 'react-icons/bi'
import { MdLeaderboard } from 'react-icons/md'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Leaderboard({user, loggedin}) {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!loggedin){navigate('/')}
  })
  return (
    <div>
      <Container fluid style={{width:"100%"}}>
        <Row>
          <Col>
          <span style={{marginLeft:"6.3rem", fontSize:"xx-large", fontWeight:"bold"}}>Current Rank One: Abduaws <BiCrown style={{color:"gold"}}/></span><br />
          <span style={{marginLeft:"6.3rem", fontSize:"xx-large", fontWeight:"bold"}}>Your Current Rank: 1</span>
          </Col>
        </Row>
        <Row>
          <Container className="newScroll" style={{width:"85%", overflowY:"scroll", overflowX:"hidden"}} id="profilebox">
          <Row style={{marginTop:"0.5rem"}}>
              <Col>
              <div style={{border:"4px solid #212529", borderRadius:"2%", background:"#212529", height:"98%"}}>
              <Table style={{textAlign:"center"}} striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th style={{textAlign:"center"}} colSpan={4}><MdLeaderboard style={{marginRight:"1rem"}}></MdLeaderboard>LeaderBoard</th>
                  </tr>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>No of Contracts Completed</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Abduaws</td>
                    <td>10</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>TeraByte</td>
                    <td>9</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Shehab</td>
                    <td>8</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Sa3eed</td>
                    <td>7</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Osama Leesho</td>
                    <td>6</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Undefined</td>
                    <td>5</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Adham</td>
                    <td>4</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Omar</td>
                    <td>3</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Mohammed</td>
                    <td>2</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Osama el tany</td>
                    <td>1</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Abdelraof</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </Table>
              </div>
              </Col>
          </Row>
          </Container>
        </Row>
      </Container>
    </div>
  )
}

export default Leaderboard