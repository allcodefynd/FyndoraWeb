import React from "react";
import GetInTouch from "../home/GetinTouch/GetInTouch";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import { Container,Image,Row,Col } from "react-bootstrap";
import Footer from "../home/Footer/footer";
import "./contact-us.css"
function ContactUs(){
    return(
        <>
             <TopHeaderInfo/>
            <Header/>
            <Container fluid className="about-us-banner">
                <img src={process.env.PUBLIC_URL + "/Assets/contact-us.jpg"}/>
                <div className="content-wrapper">
                    <h2>CONTACT US</h2>
                </div>
            </Container>
               <Container>
               <Row>
                    <Col className="contact_ic_wr">
                         <div className="contact_Wra">
                            <img src={process.env.PUBLIC_URL + "/Assets/call.png"}/>
                            <ul>
                                <li>Phone No : 970980890980</li>
                                <li>Contact No : 970980890980</li>
                            </ul>
                         </div>
                    </Col>
                    <Col className="contact_ic_wr">
                            <div className="contact_Wra">
                                <img src={process.env.PUBLIC_URL + "/Assets/email.png"}/>
                                <ul>
                                    <li>Email Id: Fyndora@gmail.com</li>
                                    <li>Official Id: fyndrora@info.com</li>
                                </ul>
                            </div>
                    </Col>
                    <Col className="contact_ic_wr">
                        <div className="contact_Wra">
                            <img src={process.env.PUBLIC_URL + "/Assets/address.png"}/>  
                            <ul>
                                <li>Adress: Sec -63 Noida Uttar Pradesh 201309</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
               </Container>
            <GetInTouch/>
            <Footer/>
        </>
    )
}

export default ContactUs