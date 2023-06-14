import React, { useState } from 'react'
import './Register.css'
import UserService from "../../services/user"
import{useNavigate} from "react-router-dom"

const Register=()=>{
  const [user,setUser]=useState({
    firstname:"",
    lastname:"",
    address:"",
    age:20,
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setUser(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  console.log(user);
  const navigate=useNavigate()

  const handleClick=async e=>{
    e.preventDefault()
      await UserService.saveUser(user).then((res)=>{
        console.log(res);
        navigate("/login")
      })
     
  };

  return (
    <div class="pt">
<div class="reg-box">
    <p>Register</p>
    <form>
      <div class="reg_user-box">
        <input required="" name="firstname" type="text"onChange={handleChange}/>
        <label>Firstname</label>
      </div>
      <div class="reg_user-box">
        <input required="" name="lastname" type="text" onChange={handleChange}/>
        <label>Lastname</label>
      </div>
      <div class="reg_user-box">
        <input required="" name="address" type="text" onChange={handleChange}/>
        <label>Address</label>
      </div>
      <div class="reg_user-box">
        <input required="" name="age" type="Number" onChange={handleChange}/>
        <label>Age</label>
      </div>
      <div class="reg_user-box">
        <input required="" name="email" type="text" onChange={handleChange}/>
        <label>Email</label>
      </div>
      <div class="reg_user-box">
        <input required="" name="password" type="password"onChange={handleChange}/>
        <label>Password</label>
      </div>
      
      <div class="reg_user-box">
        <input required=""  type="password"/>
        <label>confirm password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button className='register_btn' onClick={handleClick}>Submit</button>
      </a>
    </form>
    <p>Don't have an account? <button href="/login" class="reg_a2">Login</button></p>
  </div> </div>

    
    
    

    
   
  )
}


export default Register