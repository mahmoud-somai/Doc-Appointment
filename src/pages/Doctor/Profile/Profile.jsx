import React from 'react'
import './Profile.css'
import pfp from "../../../assets/abstract_532.jpg"

const Profile = () => {
  return (
  /*  <div class="pf_parent">
    <div class="pf_div1"> <img src={pfp} /> </div>
    <div class="pf_div2"> <h1><span class="animated-text">Doctor Name</span></h1></div>
    <div class="pf_div3"> Data Description </div>
    </div>*/
<>
<header>
		<div class="header-container">
			<div class="header-left">
				<h1>Dr. Sarah Johnson</h1>
				<h2>Cardiologist</h2>
			</div>
			<div class="header-right">
				<a href="#">Book Appointment</a>
			</div>
		</div>
	</header>
	<main>
		<section>
			<h3>About Me</h3>
			<p>Dr. Sarah Johnson is a board-certified cardiologist with over 10 years of experience in treating patients with heart disease. She received her medical degree from Stanford University and completed her residency at the University of California, San Francisco. Dr. Johnson is committed to providing personalized and compassionate care to her patients.</p>
			<div class="button-container">
				<a href="#">Read More</a>
			</div>
		</section>
		<section>
			<h3>Education</h3>
			<ul>
				<li>Stanford University - Medical Degree</li>
				<li>University of California, San Francisco - Residency in Cardiology</li>
			</ul>
		</section>
		<section>
			<h3>Experience</h3>
			<ul>
				<li>Private Practice Cardiologist - 10 years</li>
				<li>Assistant Professor of Cardiology, Stanford University - 3 years</li>
			</ul>
		</section>
		<section>
			<h3>Professional Memberships</h3>
			<ul>
				<li>American College of Cardiology</li>
				<li>American Heart Association</li>
			</ul>
		</section>
		<section>
			<h3>Contact</h3>
			<ul class="contact-list">
				<li><i class="fas fa-map-marker-alt"></i> 123 Main Street, San Francisco, CA 94102</li>
				<li><i class="fas fa-phone-alt"></i> (123) 456-7890</li>
				<li><i class="fas fa-envelope"></i> info@drsarahtjohnson.com</li>
			</ul>
		</section>
	</main>



</>
  )
}

export default Profile