import React, { useEffect } from 'react'
import AboutBody from '../Components/AboutUs/AboutBody'
import Navbar from './../Components/Navbar/Navbar';


function Aboutus() {
  useEffect(()=>{
    document.title = "About us"
  })
  return (
    <>  
        <Navbar/>
        <AboutBody/>
    </>
  )
}

export default Aboutus