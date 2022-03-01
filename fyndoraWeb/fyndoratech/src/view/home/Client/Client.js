import React from "react";
import {Container, Row} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';

function Client () {
    const options = {
        items: 5,
    };
    return(
        <>
            <Container>
               <Row>
                  <h2 style={{ textAlign: "center",marginTop:"60px" }}>Clientele</h2>
                    <span className="content_bar"></span>
                    <OwlCarousel className='owl-theme clientCrousel' {...options} loop margin={10} nav>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/client1.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/client2.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/client3.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/client4.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/client5.png"} alt="logo" />
                        </div>
                    </OwlCarousel>;
                </Row>
            </Container>
        </>
    )
}

export default Client;