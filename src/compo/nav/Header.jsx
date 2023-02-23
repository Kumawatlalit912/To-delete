import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80px',gap:'15px',color:'white',fontWeight:'900',fontSize:'30px'}} className="nav">
        <h4>
            Home
        </h4>
        <h4>
            Ab<b style={{color:'black'}}>o</b>ut
        </h4>
        <h4>
            Login
        </h4>
        
    </div>
  )
}

export default Header