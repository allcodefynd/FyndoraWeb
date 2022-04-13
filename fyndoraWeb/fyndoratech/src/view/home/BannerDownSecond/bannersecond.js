import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import GetPartner from "../GetPartner/GetPartner";
import Technology from "../Technology/Technology";



function BannerSecond() {

    return (
        <>
            <Container>
                <Row className="bnnerSecond_bx">
                    {/* <Col>
                        <img src={process.env.PUBLIC_URL + "/Assets/computerDesign.svg"} alt="logo" />
                    </Col>*/}
                    <Col style={{boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",marginTop:"30px"}}>
                        <h2 style={{ textAlign: "center",marginTop:"30px" }}>Who Are We?</h2>
                        <span className="content_bar"></span>
                        <p style={{textAlign:"center"}}>Investment in innovation is the need of the hour in this increasingly digitised world. Our strategists and<br></br> innovation experts help drive each project, allowing businesses to grow. By leveraging our expertise in IT,<br></br> firms can reinvent their businesses to create exceptional, sustainable value from their investments</p>
                    </Col> 
                </Row>
                <Row className="bannerSecond_bx">
                    <Col className="order1" style={{ margin: "auto" }}>
                        <h2 style={{ textAlign: "center" }}>Recruitment</h2>
                        <span className="content_bar"></span>
                        <p>Quickly build an in-house team of experts by delegating recruitment activities. From subordinate to the top post, we find you the ideal professional to bolster your workforce. Our competitive recruitment assessments are designed to help you create the perfect team. With our extensive national and international networks, our workforce solutions are designed to assist you in identifying the top talent across industries and locations. From staffing to retention, we provide acomprehensive list of services in the field to guide you through the entire journey.
                        </p>
                    </Col>
                    <Col className="order2">
                        <img src={process.env.PUBLIC_URL + "/Assets/requirtment.svg"} alt="logo" />
                    </Col>
                </Row>
                <Row className="bannerSecond_bx">
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/Assets/development.svg"} alt="logo" />
                    </Col>
                    <Col>
                        <h2 style={{ textAlign: "center" }}>Development</h2>
                        <span className="content_bar"></span>
                        <p>Development services that will re-build your digital presence. Our industry insights and cross-sector expertise provide you with a range of development services designed to create a professional image. From smart customization to full-cycle development, our team of front-end developers, back-end developers, engineers, mobile app developers, and analysts helps create a dynamic user experience.</p>
                    </Col>
                </Row>
            </Container>
            <GetPartner />
            <Container>
                <Row >
                    <h2 style={{ textAlign: "center",marginTop:"20px" }}>Igniting Brands via Effective Development Solutions</h2>
                    <span className="content_bar"></span>
                    <p style={{ textAlign: "center" }}>We offer an extensive range of services from Magento development, Laravel development, Shopify development, Php development, WordPress development, React native development, Flutter development, Android/iOS development and UI/UX. From web development to e-commerce store development, our services are designed to help you excel.</p>
                    <Row style={{ margin: "auto" }}>
                        <Col>
                            <div className="wrapper_bx"><img src={process.env.PUBLIC_URL + "/Assets/ic_1.png"} alt="logo" />
                                <h3>Web Development</h3>
                                <p>Supercharge your digital presence and website to attract more clients. Our interactive elements, fully-optimised modern design, and quick turnaround time help us customise sites based on individual business needs.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="wrapper_bx"><img src={process.env.PUBLIC_URL + "/Assets/ic_2.png"} alt="logo" />
                                <h3>Design and Mark Up</h3>
                                <p>Aesthetics and functionality make up a good website. A well-functioning website will not be able to attract clients if it has a monotonous look. Our creative team customises each website with persuasive texts and an eye-catching layout optimised for a smooth user experience. </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="wrapper_bx"><img src={process.env.PUBLIC_URL + "/Assets/ic_3.png"} alt="logo" />
                                <h3>Theme Integration</h3>
                                <p>Our team of experts provides a powerful and distinctive theme integration that will lend premium features to your website without subtracting from its convenience.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="wrapper_bx"><img src={process.env.PUBLIC_URL + "/Assets/ic_4.png"} alt="logo" />
                                <h3>ECommerce</h3>
                                <p>Integrate an exceptional e-commerce store with our Magento expertise and boost the user experience and customer engagement with unique web apps through our Laravel development services. We also help you launch your brand and products on a customised Shopify store.</p>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Container fluid className="mobile_wrapper">
                <Container>
                    <Row>
                        <Col style={{ textAlign: "center", padding: "10px" }}>
                            <img src={process.env.PUBLIC_URL + "/Assets/mobile_mockup.png"} alt="logo" />
                        </Col>
                        <Col style={{ textAlign: "center", margin: "auto" }}>
                            <h2>
                                Mobile Application Development, turn on your ideas to Apps
                            </h2>
                            <p>See your business idea transformed into a feature-rich, scalable mobile application by our team of professionals. We will build your app from scratch and deliver a bug-free, user-friendly application at a competitive price. Our after-completion support will ensure you get the best value for your money by regularly checking the app's performance. </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Technology />

        </>
    )
}

export default BannerSecond;