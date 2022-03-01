import React from "react";
import { Container, Row } from "react-bootstrap";
import '../Home.css'
function TopHeaderInfo() {
    return (
        <>
            <Container fluid className="infoWrapper">
                    <Container>
                    <Row>
                        <ul>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Book a Meeting</a></li>
                            <li><a href="">+8630081871</a></li>
                            <li><a href="">WhatsApp Now</a></li>
                        </ul>
                    </Row>
                    </Container>
            </Container>
        </>
    )
}

export default TopHeaderInfo;