import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './login.css'

const Login = () =>{
    function submitLogin(){

    }
    return(
        <>
            <Container>
                <Row>
                    <Col className='login_wrapper'>
                    <h3>Login</h3>
                    <form onSubmit={submitLogin}>
                        <label for="fname">Username:</label><br/>
                        <input type="text" id="fname" name="fname" /><br/>
                        <label for="lname">Password</label><br/>
                        <input type="text" id="lname" name="lname" /><br/>
                        <input type="submit" value="Submit" />
                    </form>
                    </Col>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/Assets/computerAnimation.png"} alt="logo" style={{width:"100%"}}/>   
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default Login;