import React from 'react'
import './About.css'
import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [data,setData]=useState([]);
  const id=localStorage.getItem("id");
  useEffect(()=>{
    loadDoctor();
  });
  const loadDoctor=async()=>{
    const result=await axios.get(`http://localhost:8800/api/doctor/${id}`);
    setData(result.data);
  }
  return (
    <div class="ab_parent">
<div class="ab_div1"><header className="ab_header">
		<div class="header-container">
			<div class="header-left">
				<h1 className='ab_h1'>Dr. {data.username}</h1>
				<h2 className='ab_h2'>{data.speciality}</h2>
			</div>
		</div>
	</header> </div>
<div class="ab_div2"> 
<div class="ab_div3"><img className='ab_img' src={data.Picture} alt="user avatar"/> </div>
<div class="ab_div4"> <ul class="list-unstyled">
            <li class="media">
              <span class=" text-black ">Profession:</span>
              <label class="media-body">{data.speciality}</label>
            </li>
            <li class="media">
              <span class=" text-black ">Experience: </span>
              <label class="media-body">10  Years</label>
            </li>
            <li class="media">
              <span class=" text-black ">Phone: </span>
              <label class="media-body">{data.PhoneNumber}</label>
            </li>
            <li class="media">
              <span class=" text-black ">Email: </span>
              <label class="media-body">{data.email}</label>
            </li>
            <li class="media">
              <span class=" text-black ">Location: </span>
              <label class="media-body">{data.Location}</label>
            </li>
          </ul>
          </div>
<div class="ab_div5">
<a class="btn btn-icon btn-facebook" href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a>
<a class="btn btn-icon btn-twitter" href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a>
<a class="btn btn-icon btn-googleplus" href="#"><i class="fa fa-google-plus"></i><span>Google+</span></a>
<a class="btn btn-icon btn-linkedin" href="#"><i class="fa fa-linkedin"></i><span>LinkedIn</span></a>  </div></div>
<div class="ab_div6"> 
<div class="ab_div7"> <p>Dr. {data.username} is a board-certified cardiologist with over 10 years of experience in treating patients with heart disease. He received his medical degree from Stanford University and completed his residency at the University of California, San Francisco. Dr. Johnson is committed to providing personalized and compassionate care to his patients.</p> 
			 </div>
<div class="ab_div8"> <h3>Education</h3>
			<ul>
				<li>Stanford University - Medical Degree</li>
				<li>University of California, San Francisco - Residency in Cardiology</li>
			</ul></div>
<div class="ab_div9"> <h3>Experience</h3>
			<ul>
				<li>Private Practice Cardiologist - 10 years</li>
				<li>Assistant Professor of Cardiology, Stanford University - 3 years</li>
			</ul></div>
<div class="ab_div10"> <h3>Professional Memberships</h3>
			<ul>
				<li>American College of Cardiology</li>
				<li>American Heart Association</li>
			</ul> 
            </div>
</div>
</div>
    
  /*
<div class="ab_parent">


<div class="ab_div1"> 
<div class="ab_div2"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar"/>

</div>
<div class="ab_div3">   <ul class="list-unstyled">
            <li class="media">
              <span class=" text-black ">Profession:</span>
              <label class="media-body">Design</label>
            </li>
            <li class="media">
              <span class=" text-black ">Experience: </span>
              <label class="media-body">10  Years</label>
            </li>
            <li class="media">
              <span class=" text-black ">Phone: </span>
              <label class="media-body">789 456 1230</label>
            </li>
            <li class="media">
              <span class=" text-black ">Email: </span>
              <label class="media-body">support@technol.com</label>
            </li>
            <li class="media">
              <span class=" text-black ">Location: </span>
              <label class="media-body">5557 Cottey St Fort Worth, Texas(TX), 76119, New York, USA</label>
            </li>
          </ul>
          </div>
         
<div class="ab_div4"> Social Media </div>
</div>
<div class="ab_div5">
<div class="ab_div6"> <p>Dr. Sarah Johnson is a board-certified cardiologist with over 10 years of experience in treating patients with heart disease. She received her medical degree from Stanford University and completed her residency at the University of California, San Francisco. Dr. Johnson is committed to providing personalized and compassionate care to her patients.</p>
			<div class="button-container">
				<a href="#">Read More</a>
			</div></div>
<div class="ab_div7"> 			<h3>Education</h3>
			<ul>
				<li>Stanford University - Medical Degree</li>
				<li>University of California, San Francisco - Residency in Cardiology</li>
			</ul></div>
<div class="ab_div8"> 			<h3>Experience</h3>
			<ul>
				<li>Private Practice Cardiologist - 10 years</li>
				<li>Assistant Professor of Cardiology, Stanford University - 3 years</li>
			</ul> </div>
<div class="ab_div9"> <h3>Professional Memberships</h3>
			<ul>
				<li>American College of Cardiology</li>
				<li>American Heart Association</li>
			</ul> </div>
</div>
</div>
*/






  )
}

export default About