import React from 'react'
// import logo from '../../images/logo192.png'
// import {Link} from 'react-router-dom'
// import logo from '../Assets/imag.png'
// import Sam from '../Assets/sam'
// import download from '../Assets/download'
import './card.css'

const Card = ({icon,title}) => {
  
  return (
    <div className='card'>


      <div className='card-header'>
        {/* <img src={`/Assets/${icon}.jpg`} alt="download" /> */}
        
        <h1 className='head'><i src={icon} class="fa-solid fa-tower-broadcast"></i>{title}</h1>
      </div>


    </div>
  )
}

export default Card