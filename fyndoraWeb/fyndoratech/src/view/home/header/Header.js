import React from "react";
import { Button, Navbar, Nav, NavDropdown, Form, Container, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../Home.css'
function Header() {
    return (
        <>
            <Navbar expand="lg">
                <Container className="HeaderBar">
                    <Navbar.Brand href="#"><Link to="/"><img src={process.env.PUBLIC_URL + "/Assets/logo.png"} className="App-logo" alt="logo" /></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        </Nav>
                        <NavDropdown title="Services" id="navbarScrollingDropdown" class="menuWrapper">
                            <Link className="linkWrapper" to="/wordpress">Wordpress</Link>
                            <Link className="linkWrapper" to="/laravel">Laravel</Link>
                            <Link className="linkWrapper" to="/php">Php</Link>
                            <Link className="linkWrapper" to="/magento">Magento</Link>
                            <Link className="linkWrapper" to="/android">Android Development</Link>
                            <Link className="linkWrapper" to="/flutter">Flutter app</Link>
                            <Link className="linkWrapper" to="/ios">Ios Development</Link>
                            <Link className="linkWrapper" to="/hybrid">Hybrid Mobile App</Link>
                            <Link className="linkWrapper" to="/reactjs">React Development</Link>
                            <Link className="linkWrapper" to="/angular">Angular Development</Link>
                            <Link className="linkWrapper" to="/payment-gateway">Payment Gateway</Link>
                            <Link className="linkWrapper" to="/websiteDesign">Website Designing</Link>
                            <NavDropdown.Divider />
                            <Link className="linkWrapper" to="/graphic-design">Graphic Designing</Link>
                            <Link className="linkWrapper" to="/logo-design">Logo</Link>
                            <Link className="linkWrapper" to="/ui-ux">UI/UX</Link>
                            <Link className="linkWrapper" to="/figma-design">Figma/Adobe UI Design</Link>
                            <Link className="linkWrapper" to="/webApplication">Buisness Pdf</Link>
                            <Link className="linkWrapper" to="/social-media">Social Media Post</Link>
                        </NavDropdown>
                        {/* <NavDropdown title="Solutions" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Solution</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link><Link className="linkWrapper_anc" to="/portfolio">Portfolio</Link></Nav.Link>
                        <Nav.Link><Link className="linkWrapper_anc" to="/contact-us">Contact Us</Link></Nav.Link>
                        <Nav.Link><Link className="linkWrapper_anc" to="/career">Career</Link></Nav.Link>
                        <Nav.Link><Link className="linkWrapper_anc" to="/about-us">About Us</Link></Nav.Link>
                        {/* <Nav.Link><Link className="linkWrapper_anc" to="/about-us">Blog</Link></Nav.Link> */}
                        <a className="linkWrapper_anc download-btn" href='../../../assets/Fyndora_COMPANY_PROFILE.pdf' download>Download Buisness Pdf</a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header