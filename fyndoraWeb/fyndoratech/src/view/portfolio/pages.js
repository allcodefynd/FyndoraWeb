import React, { useState, useEffect } from "react";
import { Container,Row } from "react-bootstrap";
import {
    useParams,
} from "react-router-dom";
import Footer from "../home/Footer/footer";
import GetInTouch from "../home/GetinTouch/GetInTouch";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import PortfolioData from './portfolio.json';

const Page = (props) => {

    let { id } = useParams();
    const [portfolio, setPortfolio] = useState("");

    useEffect(() => {
        let portfolioD = PortfolioData.find((page) => page.id === parseInt(id));
        console.log();
        if(portfolioD){
            setPortfolio(portfolioD)
        }
        else{
            return "getBackSOon";
        }
    }, []);
    console.log(portfolio, "hiii")
    return (
        <>
            <TopHeaderInfo/>
            <Header/>
            {/* <>{portfolio.title}</> */}
        <Container>
            <Row>
                <div className="portfolio_sing_banner">
                    <h3>{portfolio.title}</h3>
                    <img src={process.env.PUBLIC_URL + portfolio.banner} alt="logo" />     
                    <p>{portfolio.description}</p>               
                    <p>{portfolio.description2}</p>             
                    <h3>APP SCREENSHOT</h3>
                </div>
                    <div class="app-screenshot">
                        <img src={process.env.PUBLIC_URL + portfolio.workscreen} alt="logo" />    
                </div>  
            </Row>
        </Container>
        <GetInTouch/>
        <Footer/>
        </>
    )
}

export default Page