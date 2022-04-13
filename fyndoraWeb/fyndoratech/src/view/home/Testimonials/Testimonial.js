import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import OwlCarousel from 'react-owl-carousel';
function Testimonial() {
    const optionstechh = {
        loop: true,
        autoplay: true,
        margin: 10,
        navText: false,
        dots: false,
        responsive: {
            0: {
                items: 6
            },
            600: {
                items: 8
            },
            1000: {
                items: 2
            }
        }
    };
    return (
        <>
            <Container className="quotes_wrapper">
                <Row>
                    <Col xl={6} style={{margin:"auto"}}>
                        <div>
                            <p>Check out what our clients are saying about us</p>
                            <p><strong>We are fortunate enough to receive awards from various media houses. The pleasure of such things gives us the motivation to strive towards excellence.</strong></p>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <OwlCarousel className='owl-theme' {...optionstechh} loop margin={40} nav>
                            <div class='item'>
                                <div style={{margin:"20px",padding:"20px",boxShadow:"0 0 6px #000",borderRadius:"25px"}}>
                                    <div className="icon-bar"><img src={process.env.PUBLIC_URL + "/Assets/icon/quotes.png"} /></div>
                                    <p>We get your organization where it needs to be through in-depth indusrty knowledge, technical expertise.</p>
                                    <span><b>-Akash</b></span>
                                </div>
                            </div>
                            <div class='item'>
                                <div style={{margin:"20px",padding:"20px",boxShadow:"0 0 6px #000",borderRadius:"25px"}}>
                                    <div className="icon-bar"><img src={process.env.PUBLIC_URL + "/Assets/icon/quotes.png"} /></div>
                                    <p>We get your organization where it needs to be through in-depth indusrty knowledge, technical expertise.</p>
                                    <span><b>-Ayush</b></span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Testimonial