import React from 'react'
import { useNavigate, useParams,useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import UserService from '../../services/user'
import './UpdateDoctor.css'
import axios from "axios";


const UpdateDoctor = () => {
    const location =useLocation();
    const id=location.pathname.split("/")[3];
    
    const [Doctor,setDoctor]=useState({
        username:"",
        speciality:"",
        PhoneNumber:"",
        Price:"",
        Location:""
    });



    useEffect(()=>{
        loadDoctor();
    },[])
    const loadDoctor=async()=>{
        const result=await axios.get(`http://localhost:8800/api/doctor/${id}`);
        setDoctor(result.data);
      }

    const onInputChange=(e)=>{
        const value=e.target.value;
        setDoctor({...Doctor,[e.target.name]:value});
    }

    const navigate=useNavigate();
    const onSubmit=(e)=>{
        e.preventDefault();
        UserService.UpdateDoctor(Doctor.id,Doctor).then((res)=>{
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
                                    <label class="form-label">Full Name</label>
                                    <input class="form-control" type="text" placeholder="Enter your Full Name" name="username" value={Doctor.username} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">Speciality</label>
                                    <input class="form-control" type="text" placeholder="Enter your speciality" name="speciality" value={Doctor.speciality} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">Address</label>
                                    <input class="form-control" type="text" placeholder="Enter your Address" name="address" value={Doctor.Location} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="form-label">Phone Number</label>
                                    <input class="form-control" type="text" placeholder="Enter your Phone Number" name="PhoneNumber" value={Doctor.PhoneNumber} onChange={(e) => onInputChange(e)} />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Price</label>
                            <input class="form-control" type="text" placeholder="Enter your Price" name="Price" value={Doctor.Price} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div class="wrap">
                            <button class="button">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default UpdateDoctor