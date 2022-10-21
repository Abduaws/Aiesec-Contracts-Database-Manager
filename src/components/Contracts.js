import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'

function Contracts() {
  return (
    <div>
      <Container style={{width:"95%", marginTop:"-1rem", padding:"0", overflow:"scroll", height:"90vh"}} id="contractbox" fluid>
          <Row style={{marginTop:"0.5rem"}}>
              <Col>
              <div style={{border:"4px solid #212529", borderRadius:"2%", background:"#212529", height:"98%"}}>
              <Table style={{textAlign:"center"}} striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th style={{textAlign:"center"}} colSpan={4}></th>
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
                  <tr>
                    <td>11</td>
                    <td>Abdelraof</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Abdelraof</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Abdelraof</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Abdelraof</td>
                    <td>0</td>
                    <td>0</td>
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
    </div>
  )
}

export default Contracts