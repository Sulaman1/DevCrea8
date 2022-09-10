import Head from 'next/head'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import pic from '../img/cryptopunk1.png';
import styles from '../styles/Main.module.css'
import {useEffect} from 'react'
import Script from 'next/script'
// var $ = require("jquery");
// import 'bootstrap/dist/css/bootstrap.css';
// import check from "../public/static/main"


export default function MyNavbar() {
    
    function openNav() {
        document.getElementById("myNav").style.display = "block";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.display = "none";
      }
    
    
    return(
<>
<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"/>
    <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"/>



<div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
  <div className="overlay-content">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</div>

<span className='mystyle' onClick={openNav}>&#9776;</span>


</>
    )
}