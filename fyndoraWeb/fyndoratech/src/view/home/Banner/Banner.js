import React from "react";
import { Container, Row } from "react-bootstrap";
import '../Homejquery'
function Banner(){
    return(
        <>
            <Container fluid>
                <Row >
                    
                    <div style={{position:"relative",margin:"0px",padding:"0px"}}>
                    <img src={process.env.PUBLIC_URL + "/Assets/bg.svg"} className="App-banner" alt="logo" />
                        <div className="wrapperWord">
                            <p><span id="changingword">E-COMMERCE WEBSITES</span></p>
                            <p><span id="changingpara">Integrate an exceptional e-commerce store with our Magento expertise and boost the user experience and customer engagement with unique web apps through our Laravel development services. We also help you launch your brand and products on a customised Shopify store.</span></p>
                            <button className="Btnwrapper">Learn More</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Banner;