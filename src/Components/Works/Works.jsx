import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {Link} from "react-scroll";


const Works = () => {
  
  return (
    
    <div className="works">
     <div className="awesome">
      <span>Work for all these</span>
      <span>Brands & Clients</span>
      <span>I have more  than 2 years of experiences & i have worked in many
        <br/> companies,delivered many project i'm also a freelance.

         <br/>and i've delivered over 45 projects to clients in freelancing
         
         <br/>I'm working on client's project from
         <br/>freelancing website like Fiverr,UPwork,Frelancer..</span>
         <Link spy={true} to='HireMe' smooth={true} activeClass="activeClass" >
      <button className="button s-button">Hire Me</button></Link>
      
      
      <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
      </div> 

      {/* right side*/}
      <div className="w-right">
       <div
       
       className="w-mainCircle">
        <div className="w-secCircle">
        <img src={Fiverr} alt=""/>
        </div>

        <div className="w-secCircle">
        <img src={Upwork} alt=""/>
        </div>
  
        <div className="w-secCircle">
        <img src={Amazon} alt=""/>
        </div>

        <div className="w-secCircle">
        <img src={Facebook} alt=""/>
        </div>

        <div className="w-secCircle">
        <img src={Shopify} alt=""/>
        </div>

       </div>

       {/* backgroung circle*/}

       <div className="w-backCircle greenCircle"></div>
       <div className="w-backCircle redCircle"></div>
       <div className="w-backCircle blueCircle"></div>
       <div className="w-backCircle yellowCircle"></div>
     </div>
    </div>
  );
};

export default Works;