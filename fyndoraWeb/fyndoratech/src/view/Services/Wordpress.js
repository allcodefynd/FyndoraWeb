import React from "react";
import { Row, Container, Col } from 'react-bootstrap'
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import Client from "../home/Client/Client"
import GetInTouch from "../home/GetinTouch/GetInTouch";
function Wordpress() {
    return (
        <>
            <TopHeaderInfo />
            <Header />
            <Container fluid>
                <Row ><img src={process.env.PUBLIC_URL + "/Assets/services/wordpress.jpg"} className="App-banner" alt="logo" />
                    <div style={{ position: "relative" }}>
                        <div className="head_wrapper">
                            <h1><span id="head_main">Wordpress DEVELOPMENT</span></h1>
                            <p><span id="head_para">If you are looking to create a feature-rich website for your business or personal needs, WordPress is ideal. WordPress is a platform that caters to all these needs and provides the most reliable WordPress services. It is one of the world’s best, most popular content management systems used by more than 43.3% of website owners across the globe.</span></p>
                            <button className="allBtnwrapper">GET IN TOUCH</button>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                        <h3>WordPress Development</h3>
                        <span class="content_bar"></span>
                        <p>However, creating a perfect WordPress website by yourself may sound complicated and time-consuming. At such times, a WordPress service provider comes into the picture. If you want everything to be perfect, you can outsource creating and developing your WordPress website to such a company. Fyndora is one of the leading WordPress service provider companies. It is a one-stop destination for all your WordPress website needs.</p>
                    </div>
                </Row>
            </Container>
            <Container>
                <h3 style={{ textAlign: "center" }}>Why should you choose us for WordPress services?</h3>
                <span class="content_bar"></span>
                <Row className="bxuirt">
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Outstanding results</h4>
                                    <span></span>
                                </Col>
                            </Row>
                            <p>As one of the leading, reliable IT service and consultation provider companies, Fyndora guarantees quality services to all its clients. Our team ensures to build the finest solutions for all our clients.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                    <Col><h4>Clean functional </h4>
                                        <span></span>
                                    </Col>
                            </Row>
                            <p>At Fyndora, we provide quality maintenance and support services and try to fix all the problems associated with the website to ensure a clean and bug-free functionality of the website. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Low-maintenance</h4><span></span></Col>
                            </Row>
                            <p>Our team tries to focus more on fixing the bugs, removing hardcoded gaps, and unethical customization. Hence, it results in a fast functioning and easy-to-maintain WordPress website. As a result, the overall maintenance cost reduces.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>SEO-friendly websites</h4><span></span></Col>
                            </Row>
                            <p>To ensure the best of our client’s satisfaction, our professionals work with all the innovative tools and techniques such as SSL certificates, Google analytics, SEO plugin, etc. We try to perform the necessary optimization to make your website SEO-friendly. </p>
                        </div>
                    </Col>
                </Row>
                <Row className="bxuirt2">
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Proven methods</h4><span></span></Col>
                            </Row>
                            <p>At Fyndora, we provide a wide range of IT and consulting services, including WordPress development. Over all these years, we have developed different methodologies that are very successful in the field.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Best quality</h4><span></span></Col>
                            </Row>
                            <p>At Fyndora, we have highly qualified and experienced IT experts. Hence, undoubtedly you will get the best quality services on our platform. We also conduct regular training for our professionals to keep them updated on all the latest changes. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Affordable</h4><span></span></Col>
                            </Row>
                            <p>Outsourcing all your WordPress services to one firm can help you cut operational costs and reduce the risk of data breaches or the threat of cybercrime. Not only that, you get all your work done successfully irrespective of the deadlines.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Flexible</h4><span></span></Col>
                            </Row>
                            <p>You can reach us at any time. Our team provides you with work flexibility by providing all our services 24/7. Not only that, outsourcing your WordPress services will help you to reach your business goals and adapt to the changes swiftly. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="content_three">
                <Row>
                    <Col style={{ margin: "auto" }}>
                        <img src={process.env.PUBLIC_URL + "/Assets/services/Group7.svg"} alt="logo" />
                    </Col>
                    <Col>
                        <div className="tex_word_wp">
                            <h2>Get your WordPress development services today!</h2>
                            <p>At Fyndora, we offer several professional WordPress development services. We try to focus on every problem individually and understand the project’s complexities. Our professional teams work very hard to deliver our clients highly optimised and SEO-smart WordPress services before the given deadlines. Our team is dedicated to providing you with a seamless and glitch-free WordPress website at a highly affordable price. So, what are you waiting for? Choose Fyndora as your WordPress development company. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                    <Container>
                        <Row style={{marginTop:"40px"}}>
                            <Col className="bx_wrapper"><h2>Why we are an ideal choice for you?</h2></Col>
                            <Col className="bx_wrapper"><h5>At Fyndora, you get the solutions to all your WordPress related problems, such as</h5></Col>
                        </Row>
                        <Row>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/1circle.png"} alt="logo" />
                               <div><h4>Customised WordPress development</h4>
                                <p>Our expert professionals help you create and develop a customised WordPress website based on your needs and preferences at a very affordable cost. We help you in extending your website’s capabilities using API integrations. </p>
                                </div>
                            </Col>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/2circle.png"} alt="logo" />
                               <div> <h4>WordPress design solutions</h4>
                                <p>At Fyndora, we provide you with your WordPress website's best functionality and appearance. We help our clients in developing scalable and engaging themes in innovative ways.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/3circle.png"} alt="logo" />
                               <div> <h4>PSD to WordPress conversion</h4>
                                <p>Our expert professionals at Fyndora help you convert all your PSD files into a high-end functioning WordPress website. We promise to provide a bug-free, fast, and responsive PSD to WordPress conversion of your website.</p>
                                </div>
                            </Col>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/4circle.png"} alt="logo" />
                               <div> <h4>WordPress plugin development</h4>
                                <p>We understand the importance of diverse business needs. Hence, to cater to them, we follow the best practices to integrate the plugins and provide a wide range of functionalities to your WordPress website.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/5circle.png"} alt="logo" />
                               <div> <h4>WordPress bug fixation</h4>
                                <p>With years of expertise in the field, Fyndora’s professionals can easily fix all the bugs associated with your WordPress website and provide you with a seamless and glitch-free experience. Our team constantly works on testing the functionality and quality of your WordPress website to ensure its optimum performance.</p>
                                </div>
                            </Col>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/6circle.png"} alt="logo" />
                               <div> <h4>WordPress migration</h4>
                                <p>Technically, WordPress migration sounds very complex. However, you don’t need to worry about that. Our IT experts can easily switch your website host without losing any of your website data. We carry on the entire migration process smoothly and seamlessly.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </Container>
            <Container fluid className="content_four">
                <Row>
                    <Col>
                        <div className="tex_word_wp_Four">
                          <div style={{display:"flex"}}>
                            <div style={{width:"48%",marginRight:"20px"}}>
                                <h2>Consultation</h2>
                                <i class="fa fa-quote-right quotesbx" aria-hidden="true"></i>
                                <p>Along with our IT services, Fyndora provides the best possible IT solutions and consultations for all your WordPress-related problems. We give you the best advice to achieve your targeted goals.</p>
                            </div>
                            <div style={{width:"48%"}}>
                                <h2>Maintenance and Upgradation</h2>
                                <i class="fa fa-quote-right quotesbx" aria-hidden="true"></i>
                                <p>At Fyndora, we provide our clients with reliable assistance in maintaining and upgrading their WordPress websites. We help our clients to maintain and upgrade their WordPress websites in a hassle-free way</p>
                            </div>
                          </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Client />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default Wordpress;