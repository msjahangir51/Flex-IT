import React from 'react'
import "./About.css";

import { FaAward } from "react-icons/fa6";

import { SiWorldhealthorganization } from "react-icons/si";

import { FaGamepad } from "react-icons/fa";

import { MdMiscellaneousServices } from "react-icons/md";

import img from "../../Images/undraw_content_team_re_6rlg.svg"

function AboutBody() {
  return (
    <div className='AboutusBODY'>
        <div className="row">
            <div className="col">
            <h4 className='heading'>ABOUT US</h4>
            <h1>Trusted By Worldwide Clients Since <span>1980.</span></h1>
            <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate harum reiciendis vero beatae aliquid? Odio, porro quidem at ipsam aspernatur </p>
                <div className="cols">
                
                <div className="row1">
                    <div><FaAward/></div>
                    <div>
                        <h4>First On Field</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima.</p>
                    </div>
                </div>

                <div className="row1">
                    <div><SiWorldhealthorganization/></div>
                    <div>
                        <h4>Easy To Reach</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima.</p>
                    </div>
                </div>

                <div className="row1">
                    <div><FaGamepad/></div>
                    <div>
                        <h4>Worldwide Services</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima.</p>
                    </div>
                </div>
                <div className="row1">
                    <div><MdMiscellaneousServices/></div>
                    <div>
                        <h4>24/7 Support</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima.</p>
                    </div>
                </div>
            </div>

            <a className='btn'>Get In Touch</a>
            </div>

            <div className="col">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutBody