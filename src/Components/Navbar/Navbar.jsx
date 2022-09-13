import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from "react-scroll";
const Navbar = () => {
  return (
   <div className="n-wrapper" >
    <div className="n-left">
      <div className="n-name">Bhakta</div>
      <Toggle/>
    </div>
    <div className="n-right">
    <div className="n-list">
     <ul style={{listStyleType: 'none'}}> {/* added dtyle for removing . from .HOME LIKE .Home => Home */} 
      
      <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass" >
      <li >Home</li>
      </Link>
      
      <Link spy={true} to='Services' smooth={true} activeClass="activeClass" >
      <li>Services</li> 
      </Link>

      <Link spy={true} to='Experiences' smooth={true} activeClass="activeClass" >
      <li>Experiences</li>
       </Link>

      <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass" >
      <li>Portfolio</li>
      </Link>

      <Link spy={true} to='Testimonials' smooth={true} activeClass="activeClass" >
      <li>Feedback</li>
       </Link>
     </ul>
     
    </div>

    <Link spy={true} to='Contact' smooth={true} activeClass="activeClass" >
    <button className="button n-button">
      Contact
    </button></Link>
    </div>
   </div>
  )
}

export default Navbar