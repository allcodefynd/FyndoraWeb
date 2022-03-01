import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollUp from "../../element/ScrollUp";
import CopyrightFooter from "./CopyrightFooter";
function Footer() {
    return (
        <>
           <Container fluid className="footerWrapper">
               <Container>
                <Row>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/Assets/white-logo.png"} className="App-logo"  alt="logo" />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                        </p>
                    </Col>
                    <Col>
                        <h3>IT Services</h3>
                        <ul>
                            <li><Link className="linkWrapper" to="/wordpress">Wordpress</Link></li>
                            <li><Link className="linkWrapper" to="/magento">Magento</Link></li>
                            <li><Link className="linkWrapper" to="/magento">Android</Link></li>
                            <li><Link className="linkWrapper" to="/flutter">Flutter app</Link></li>
                            <li><Link className="linkWrapper" to="/payment-gateway">Payment Gateway</Link></li>
                            <li><Link className="linkWrapper" to="/social-media">Social Media Post</Link></li>
                        </ul>
                    </Col> 
                    <Col>
                        <h3>Quick Access</h3>
                            <ul>
                                <li><Link className="linkWrapper_anc" to="/portfolio">Portfolio</Link></li>
                                <li><Link className="linkWrapper_anc" to="/contact-us">Contact Us</Link></li>
                                <li><Link className="linkWrapper_anc" to="/blog">Blogs</Link></li>
                                <li><Link className="linkWrapper_anc" to="/about-us">About Us</Link></li>
                                <li><Link className="linkWrapper_anc" to="/terms-and-Condition">Terms & Condition</Link></li>
                                <li><a className="linkWrapper_anc" target="_blank" href='../../../assets/Fyndora_COMPANY_PROFILE.pdf'>View Buisness Pdf</a></li>
                            </ul>
                    </Col>
                    <Col>
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                Email Id: Fyndora@info .com <br></br>
                                Contact No : 970980890980 <br></br>
                                 No : 970980890980 <br></br>
                                Address : Noida Sec 67 Uttar Pradesh 201301 <br></br>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
           </Container>
           <ScrollUp/>
           <CopyrightFooter/>
        </>
    )
}
export default Footer;