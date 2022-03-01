import React from "react";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import {Container, Row, Col} from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import './portfolio.css'
import PortfolioData from './portfolio.json';
import Footer from "../home/Footer/footer";
import GetInTouch from "../home/GetinTouch/GetInTouch";
import { Link } from "react-router-dom";

const Portfolio = () =>{
    const optionstech = {
        items: 1,
        loop:true,
        autoplay:true,
        margin:10,
        navText:false,
        dots:false,
    };
    // const DataExport = () =>{
    //     console.log(PortfolioData);
    // }
    return(
        <>
            <TopHeaderInfo/>
            <Header/>
            <Container fluid className="about-us-banner">
                <img src={process.env.PUBLIC_URL + "/Assets/portfolio_bg.jpg"}/>
            </Container>
            <Container>
                <Row style={{textAlign:"center",margin:"40px"}}>
                    <h2>OUR WORKS</h2>
                </Row>
            </Container>
            {
                PortfolioData.map(portfolio => (
                    <Container>
                    <Row className="portfolio_wrapper">
                    <Col className="portfolio_web_img">
                        <OwlCarousel className='owl-theme' {...optionstech} loop margin={10} nav>
                                <div class='item'>
                                    <img src={process.env.PUBLIC_URL + portfolio.image} alt="logo" />
                                </div>
                                <div class='item'>
                                    <img src={process.env.PUBLIC_URL + portfolio.image1} alt="logo" />
                                </div>
                                <div class='item'>
                                    <img src={process.env.PUBLIC_URL + portfolio.image3} alt="logo" />
                                </div>
                        </OwlCarousel>
                    </Col>
                    <Col className="portfolio_cont">
                      <h3>{portfolio.title}</h3>
                      <p>{portfolio.description}</p>
                      <p>Serial No : -{portfolio.id}</p>
                      <Link className="readMore_wrapper" to={"/pages/"+portfolio.id +"/"+portfolio.slug} >Read More &#8594;</Link>
                    </Col>
                  </Row>
                  </Container>
                ))
            }
            <GetInTouch/>            
    <Footer/>
        </>
    )
}

export default Portfolio;