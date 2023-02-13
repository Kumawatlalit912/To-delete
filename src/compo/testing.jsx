import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader/loader';

const Testing = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [personName,setPersonName]=useState();

    const fetchData=async()=>{
        try{
            const some=await axios.get(`http://localhost:3000/data/${personName}`).then((res)=>{
                setLoading(false);
                console.log(res.data);
                setData(res.data);
            }).catch((err)=>{
                console.log("some error occurred",err);
                setLoading(true);
            })
            // if(some) console.log('connected successfully');
        }catch(err){
            setLoading(true);
            console.log("some error occurred",err);
        }
        
    }
    useEffect(() =>{
    fetchData();
    },[personName])
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
    <input type='text' value={personName} onChange={(e)=>setPersonName(e.target.value)} placeholder="Search any name" style={{width:"50%",height:"30px"}}/></div>
    {
        loading?<Loader />:
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'aquamarine',width:'50vw'}}>
        
        {
        data.map((e)=>(
            <h2 key={e._source._id}>{e._source.customer_first_name}:{e._source.order_id}</h2>
        ))
}
        </div>
        </div>
    }
    
    </>
  )
}

export default Testing