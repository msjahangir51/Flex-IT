import React, { useEffect } from 'react'
import "./Home.css";
import Navbar from './../Navbar/Navbar';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import col from "../../Images/undraw_programming_re_kg9v.svg";
import col2 from "../../Images/undraw_filter_re_sa16.svg";
import ServicesBody from '../Services/ServicesBody';
import AboutBody from '../AboutUs/AboutBody';
function Home() {
  useEffect(()=>{
    document.title ="Flex-IT - Home"
  })
  return (
    <>
    <div className='Home'>
        <Navbar/>
        <div className="rows">
          <div className="col">
              <div className="social">
                <a href="#"><FaFacebook/></a>
                <a href="#"><FaYoutube/></a>
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaTwitter/></a>
              </div>
              <h4>IT SOLUTIONS</h4>
              <h1>Providing The Best Services & IT <span>Solutions</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto molestiae soluta molestias impedit sunt, reprehenderit hic expedita nesciunt dignissimos </p>
              <a href='#' className='btn'>Start Now</a>
          </div>
          <div className="col">
            <img src={col} />
          </div>
        </div>
    </div>
    <ServicesBody/>
    <AboutBody/>
    </>
  )
}

export default Home