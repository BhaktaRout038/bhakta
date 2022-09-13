import React from 'react'
import './Services.css'
import webdesign from "../../img/webdesign.png"
import web from "../../img/bo1.png"
import Card from '../Card/Card'
import Resume from './bhakta.docx'

const Services = () => {
  return (
    <div className="services" id='Services'>
     {/*left side */}
      <div className="awesome" id='HireMe'>
      <span>Services |</span>
      <span>Offer</span>
      <span>I am a software engineer &   also builds personal website and 
        <br/>  solutions create custom applications  &
         <br/>platforms to drive your business using emerging technologies.</span>
      <a href={Resume} download>
      <button  className="button s-button">My Resume</button>
      </a>
      
      <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
      </div> 

      {/* right side */}
             
      <div className="cards">
       
              {/* first card */}
        <div style={{left: '14rem'}}>
            <Card
             emoji = {webdesign}
             heading = {'Web Design'} 
             detail = {"Design and develop websites for Clients"}
            />
        </div>
      {/* second card*/}

      <div style={{top: "12rem" , left: "-2rem", }}>
      <Card
             emoji = {webdesign}
             heading = {'Software Developer'} 
             detail = {"Researching, designing, implementing, and managing software programs"}
            />
      </div>
      
      {/* Third card*/}

      <div style={{top: "17rem" , left: "19rem"}}>
      <Card
             emoji = {webdesign}
             heading = {'UI/UX Design'} 
             detail = {"create the user interface for an app, website."}
            />
      </div>

      </div>
    </div>
  )
}

export default Services