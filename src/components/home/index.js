import React from 'react'
import './add.css'


import Login from '../login'
import About from '../about'
// import Items from '../items/Items'
import { NavLink } from 'react-router-dom'

const Home = () => {
  
  
  return (
    <>
    <div className='home'>
      <img src="bg.jpg" alt='back' className='back'/>
       <div className='heading' style={{textAlign:'center'}}>
        <h2>Online Fish Serves</h2>
        <p style={{color:'red', fontFamily:"cursive"}}>comming soon</p>
        <p style={{color:'white'}}>I Will Start Next Month</p>
        </div>
        <img src='fish5.jpg' className="photos" alt='backgroundImg' />
        
         <NavLink to="/items" className='btn btn-danger buttons' 
          
         >Click Here</NavLink>
         
        </div>
    
    
    <About/>
   
    <Login/>
    </>
  )
}

export default Home
