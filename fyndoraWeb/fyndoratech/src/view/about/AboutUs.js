import React from "react";
import { Container,Image,Row,Col } from "react-bootstrap";
import Footer from "../home/Footer/footer";
import GetInTouch from "../home/GetinTouch/GetInTouch";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import './about-us.css'

function AboutUs(){
    return(
        <>
            <TopHeaderInfo/>
            <Header/>
            <Container fluid className="about-us-banner">
                <img src={process.env.PUBLIC_URL + "/Assets/about-us.jpg"}/>
                <div className="content-wrapper">
                    <h2>ABOUT US</h2>
                </div>
            </Container>
            <Container>
                <Row>
                    <div className="about-us_first">
                        <h2>-Overview-</h2>
                        <p>Wipro Limited (NYSE: WIT, BSE: 507685, NSE: WIPRO) is a leading global information technology, consulting and business process services company. We harness the power of cognitive computing, hyper-automation, robotics, cloud, analytics and emerging technologies to help our clients adapt to the digital world and make them successful. A company recognized globally for its comprehensive portfolio of services, strong commitment to sustainability and good corporate citizenship, we have over 220,000 dedicated employees serving clients across six continents. Together, we discover ideas and connect the dots to build a better and a bold new future.</p>
                    </div>
                </Row>
                <Row>
                    <div className="about-us_first">
                        <h2>Spirit of Fyndora</h2>
                        <p>The Spirit of Wipro is the core of Wipro. These are our Values. It is about who we are. It is our character. It is reflected consistently in all our behavior. The Spirit is deeply rooted in the unchanging essence of Wipro. But it also embraces what we must aspire to be. It is the indivisible synthesis of the four values. The Spirit is a beacon. It is what gives us direction and a clear sense of purpose. It energizes us and is the touchstone for all that we do.</p>
                    </div>
                </Row>
                <Row>
                    <div className="about-us_first">
                        <h2>The Idea</h2>
                        <Row>
                            <div className="about_center">
                                <img src={process.env.PUBLIC_URL + "/Assets/idea.png"} style={{width:"30%",textAlign:"center",margin:"auto"}}/>
                            </div>
                        </Row>
                        <p>The Spirit of Wipro is the core of Wipro. These are our Values. It is about who we are. It is our character. It is reflected consistently in all our behavior. The Spirit is deeply rooted in the unchanging essence of Wipro. But it also embraces what we must aspire to be. It is the indivisible synthesis of the four values. The Spirit is a beacon. It is what gives us direction and a clear sense of purpose. It energizes us and is the touchstone for all that we do.</p>
                    </div>
                </Row>
                <Row>
                    <div className="about-us_first">
                        <h2>GlobalLogic Company Facts At-A-Glance</h2>
                        <p>For over 20 years, GlobalLogic has partnered with businesses across every major industry to make amazing products and connect the dots between people, products, and business opportunities. In 2021, GlobalLogic was acquired by Hitachi Ltd. GlobalLogic’s capabilities, combined with Hitachi’s Lumada, enables us to deploy Hitachi’s extensive library of digital solutions to the global market and to help customers and societies solve their issues through Agile application development in the cloud.</p>
                        <ul>
                            <li>Founded in 2000</li>
                            <li>Acquired by Hitachi Ltd. in 2021</li>
                            <li>23600+ employees in 14 countries</li>
                            <li>400+ active clients</li>
                            <li>70+ private label customer labs</li>
                            <li>30 engineering centers</li>
                            <li>8 design studios</li>
                            <li>12 sales offices</li>
                            <li>350+ UX/UI designers & developers through Method, our experience design arm</li>
                        </ul>
                    </div>
                </Row>
                <Row>
                    <Col className="about-us_first">
                        <h2>Our Mission:</h2>
                        <p>The Spirit of Wipro is the core of Wipro. These are our Values. It is about who we are. It is our character. It is reflected consistently in all our behavior. The Spirit is deeply rooted in the unchanging essence of Wipro. But it also embraces what we must aspire to be. It is the indivisible synthesis of the four values. The Spirit is a beacon. It is what gives us direction and a clear sense of purpose. It energizes us and is the touchstone for all that we do.</p>
                    </Col>
                    <Col className="about-us_first">
                        <h2>Our Vision:</h2>
                        <p>The Spirit of Wipro is the core of Wipro. These are our Values. It is about who we are. It is our character. It is reflected consistently in all our behavior. The Spirit is deeply rooted in the unchanging essence of Wipro. But it also embraces what we must aspire to be. It is the indivisible synthesis of the four values. The Spirit is a beacon. It is what gives us direction and a clear sense of purpose. It energizes us and is the touchstone for all that we do.</p>
                    </Col>
                </Row>

            </Container>
            <Container>
                <Row>
                    <div className="about_center">
                        <img src={process.env.PUBLIC_URL + "/Assets/about_center.png"} style={{width:"60%",textAlign:"center",margin:"auto"}}/>
                    </div>
                </Row>
            </Container>
            <GetInTouch/>
            <Footer/>
        </>
    )
}

export default AboutUs