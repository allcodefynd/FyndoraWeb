import React from "react";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import {Container, Row, Tab, Col, Nav, Sonnet, } from 'react-bootstrap'
import './career.css'
import GetInTouch from "../home/GetinTouch/GetInTouch";
import Footer from "../home/Footer/footer";
import CopyrightFooter from "../home/Footer/CopyrightFooter";
const Career = () =>{
    return(
        <>
            <TopHeaderInfo/>
            <Header/>
            <Container fluid className="careerbackground">
                <Container fluid>
                    <img src={process.env.PUBLIC_URL + "/Assets/career1.jpg"} className="" style={{width:"100%"}} alt="logo" />
                </Container>
            </Container>
            <Container className="headerCareer">
                <h1><strong>Find Perfect Jobs For You</strong></h1>
                <Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills"  className="flex-column menu_wrapper">
                            <Nav.Item>
                               <Nav.Link eventKey="four">Node Js</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link eventKey="first">Content Writer</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link eventKey="second">Digital Marketing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Buisness Analytics</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link eventKey="five">Node Js</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link eventKey="six">Content Writer</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                               <Nav.Link eventKey="seven">Digital Marketing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="eight">Buisness Analytics</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="nine">Buisness Analytics</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content className="department_content">
                            <Tab.Pane eventKey="four">
                                <h3>Node Js</h3>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>Must be able to develop application modules independently and fix any bugs promptly.</li>
                                    <li>Do unit testing for the development work carried out</li>
                                    <li>Act as a mentor to the junior resources and provide technical guidance.</li>
                                    <li>Troubleshoot problems and provide solutions.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                                <h4>Requirements and Qualifications:</h4>
                                <ul>
                                    <li>Good knowledge of Node.js, Express.js, React (or Angular).</li>
                                    <li>Need clear understanding of JavaScript and Typescript.</li>
                                    <li>Sound understanding of MVC and design patterns.</li>
                                    <li>Excellent grasp of data structures and designing and developing ReST APIs.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                            </Tab.Pane>                       
                            <Tab.Pane eventKey="first">
                                <h3>Content Writer</h3>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>Must be able to develop application modules independently and fix any bugs promptly.</li>
                                    <li>Do unit testing for the development work carried out</li>
                                    <li>Act as a mentor to the junior resources and provide technical guidance.</li>
                                    <li>Troubleshoot problems and provide solutions.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                                <h4>Requirements and Qualifications:</h4>
                                <ul>
                                    <li>Good knowledge of Node.js, Express.js, React (or Angular).</li>
                                    <li>Need clear understanding of JavaScript and Typescript.</li>
                                    <li>Sound understanding of MVC and design patterns.</li>
                                    <li>Excellent grasp of data structures and designing and developing ReST APIs.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                            </Tab.Pane>                       
                            <Tab.Pane eventKey="second">
                                <h3>Digital Marketing</h3>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>Must be able to develop application modules independently and fix any bugs promptly.</li>
                                    <li>Do unit testing for the development work carried out</li>
                                    <li>Act as a mentor to the junior resources and provide technical guidance.</li>
                                    <li>Troubleshoot problems and provide solutions.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                                <h4>Requirements and Qualifications:</h4>
                                <ul>
                                    <li>Good knowledge of Node.js, Express.js, React (or Angular).</li>
                                    <li>Need clear understanding of JavaScript and Typescript.</li>
                                    <li>Sound understanding of MVC and design patterns.</li>
                                    <li>Excellent grasp of data structures and designing and developing ReST APIs.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                            </Tab.Pane>                       
                            <Tab.Pane eventKey="third">
                                <h3>Buisness Analytics</h3>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>Must be able to develop application modules independently and fix any bugs promptly.</li>
                                    <li>Do unit testing for the development work carried out</li>
                                    <li>Act as a mentor to the junior resources and provide technical guidance.</li>
                                    <li>Troubleshoot problems and provide solutions.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                                <h4>Requirements and Qualifications:</h4>
                                <ul>
                                    <li>Good knowledge of Node.js, Express.js, React (or Angular).</li>
                                    <li>Need clear understanding of JavaScript and Typescript.</li>
                                    <li>Sound understanding of MVC and design patterns.</li>
                                    <li>Excellent grasp of data structures and designing and developing ReST APIs.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                            </Tab.Pane>                       
                            <Tab.Pane eventKey="five">
                                <h3>Node Js</h3>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>Must be able to develop application modules independently and fix any bugs promptly.</li>
                                    <li>Do unit testing for the development work carried out</li>
                                    <li>Act as a mentor to the junior resources and provide technical guidance.</li>
                                    <li>Troubleshoot problems and provide solutions.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                                <h4>Requirements and Qualifications:</h4>
                                <ul>
                                    <li>Good knowledge of Node.js, Express.js, React (or Angular).</li>
                                    <li>Need clear understanding of JavaScript and Typescript.</li>
                                    <li>Sound understanding of MVC and design patterns.</li>
                                    <li>Excellent grasp of data structures and designing and developing ReST APIs.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                            </Tab.Pane>                       
                            <Tab.Pane eventKey="six">
                                <h3>Content Writer</h3>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>Must be able to develop application modules independently and fix any bugs promptly.</li>
                                    <li>Do unit testing for the development work carried out</li>
                                    <li>Act as a mentor to the junior resources and provide technical guidance.</li>
                                    <li>Troubleshoot problems and provide solutions.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                                <h4>Requirements and Qualifications:</h4>
                                <ul>
                                    <li>Good knowledge of Node.js, Express.js, React (or Angular).</li>
                                    <li>Need clear understanding of JavaScript and Typescript.</li>
                                    <li>Sound understanding of MVC and design patterns.</li>
                                    <li>Excellent grasp of data structures and designing and developing ReST APIs.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                            </Tab.Pane>                       
                            <Tab.Pane eventKey="seven">
                                <h3>Digital Marketing</h3>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>Must be able to develop application modules independently and fix any bugs promptly.</li>
                                    <li>Do unit testing for the development work carried out</li>
                                    <li>Act as a mentor to the junior resources and provide technical guidance.</li>
                                    <li>Troubleshoot problems and provide solutions.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                                <h4>Requirements and Qualifications:</h4>
                                <ul>
                                    <li>Good knowledge of Node.js, Express.js, React (or Angular).</li>
                                    <li>Need clear understanding of JavaScript and Typescript.</li>
                                    <li>Sound understanding of MVC and design patterns.</li>
                                    <li>Excellent grasp of data structures and designing and developing ReST APIs.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                            </Tab.Pane>                       
                            <Tab.Pane eventKey="eight">
                                <h3>Buisness Analytics</h3>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>Must be able to develop application modules independently and fix any bugs promptly.</li>
                                    <li>Do unit testing for the development work carried out</li>
                                    <li>Act as a mentor to the junior resources and provide technical guidance.</li>
                                    <li>Troubleshoot problems and provide solutions.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                                <h4>Requirements and Qualifications:</h4>
                                <ul>
                                    <li>Good knowledge of Node.js, Express.js, React (or Angular).</li>
                                    <li>Need clear understanding of JavaScript and Typescript.</li>
                                    <li>Sound understanding of MVC and design patterns.</li>
                                    <li>Excellent grasp of data structures and designing and developing ReST APIs.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                            </Tab.Pane>                       
                            <Tab.Pane eventKey="nine">
                                <h3>Buisness Analytics</h3>
                                <h4>Roles and Responsibilities:</h4>
                                <ul>
                                    <li>Must be able to develop application modules independently and fix any bugs promptly.</li>
                                    <li>Do unit testing for the development work carried out</li>
                                    <li>Act as a mentor to the junior resources and provide technical guidance.</li>
                                    <li>Troubleshoot problems and provide solutions.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                                <h4>Requirements and Qualifications:</h4>
                                <ul>
                                    <li>Good knowledge of Node.js, Express.js, React (or Angular).</li>
                                    <li>Need clear understanding of JavaScript and Typescript.</li>
                                    <li>Sound understanding of MVC and design patterns.</li>
                                    <li>Excellent grasp of data structures and designing and developing ReST APIs.</li>
                                    <li>Conduct and participate in project planning & scheduling, design discussions, and provide assistance during testing.</li>
                                    <li>Willing to learn and adopt new technologies in a short period of time as required by the project.</li>
                                    <li>Will require to produce technical documentation as the requirements of the project.</li>
                                </ul>
                            </Tab.Pane>                       
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                </Row>
            </Container>
            <GetInTouch/>
            <Footer/>
        </>
    )
}

export default Career