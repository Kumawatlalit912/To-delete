import React from 'react'
import  Loader from './Loader/loader'
import nodata from '../images/relatives.jpeg'
const NoData = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'40px'}}>

        <img src={nodata} alt="random" />
        <h1>🧐 🧐 🧐 🧐 🧐 🧐 🧐</h1>
        <h1>रुको खोज केर रही हूं !!</h1>
        {setTimeout(()=>{
             <h1>नहीं मिला 😅</h1>
        },2000)}
        <Loader />

    </div>
  )
}

export default NoData