import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Clock from 'react-clock'
import { useState, useEffect } from 'react'

function Clockwidget() {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
        clearInterval(interval);
        };
    }, []);

    return (
    <Container fluid style={{width:"95%"}} id="widgetbox">
        <Row>
            <Col style={{marginTop:"2rem"}}>
                <div style={{fontSize:"large"}}>{Intl.DateTimeFormat('en-US', {weekday:"long"}).format(value)}</div>
                <div style={{fontSize:"x-large"}}>{Intl.DateTimeFormat('en-US', {month:"long"}).format(value)} {value.getDate()} {value.getFullYear()}</div>
                {value.getHours()>12 ? (value.getHours()-12) : value.getHours()}:{value.getMinutes()} {(value.getHours()>12) ? "PM" : "AM"}
            </Col>
            <Col xs={2}></Col>
            <Col style={{paddingBottom:"0.25rem", paddingTop:"0.25rem"}}>
                <Clock value={value}/>
            </Col>
        </Row>
    </Container>
    )
}

export default Clockwidget