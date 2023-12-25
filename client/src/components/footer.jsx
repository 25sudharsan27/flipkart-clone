import axios from 'axios';
import React,{useState,useEffect} from 'react';


function Footer(){
    return(
        <div id="footer">
            <div id="about">
                <h1 id="abouthead">ABOUT</h1>
                <div id="abouttext1">
                <h2 id="abouttext">SUDHARSAN B</h2>
                <h2 id="abouttext">B TECH CSE</h2>
                <h2 id="abouttext">2nd YEAR</h2>
                <h2 id="abouttext">LPU PUNJAB</h2>
                </div>
            </div>
            <div id="line"></div>
            <div id="links">
                <a href="#"><img id="abimg" src="https://icons8.com/icon/AZOZNnY73haj/github"  alt="" /></a>
            </div>
        </div>
    )
}

export default Footer;