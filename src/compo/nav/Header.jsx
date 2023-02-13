import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80px',backgroundColor:'aliceblue',gap:'15px'}} className="nav">
        <h4>
            Home
        </h4>
        <h4>
            About
        </h4>
        <h4>
            Login
        </h4>
        
    </div>
  )
}

export default Header