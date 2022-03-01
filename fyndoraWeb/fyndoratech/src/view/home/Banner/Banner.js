import React from "react";
import { Container, Row } from "react-bootstrap";
import '../Homejquery'
function Banner(){
    return(
        <>
            <Container fluid>
                <Row >
                    <img src={process.env.PUBLIC_URL + "/Assets/bg.svg"} className="App-banner" alt="logo" />
                    <div style={{position:"relative"}}>
                        <div className="wrapperWord">
                            <h1><span id="changingword">E-COMMERCE WEBSITES</span></h1>
                            <p><span id="changingpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span></p>
                            <button className="Btnwrapper">Learn More</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Banner;