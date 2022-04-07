import React from "react"
import { Container,Row } from "react-bootstrap"
import OwlCarousel from 'react-owl-carousel';
import './getPartner.css'
function GetPartner (){
    const optionstech = {
        loop:true,
        autoplay:true,
        margin:10,
        navText:true,
        dots:false,
        responsive:{
            0:{
                items:6
            },
            600:{
                items:8
            },
            1000:{
                items:2.9
            }
        }
    };
    return(
        <>
            <Container fluid className="getPartner-wrapper">
                <Row>
                    <div>
                        <p>What do you get with us as your partner?</p>
                        <h2><strong>You get more than just a helping hand in all the <br></br> below-mentioned services.</strong></h2>
                    </div>
                    <div>
                    <Row>
                        <OwlCarousel className='owl-theme' {...optionstech} loop margin={10} nav>
                            <div class='item'>
                                <div className="card-wrapper">
                                    <div className="icon-bar"><img src={process.env.PUBLIC_URL + "/Assets/icon/2.png"}/></div>
                                    <h4>Looking for Consulting Services?</h4>
                                    <p>We get your organization where it needs to be through in-depth indusrty knowledge, technical expertise and best transformation approaches while upskilling your workforce.</p>
                                </div>
                                <div class="link-box">
                                    <a href="/services/consultancy-services" class="aug-conbtn btneffect">
                                        <span>Know More</span>
                                        <span><i class="fa fa-arrow-right"></i></span>
                                    </a>
                                </div>
                             </div>
                            <div class='item'>
                                <div className="card-wrapper">
                                     <div className="icon-bar"><img src={process.env.PUBLIC_URL + "/Assets/icon/1.png"}/></div>
                                    <h4>Looking for People?</h4>
                                    <p>With the right mix of technology and human, we help you to hire candidates from the lowest to the highest position who can contribute to your business goals and company ethos.</p>
                                </div>
                                <div class="link-box">
                                    <a href="/services/consultancy-services" class="aug-conbtn btneffect">
                                        <span>Know More</span>
                                        <span><i class="fa fa-arrow-right"></i></span>
                                    </a>
                                </div>
                             </div>
                            <div class='item'>
                                <div className="card-wrapper">
                                    <div className="icon-bar"><img src={process.env.PUBLIC_URL + "/Assets/icon/4.png"}/></div>
                                    <h4>Looking for Digital Transformation  & Business Agility?</h4>
                                    <p>Whether it’s Cloud, Agile, DevOps, SRE, or Big Data transformation, we help you build disruptive applications by leveraging cutting-edge digital technologies.</p>
                                </div>
                                <div class="link-box">
                                    <a href="/services/consultancy-services" class="aug-conbtn btneffect">
                                        <span>Know More</span>
                                        <span><i class="fa fa-arrow-right"></i></span>
                                    </a>
                                </div>
                             </div>
                            <div class='item'>
                                <div className="card-wrapper">
                                    <div className="icon-bar"><img src={process.env.PUBLIC_URL + "/Assets/icon/3.png"}/></div>
                                    <h4>Looking for Work?</h4>
                                    <p>Whether it’s on-site or remote work, we help you extend your job search and find the next big opportunity across sectors and regions.</p>
                                </div>
                                <div class="link-box">
                                    <a href="/services/consultancy-services" class="aug-conbtn btneffect">
                                        <span>Know More</span>
                                        <span><i class="fa fa-arrow-right"></i></span>
                                    </a>
                                </div>
                             </div>
                        </OwlCarousel>
                    </Row>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default GetPartner