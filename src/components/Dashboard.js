import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Clockwidget from './Clockwidget';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useState } from 'react'
import { animate } from 'framer-motion';
import Contractswidget from './Contractswidget';
import Leaderboardwidget from './Leaderboardwidget';
import LatestContractswidget from './LatestContractswidget';

function Dashboard() {
  const [percentage, setPercentage] = useState(0);
  const [color, setColor] = useState("red")
  const [variant, setVariant] = useState("danger")

  const handleprogress = () => {
    animate(0, 100, {duration:14, onUpdate: num => {setPercentage(Math.ceil(num));
      if(num>64){setColor("green");setVariant("success")}else if(num>32){setColor("gold");setVariant("warning")}else{setColor("red");setVariant("danger")}
    }, repeatType:"reverse", repeat:Infinity, ease:"linear"})
  }

  return (
    <div>
      <Container fluid style={{background:"#F3F3F9", width:"100vw", height:"100vh", padding:"0", marginTop:"-1rem"}}>
        <div style={{width:"95vw", marginLeft:"2rem", border:"4px solid #2A3042", borderRadius:"5px", backgroundColor:"#2A3042"}}><img style={{width:"100%", transform:"scaleY(1.07)"}} src="welcomedash.png" alt="..." /></div>
        <Row style={{width:"95%", marginLeft:"2rem", padding:"0"}}>
          <Col style={{padding:"0"}}>
            <Container fluid style={{width:"95%", padding:"0"}}>
              <Container fluid style={{width:"95%", marginLeft:"1rem", marginTop:"1rem"}}>
                <Row>
                  <Col xs={5}>
                  <Clockwidget/>
                  </Col>
                  <Col id="widgetbox">
                    <div style={{fontSize:"large", textAlign:"center", paddingTop:"1rem"}}>Current Rank</div>
                    <hr id="elhr"/>
                    <div style={{textAlign:"center"}}><div style={{display:"inline", fontSize:"4em"}}>1</div><div style={{display:"inline", fontSize:"2em"}}>/11</div></div>
                  </Col>
                  <Col xs={5} style={{marginLeft:"1rem"}}>
                    <Contractswidget percentage={percentage} variant={variant}/>
                  </Col>
                </Row>
                <Row style={{marginTop:"2rem"}}>
                  <Col xs={4}>
                    <Leaderboardwidget/>
                  </Col>
                  <Col id="widgetbox" style={{background:"white"}}>
                    <div style={{fontSize:"large", textAlign:"center", paddingTop:"1rem", fontWeight:"bold"}}>Progress to Next Rank</div>
                    <hr id="elhr"/>
                    <Container onClick={handleprogress} fluid style={{width:"70%", marginTop:"2rem"}}>
                    <CircularProgressbar styles={buildStyles({textColor: color,pathColor: color,trailColor: "#F3F3F9"})} value={percentage} text={`${percentage}%`}/>
                    </Container>
                  </Col>
                  <Col xs={5} style={{marginLeft:"1rem"}} id="widgetbox">
                    <LatestContractswidget/>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Dashboard