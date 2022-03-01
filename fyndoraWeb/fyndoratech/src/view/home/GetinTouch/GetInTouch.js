import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { v4 as uuid } from "uuid";
import FireBase from "../../../../Firebase";

function GetInTouch() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("hiiis")
        console.log(fname,lname,number,email,message)
    }

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
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" id="fname" name="fname" value={fname} placeholder="First Name" onChange={(e)=>setFname(e.target.value)}/><br></br>
                                        <input type="text" id="lname" name="lname" value={lname} placeholder="Last Name" onChange={(e)=>setLname(e.target.value)}/><br></br>
                                        <input type="text" id="lname" name="lname" value={number} placeholder="Phone Number" onChange={(e)=>setNumber(e.target.value)}/><br></br>
                                        <input type="text" id="lname" name="lname" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br></br>
                                        <textarea type="text" id="lname" name="lname" value={message} placeholder="Message" rows="4" cols="50" onChange={(e)=>setMessage(e.target.value)}/><br></br>
                                        <button type="submit" className="formSubmit">Submit</button>
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