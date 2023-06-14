import React ,{useState,useEffect} from 'react'
import{useNavigate} from "react-router-dom"
import jwtDecode from 'jwt-decode'

const User = () => {
  const navigate=useNavigate()
  const token=localStorage.getItem("token")
  const [name,setName]=useState("Name Here")
  useEffect(()=>{
    setName(jwtDecode(token).role)
  })

  const handleClick=async e=>{     
    localStorage.removeItem("token");
      navigate("/login")
      }
      
  return (
    <div> 
    <button onClick={handleClick} class="submit">Hello {name}</button>
    </div>
  )
}

export default User