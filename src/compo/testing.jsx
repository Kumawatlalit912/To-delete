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
            if(id){
                const anotherSome=await axios.post(`http://localhost:3000/data/${series_title}/${id}`).then((res)=>{
                    setLoading(false);
                    console.log(res.data);
                    setData(res.data);
                }).catch((err)=>{
                    setLoading(true);
                    console.log("some Error Occurred",err);
                })
            }
            else{
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
        }catch(err){
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
        s.target.style.backgroundColor=forbag?"beige":"aquamarine";
        
    }
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
    <input type='text' value={series_title} onChange={(e)=>handleChange(e)} placeholder="Search any name" style={{width:"50%",height:"30px"}}/></div>
    {
        loading?<Loader />:
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:'aquamarine',width:'50vw',padding:'5px',border:'2px solid black',borderRadius:'10px'}}>
        
        {
        data.length===0?<NoData/>:data.map((e)=>(
            <div className='change' onClick={(s)=>handleClick(e,s)}>
            <h2 key={e._source.Series_Title} style={{border:'2px solid black',margin:'15px',padding:'15px',borderRadius:'10px'}}>Title-- {e._source.Series_Title},Director--{e._source.Director} IMDB_Rating--{e._source.IMDB_Rating}

            <img src={e._source.Poster_Link} alt="ima" style={{border:'2px solid black',marginLeft:'30px'}} />
            
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