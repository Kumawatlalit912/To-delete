import React from 'react'
import  Loader from './Loader/loader'
import nodata from '../images/nodata3.jpeg'
const NoData = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

        <img src={nodata} alt="random" />
        <h1>🧐 🧐 🧐 🧐 🧐 🧐 🧐</h1>
        <h1>No Data Found!!</h1>


    </div>
  )
}

export default NoData