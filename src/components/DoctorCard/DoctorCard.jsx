import React from 'react'
import './DoctorCard.css'
import axios from "axios";
import { useEffect, useState } from "react";
import doctorImage from '../../assets/abstract_532.jpg'
import { Link } from "react-router-dom";

const DoctorCard = ({ filter }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, [filter]);

  const loadDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/Listdoctor');
      const filteredDoctors = applyFilter(response.data, filter);
      setDoctors(filteredDoctors);
    } catch (error) {
      console.log('Error loading doctors:', error);
    }
  };

  const applyFilter = (doctors, filter) => {
    const { doctorType, location, minPrice, maxPrice } = filter;
    return doctors.filter((doctor) => {
      if (doctorType && doctor.speciality !== doctorType) {
        return false;
      }
      if (location && doctor.Location !== location) {
        return false;
      }
      if (minPrice && doctor.Price < minPrice) {
        return false;
      }
      if (maxPrice && doctor.Price > maxPrice) {
        return false;
      }
      return true;
    });
  };

  return (
    <>
      {doctors.map((doctor) => (
        <div className="book" key={doctor._id}>
          <p className="pbook1">{doctor.username}</p>
          <p className="pbook">{doctor.Price} DT</p>

          <Link to={`/user/doctor/${doctor._id}`}>
            <div className="cover">
            <p className='spec_doc'>{doctor.speciality}</p>
              <img src={doctor.Picture} alt="Doctor" />
              
              <p className="spec_doc-bottom">{doctor.Location}</p>
              
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default DoctorCard