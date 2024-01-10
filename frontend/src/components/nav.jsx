import React from 'react';
import './nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='total-nav' >
      
        <Link to="/"><i class="fa-solid fa-walkie-talkie"></i> CONFERANCE</Link>
        
    </div>
  )
}

export default Nav