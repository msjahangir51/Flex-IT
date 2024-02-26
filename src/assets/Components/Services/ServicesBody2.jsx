import React, { useEffect } from 'react'

import "./Service.css"

import { FaLongArrowAltRight } from "react-icons/fa";

// import { FaLaptopCode } from "react-icons/fa6";

// import { GiDigitalTrace } from "react-icons/gi";

// import { BsFiletypeSass } from "react-icons/bs";

// import { MdOutlineSettingsApplications } from "react-icons/md";

// import { RiSeoFill } from "react-icons/ri";

// import { IoMdAnalytics } from "react-icons/io";

import ServiceData from "../../../../public/Service.json";


function ServicesBody2() {
  useEffect(()=>{
    document.title= "Services"
  })
  return (
    <div className='Services_Body'>
    <div className="cols">
      <div className="col">
      <h4>Services</h4>
      <h1>Services We Offer</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, mollitia.</p>
      </div>
    </div>

    
  <div className="rows">
    {
      ServiceData.map((item)=>{
        const {id,icons,Name,desc,link} = item;
        return(
          <div className='col' key={id}>
            <i className={icons}></i>
            <h2>{Name}</h2>
            <p>{desc}</p>
            <a href={link}>Read More <FaLongArrowAltRight/></a>

          </div>
        )
      })
    }
  </div>
</div>
  )
}

export default ServicesBody2