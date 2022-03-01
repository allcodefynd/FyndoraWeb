import React from "react";
import CopyrightFooter from "../home/Footer/CopyrightFooter";
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import '../Services/Services.css'

function WebApplication(){
    return(
        <>
        <TopHeaderInfo/>    
        <Header/>
            <h1>WebApplication</h1>
            <Footer/>            
        </>
    )
}
export default WebApplication;