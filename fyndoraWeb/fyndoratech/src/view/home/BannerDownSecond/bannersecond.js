import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import GetPartner from "../GetPartner/GetPartner";
import Technology from "../Technology/Technology";



function BannerSecond() {

    return (
        <>
            <Container>
                <Row className="bnnerSecond_bx">
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/Assets/computerDesign.svg"} alt="logo" />
                    </Col>
                    <Col>
                        <h2 style={{ textAlign: "center" }}>InDIAn Technology</h2>
                        <span className="content_bar"></span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                </Row>
                <Row className="bannerSecond_bx">
                    <Col className="order1" style={{ margin: "auto" }}>
                        <h2 style={{ textAlign: "center" }}>Recruitment</h2>
                        <span className="content_bar"></span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                </Row>
                </Container>
                <GetPartner/>
                <Container>
                <Row >
                    <h2 style={{ textAlign: "center" }}>Igniting Brands via Effective Development Solutions</h2>
                    <span className="content_bar"></span>
                    <p style={{ textAlign: "center" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <Row  style={{margin:"auto"}}>
                        <Col>
                            <div className="wrapper_bx"><img src={process.env.PUBLIC_URL + "/Assets/ic_1.png"} alt="logo" />
                                <h3>Web Development</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="wrapper_bx"><img src={process.env.PUBLIC_URL + "/Assets/ic_2.png"} alt="logo" />
                                <h3>Design and Mark Up</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="wrapper_bx"><img src={process.env.PUBLIC_URL + "/Assets/ic_3.png"} alt="logo" />
                                <h3>Theme Integration</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="wrapper_bx"><img src={process.env.PUBLIC_URL + "/Assets/ic_4.png"} alt="logo" />
                                <h3>ECommerce</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
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
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. .
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Technology/>

        </>
    )
}

export default BannerSecond;