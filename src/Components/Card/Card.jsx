import React from 'react'      
import './Card.css';
const Card = ({emoji, heading, detail}) => {   {/* it is a function component & emoji, heading ,details are props*/ {/* rafce shortcut*/ } {/* it is used in Services.jsx*/}}
  return (
    <div className="card">
    <img src={emoji} alt="web design" />
    <span>{heading}</span>
    <span>{detail}</span>
    <button className="c-button">Learn More</button>
    </div>
  )
}

export default Card