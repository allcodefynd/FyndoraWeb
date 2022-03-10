import React from "react";
import Home from '../home/Home';
import { Routes, Route } from "react-router-dom"
import WebApplication from "../Services/WebApplication";
import Wordpress from "../Services/Wordpress";
import Laravel from "../Services/Laravel";
import Php from "../Services/Php";
import Android from "../Services/Android";
import Magento from "../Services/Magento";
import Flutter from "../Services/Flutter";
import Ios from "../Services/Ios";
import Reactjs from "../Services/Reactjs";
import Angular from "../Services/Angular";
import WebsiteDesign from "../Services/WebsiteDesign";
import Hybrid from "../Services/Hybrid";
import PaymentGateway from "../Services/PaymentGateway";
import GraphicDesign from "../Services/GraphicDesign";
import FigmaDesign from "../Services/FigmaDesign";
import UiUx from "../Services/UiUx";
import Logo from "../Services/Logo";
import SocialMedia from "../Services/SocialMedia";
import AboutUs from "../about/AboutUs";
import ContactUs from "../contact/ContactUs";
import Portfolio from "../portfolio";
import Page from "../portfolio/pages";
import TermsCondition from "../termsAndCond/TermsCondition";
import Career from "../career/Career";
import Login from "../admin/Login";

function Router(){
  return(
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="wordpress" element={ <Wordpress/> } />
        <Route path="laravel" element={ <Laravel/> } />
        <Route path="php" element={ <Php/> } />
        <Route path="android" element={ <Android/> } />
        <Route path="magento" element={ <Magento/> } />
        <Route path="flutter" element={ <Flutter/> } />
        <Route path="ios" element={ <Ios/> } />
        <Route path="reactjs" element={ <Reactjs/> } />
        <Route path="angular" element={ <Angular/> } />
        <Route path="websiteDesign" element={ <WebsiteDesign/> } />
        <Route path="hybrid" element={ <Hybrid/> } />
        <Route path="payment-gateway" element={ <PaymentGateway/> } />
        <Route path="graphic-design" element={ <GraphicDesign/> } />
        <Route path="figma-design" element={ <FigmaDesign/> } />
        <Route path="ui-ux" element={ <UiUx/> } />
        <Route path="logo-design" element={ <Logo/> } />
        <Route path="social-media" element={ <SocialMedia/> } />
        <Route path="about-us" element={ <AboutUs/> } />
        <Route path="contact-us" element={ <ContactUs/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        <Route path="pages/:id/:slug" element={ <Page/> } />
        <Route path="career" element={ <Career/> } />
        <Route path="terms-and-Condition" element={ <TermsCondition/> } />
        <Route path="admin" element={ <Login/> } />
      </Routes>
    </>
  )
}

export default Router