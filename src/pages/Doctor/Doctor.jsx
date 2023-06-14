import React , { useRef } from 'react'
import './Doctor.css'
import Comments from '../../components/Comments/Comments'
import pic from '../../assets/abstract_532.jpg'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Doctor = () => {
  const location =useLocation();
  const id=location.pathname.split("/")[3];
  
  const [data,setData]=useState([]);
  useEffect(()=>{
    loadDoctor();
  });
  const loadDoctor=async()=>{
    const result=await axios.get(`http://localhost:8800/api/doctor/${id}`);
    setData(result.data);
  }

  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);

  const handleBookClick = () => {
    const selectedDate = dateInputRef.current.value;
    const selectedTime = timeInputRef.current.value;
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
  };
  return (

    
    <div class="par">

<div class="divi1"> <img className="circular-image" src={data.Picture} /></div>
<div class="divi2"> </div>
<div class="divi3">
    <div class="person">
         <h2>{data.username}</h2>
        <p>
             {data.Description}
         </p>
         <p>
          {data.PhoneNumber}
         </p>
    </div>
</div>
<div class="divi4"><div class="person">
         <h2>Check Avaibility And Choose The Best Time For You</h2>
         <input class="doc_input" name="text" ref={dateInputRef} placeholder="Search..." type="Date"/>
         <br></br>
         <input class="doc_input" name="text" ref={timeInputRef}  step="1800" min="08:00" max="17:00" type="time"/>
    </div></div>
<div class="divi5"> 
<button class="btn-donate" onClick={handleBookClick}>
    Book now
</button>
 </div>
</div>
  )
}

export default Doctor