import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import './Admin.css'
const Admin = () => {
  const [data,setData]=useState([]);
  const[dataDoctor,setDataDoctor]=useState([])
  const[dataUser,setDataUser]=useState([])
  useEffect(()=>{
  loadAppointment();
  loadDoctor();
  loadUser();
});
const loadAppointment=async()=>{
  const result=await axios.get(`http://localhost:8800/api/Request`);
  setData(result.data);
}
const loadDoctor=async()=>{
  const result=await axios.get(`http://localhost:8800/api/Listdoctor`);
  setDataDoctor(result.data);
}
const loadUser=async()=>{
  const result=await axios.get(`http://localhost:8800/api/Listusers`);
  setDataUser(result.data);
}
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 4;

      const showPage = (page) => {
        setCurrentPage(page);
      };
    
      const nextPage = () => {
        if (currentPage < Math.ceil(data.length / rowsPerPage) - 1) {
          setCurrentPage(currentPage + 1);
        }
      };
      const nextPage1 = () => {
        if (currentPage < Math.ceil(dataDoctor.length / rowsPerPage) - 1) {
          setCurrentPage(currentPage + 1);
        }
      };
      const nextPage2 = () => {
        if (currentPage < Math.ceil(dataUser.length / rowsPerPage) - 1) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const previousPage = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      };

      const renderRows = () => {
        const startIndex = currentPage * rowsPerPage;
        const endIndex = (currentPage + 1) * rowsPerPage;
        const displayedRows = data.slice(startIndex, endIndex);
    
        return displayedRows.map((data, index) => (
          <tr key={index}>
               <td>{data.NameUser} Ali</td>
            <td>{data.DateApp} </td>
            <td>{data.TimeApp}</td>
            <td>Mohamed Ali</td>
          </tr>
        ));
      };
      
      const renderRows1 = () => {
        const startIndex = currentPage * rowsPerPage;
        const endIndex = (currentPage + 1) * rowsPerPage;
        const displayedRows = dataDoctor.slice(startIndex, endIndex);
    
        return displayedRows.map((dataDoctor, index) => (
          <tr key={index}>
               <td>{dataDoctor.username} Ali</td>
            <td>{dataDoctor.speciality} </td>
            <td>{dataDoctor.Location}</td>
            <td> <Link to={`/admin/updateDoctor/${dataDoctor._id}`}>
              <button className='button_admin'>Update</button>
              </Link>
              </td>
          </tr>
        ));
      };
      
      const renderRows2 = () => {
        const startIndex = currentPage * rowsPerPage;
        const endIndex = (currentPage + 1) * rowsPerPage;
        const displayedRows = dataUser.slice(startIndex, endIndex);
    
        return displayedRows.map((dataUser, index) => (
          <tr key={index}>
            <td>{dataUser.firstname} {dataUser.lastname}</td>
            <td>{dataUser.address} </td>
            <td>{dataUser.email}</td>
            <td><button className='button_admin'>Update</button></td>
            
          </tr>
        ));
      };
    

  return (
    <div class="ap_parent">
<div class="ap_div1"> 
<div class="ap_div2"> <h1><span class="animated-text">Admin </span></h1> </div>
<div class="ap_div3"> 


  
    <table>
      <thead>
        <tr>
          <th>Doctor Name</th>
          <th> Speciality </th>
          <th>Location</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{renderRows1()}</tbody>
      <tfoot>
        <tr>
          <td  className='foot_td' colSpan="4">
            <button className='ap_btn' onClick={previousPage}>Previous</button>
            <button className='ap_btn' onClick={nextPage1}>Next</button>
          </td>
        </tr>
      </tfoot>
    </table>

    <table>
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Date </th>
          <th>Time</th>
          <th>Patient Email</th>
        </tr>
      </thead>
      <tbody>{renderRows2()}</tbody>
      <tfoot>
        <tr>
          <td  className='foot_td' colSpan="4">
            <button className='ap_btn' onClick={previousPage}>Previous</button>
            <button className='ap_btn' onClick={nextPage2}>Next</button>
          </td>
        </tr>
      </tfoot>
    </table>
    <table>
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Date </th>
          <th>Time</th>
          <th>Doctor Name</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
      <tfoot>
        <tr>
          <td  className='foot_td' colSpan="4">
            <button className='ap_btn' onClick={previousPage}>Previous</button>
            <button className='ap_btn' onClick={nextPage}>Next</button>
          </td>
        </tr>
      </tfoot>
    </table>


</div>
</div>
</div>
  )
}

export default Admin