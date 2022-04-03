import React from "react";
import {Container, Row} from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import WorkProcess from "../WorkProcess/WorkProcess";

function Technology(){
    const optionstech = {
        loop:true,
        autoplay:true,
        margin:10,
        navText:false,
        dots:false,
        responsive:{
            0:{
                items:6
            },
            600:{
                items:8
            },
            1000:{
                items:15
            }
        }
    };
    return(
        <>
            <Container>
                <Row className="bannerSecond_bx">
                        <h2 style={{ textAlign: "center" }}>Our Technologies</h2>
                        <span className="content_bar"></span>
                </Row>
                <Row>
                    <OwlCarousel className='owl-theme' {...optionstech} loop margin={10} nav>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/10.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/12.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/13.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/14.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/15.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/16.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/1.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/2.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/3.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/4.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/5.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/6.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/7.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/8.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/9.png"} alt="logo" />
                    </div>
                    <div class='item'>
                        <img src={process.env.PUBLIC_URL + "/Assets/tech/16.png"} alt="logo" />
                    </div>
                    </OwlCarousel>
                </Row>
                <Row>
                     <OwlCarousel className='owl-theme' {...optionstech} loop margin={10} nav>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/1.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/2.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/3.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/4.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/5.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/6.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/7.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/8.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/9.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/10.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/11.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/12.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/13.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/14.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/15.png"} alt="logo" />
                        </div>
                        <div class='item'>
                            <img src={process.env.PUBLIC_URL + "/Assets/tech/16.png"} alt="logo" />
                        </div>
                    </OwlCarousel>
                </Row>
            </Container>
            <WorkProcess/>
        </>
    )
}

export default Technology;