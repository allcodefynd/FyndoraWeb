import React from "react";
import Banner from "./Banner/Banner";
import BannerSecond from "./BannerDownSecond/bannersecond";
import Client from "./Client/Client";
import Footer from "./Footer/footer";
import GetInTouch from "./GetinTouch/GetInTouch";
import Header from "./header/Header";
import Testimonial from "./Testimonials/Testimonial";
import TopHeaderInfo from "./topHeadInfo/TopHeaderInfo";

function Home(){
    return(
        <>
            <TopHeaderInfo></TopHeaderInfo>
            <Header></Header>
            <Banner/>
            <BannerSecond></BannerSecond>
            <GetInTouch/>
            <Testimonial/>
            <Client/>
            <Footer/>
        </>
    )
}
export default Home;