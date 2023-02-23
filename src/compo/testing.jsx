import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader/loader';
import NoData from './NoData';


const Testing = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [series_title,setseries_title]=useState();
    const [forbag,setForBeg]=useState(false);
    const [id,setId]=useState(null);




    const fetchData=async()=>{
        try{
            
            const container=await axios.get(`http://localhost:3000/data/${series_title}`).then((res)=>{
                setLoading(false);
                console.log(res.data);
                setData(res.data);
            }).catch((err)=>{
                console.log("some error occurred",err);
                setLoading(true);
            })
        }
            // if(some) console.log('connected successfully');
        catch(err){
            setLoading(true);
            console.log("some error occurred",err);
        }
        
    }
    useEffect(() =>{
    fetchData();
    },[series_title])

    const handleChange=async(e)=>{
        setseries_title(e.target.value);

    }
    const handleClick=(e,s)=>{
        // console.log(s.target.style);
        console.log(e._id);
        setId(e._id);
        setForBeg(!forbag);
        s.target.style.backgroundColor=forbag?"aquamarine":"red";
        
    }
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
    <input type='text' value={series_title} onChange={(e)=>handleChange(e)} placeholder="Search some Indian movies name" style={{width:"50%",height:"30px"}} autoFocus/></div>
    {
        loading?<span><Loader /></span>:
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'50vw',padding:'5px'}}>
                    
        {
        data.length===0?<NoData/>:data.map((e)=>(   
            <div key={e._source.Language} className='change' onClick={(s)=>handleClick(e,s)} style={{width:"950px"}}>
            <h2 key={e._source.title} style={{border:'2px solid white',margin:'15px',padding:'15px',borderRadius:'10px',color:'white',fontWeight:'900',textShadow:'5px 6px 12px white',backgroundColor:'#edf0f373'}}>Title-- {e._source.title},Language--Hindi Year--2010-19
            
            </h2>
            </div>
        ))
}
        </div>
        </div>
    }
    
    </>
  )
}

export default Testing