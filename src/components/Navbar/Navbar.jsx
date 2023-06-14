import React from 'react';
import './Navbar.css';



const Navbar = () => {
 
  
  const handleLogout = () => {
    
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    
  };

  const token=localStorage.getItem("token");


  return (
    <>
 <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/user/booking">Doctors</a>
        </li>
        {token ? (
          <>
           
           
            <li>
              <a href='/user/appointment'>Appointments</a>
            </li>
            <li>
              <a href='/user/notification'>Requests</a>
            </li>
            <li>
              <a href="/" onClick={handleLogout}>Logout</a>
            </li>
          </>
        ) : (
          <>
           
            <li>
              <a href="/register">Sign Up</a>
            </li>
            <li>
              <a href="/login">Sign In</a>
            </li>
          </>
        )}
      </ul>
    </nav>

    </>
  )
}

export default Navbar