import React from "react";
import { Container, Row } from "react-bootstrap";

function CopyrightFooter() {
    return(
        <>
            <Container fluid style={{background:"#252628"}}>
                <Row>
                    <p style={{textAlign:"center",color:"#fff"}}>This site use cookies. Fyndora Copyrights 2022 ©  Technologies Pvt Ltd. | ISO 9001:2015 | All Rights Reserved.</p>
                </Row>
            </Container>
        </>
    )
}
export default CopyrightFooter