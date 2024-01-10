 import React from 'react';
 import './home.css'

 import './home.css'
 import Card from '../components/card/card';
// import {Link} from 'react-router-dom'
 
 
 const Home = () => {
   return (
     <div className='home-component' >
        <Card title="Welcome!" icon="ma" />
        {/* <div className='card'>
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quo expedita totam sit dolorem itaqusumenda dignissimos quaerat modi minima temporibus soluta?</p>
            <button>Get your username <i class="fa-solid fa-arrow-right"></i> </button>
            <div><Link to="/login">Sign in</Link></div>

        </div> */}
        
        
     </div>
   )
 }
 
 export default Home;