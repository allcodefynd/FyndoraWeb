import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function WorkProcess(){
    return(
        <>
            <Container>
                 <Row className="bannerSecond_bx">
                        <h2 style={{ textAlign: "center" }}>Work Process</h2>
                        <span className="content_bar"></span>
                </Row>  
                <Row style={{marginBottom:"100px"}}>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/Assets/work_process.jpg"} alt="logo" style={{width:"100%"}}/>
                    </Col>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/Assets/work_processs.svg"} alt="logo" style={{width:"100%"}}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default WorkProcess;