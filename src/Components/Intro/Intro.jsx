import React from 'react'
import './Intro.css'
import Typewriter from "typewriter-effect"

import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import {Link} from "react-scroll";
import Vector1 from '../../img/gradienta.png'
import Vector2 from '../../img/vector4.png'
import boy from '../../img/brout.png'
import Crown from '../../img/crown.png'
import glassesimojioy from '../../img/glassesimoji.png';  {/* we can use also use '../../img/* but problem is if we do this compomemt name name only one like github or Linkedin when we use this component name it will be little bit difffult to understand . if do this it may work'*/}

              
const Intro = () => {
  return (
    <div className="intro">
    <div className="i-left">
        <div className="i-name">
        <h1> Hi, I'm<span> Bhakta Rout</span></h1>
           <h2>A <span><Typewriter
             options={{
             strings: ["Software Engineer.","Professional Coder.", "Developer.", "UI/UX Designer."],
             autoStart: true,
             loop: true,
            }}
          />
          
          
        </span></h2>
         <span> Specialized in both Frontend & 
            Backend. I want to make things that make a difference
         </span>
        </div>
        <Link spy={true} to='HireMe' smooth={true} activeClass="activeClass" >
        <button className="button i-button">Hire Me</button> </Link>
        <div className="i-icons">
            <a href='https://in.linkedin.com/' target={'_blank'}>
            <img src={Linkedin} alt="LinkedIn"/>
            </a>
             
            <a href='https://github.com/BhaktaRout038' target={'_blank'}>
            <img src={Github} alt="Github"/>
            </a>
            
            <a href='https://www.instagram.com/'target={'_blank'}>
            <img src={Instagram} alt="Instagram"/>
            </a>
            
        </div>
    </div>

    <div className="i-right">
    <img src={Vector1} alt="VectorImage"/>
    <img src={Vector2} alt="VectorImage2"/> 
    <img src={boy} alt="boy"/>
    </div>
    </div>
  )
}

export default Intro