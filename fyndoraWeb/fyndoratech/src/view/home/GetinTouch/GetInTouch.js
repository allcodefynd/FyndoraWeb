import React, { useState } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { v4 as uuid } from "uuid";
import firebase from "../../../Firebase"
import validator from 'validator';
import swal from 'sweetalert';
import './getintouch.css';
function GetInTouch() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [mobErr, setMobError] = useState("");
    const [emailErr, setEmailError] = useState("");

    const contactForm = firebase.database().ref('contactMessages');


    const handleSubmit = (e) => {
        e.preventDefault();
        saveMessages(fname, lname, number, email, message);
    }
    const saveMessages = (fname, lname, number, email, message) => {
        var newContactFormRef = contactForm.push();
        newContactFormRef.set({
            fname: fname,
            lname: lname,
            number: number,
            email: email,
            message: message
        });
        swal({
        title: "Your messsage sent",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: "success",
        dangerMode: false,});
        EmptyField();
    }
function EmptyField(){
        setFname("")
        setLname("")
        setNumber("")
        setEmail("")
        setMessage("")
}
    return (
        <>
            <Container fluid className="">
                <Container>
                    <Row>
                        <Col>
                            <div className="getInContent">
                                <h2></h2>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="getintouch_list_bx">
                <Container>
                    <Row>
                        <Col className="getIntouch_list">
                                <h2>Get In Touch</h2>                           
                                <h4>Submit your details, and our client-support team will reach out to you within 24 hours</h4>
                        </Col>
                        <Col>
                            <div className="formWrapper">
                                <form onSubmit={handleSubmit}>
                                    <input type="text" id="fname" name="fname" value={fname} placeholder="First Name" onChange={(e) => setFname(e.target.value)} required/><br></br>
                                    <input type="text" id="lname" name="lname" value={lname} placeholder="Last Name" onChange={(e) => setLname(e.target.value)} required/><br></br>
                                    <input type="phone" id="lname" name="lname" value={number}  maxlength="10"  onkeyup='this.value=this.value.replace(/[^\d]/,"")' placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)} required/><br></br>
                                    <input type="email" id="lname" name="lname" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/><br></br>
                                    <textarea type="text" id="lname" name="lname" value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)} /><br></br>
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