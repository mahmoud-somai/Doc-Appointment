import React from 'react'
import './Booking.css'
import Sidebar from '../../components/SideBar/Sidebar'
import DoctorCard from "../../components/DoctorCard/DoctorCard"
import { useState } from "react";


const Booking = () => {
  const [filter, setFilter] = useState({
    doctorType: '',
    location: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  return (
    <div className="pa">
      <div className="d1">
        <Sidebar filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div className="d2">
        <DoctorCard filter={filter} />
      </div>
    </div>
  );
};

export default Booking