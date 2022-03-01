import React from "react";
import { Row, Col, Container } from 'react-bootstrap'

function GetInTouch() {
    return (
        <>
            <Container fluid className="getinwrapper">
                <Container>
                    <Row>
                        <Col>
                            <div className="getInContent">
                                <h2>Get In Touch</h2>
                                <p>Please fill out the form to get in touch with our client-support <br></br> team, we will get back to you in 24 hours.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="getintouch_list_bx">
                    <Container>
                        <Row>
                            <Col className="getIntouch_list">
                                <p>NextPage IT Solutions, imperatively focus on development, optimization, and promotion of web-based products and applications. We thrive on delivering intuitive business solutions to our clients in order to get the best of breed competitive edge in the industry globally.s</p>
                                <ul>
                                    <li>On call enquiry assistance</li>
                                    <li>Project consulting by experts</li>
                                    <li>Detailed project estimations</li>
                                    <li>Detailed project estimations</li>
                                    <li>Detailed project estimations</li>
                                </ul>
                            </Col>
                            <Col>
                                <div className="formWrapper">
                                    <form action="/action_page.php">
                                        <input type="text" id="fname" name="fname" value="" placeholder="First Name" /><br></br>
                                        <input type="text" id="lname" name="lname" value="" placeholder="Last Name" /><br></br>
                                        <input type="text" id="lname" name="lname" value="" placeholder="Phone Number" /><br></br>
                                        <input type="text" id="lname" name="lname" value="" placeholder="Email" /><br></br>
                                        <input type="text" id="lname" name="lname" value="" placeholder="Message" /><br></br>
                                        <button className="formSubmit">Submit</button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </Container>
        </>
    )
}

export default GetInTouch;