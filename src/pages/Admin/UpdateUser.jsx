import React from 'react'
import { useNavigate, useParams,useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import UserService from '../../services/user'
import './UpdateDoctor.css'
import axios from "axios";


const UpdateUser = () => {
    const location =useLocation();
    const id=location.pathname.split("/")[3];
    
    const [User,setUser]=useState({
        firstname:"",
        lastname:"",
        address:"",
        age:"",
        email:""
    });



    useEffect(()=>{
        loadUser();
    },[])
    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8800/api/user/${id}`);
        setUser(result.data);
      }

    const onInputChange=(e)=>{
        const value=e.target.value;
        setUser({...User,[e.target.name]:value});
    }

    const navigate=useNavigate();
    const onSubmit=(e)=>{
        e.preventDefault();
        UserService.UpdateUser(User.id,User).then((res)=>{
            console.log(res);
            console.log("success");
            navigate("/admin");
        })
    };
  return (
    
    
    <div id="booking" class="section">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="booking-form">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">Firstname</label>
                                    <input class="form-control" type="text" placeholder="Enter your Full Name" name="username" value={User.firstname} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">Lastname</label>
                                    <input class="form-control" type="text" placeholder="Enter your Lastname" name="speciality" value={User.lastname} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">Address</label>
                                    <input class="form-control" type="text" placeholder="Enter your Address" name="address" value={User.address} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">Age</label>
                                    <input class="form-control" type="text" placeholder="Enter your Phone Number" name="PhoneNumber" value={User.Age} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input class="form-control" type="text" placeholder="Enter your Price" name="Price" value={User.email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div class="wrap">
                            <button class="button">Update</button>
                            <button class="button">Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default UpdateUser