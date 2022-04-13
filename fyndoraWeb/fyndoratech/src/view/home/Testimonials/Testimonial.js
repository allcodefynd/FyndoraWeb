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
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
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
                                    <p>Fyndora’s expertise in web development, budget-friendly plans, and quick turnaround time make them a popular choice. Their team of professionals built my website from scratch. The best thing about them was that they customised the website according to our needs and are receptive to feedback. Their transparency regarding the budget and their excellent after-completion support make them stand out. My user-friendly website ranks high on aesthetics and performance, which has helped me scale my online business to new heights.</p>
                                    <span><b>-Akash</b></span>
                                </div>
                            </div>
                            <div class='item'>
                                <div style={{margin:"20px",padding:"20px",boxShadow:"0 0 6px #000",borderRadius:"25px"}}>
                                    <div className="icon-bar"><img src={process.env.PUBLIC_URL + "/Assets/icon/quotes.png"} /></div>
                                    <p>Fyndora’s recruitment services have a strict and thorough evaluation process that ensures they screen the best talent out of millions. From the shortlisting to training, they managed everything smoothly within the stipulated budget. Their commitment to deadlines and their drive to hire only the top talent make them ideal for outsourcing recruitment. It saved my organisation time and helped us identify candidates that match our company's vision. I recommend them for their competitive budgets and training process that downscales information in a digestible manner.</p>
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