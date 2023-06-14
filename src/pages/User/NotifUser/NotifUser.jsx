import React,{useState,useEffect} from 'react'
import axios from "axios";
import './NotifUser.css'



const NotifUser = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
  loadAppointment();
});
const loadAppointment=async()=>{
  const result=await axios.get(`http://localhost:8800/api/Request`);
  setData(result.data);
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
  
    const previousPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
    const deleteRequest = async (id) => {
      try {
        await axios.delete(`http://localhost:8800/api/Request/${id}`);
        loadAppointment(); // Reload the data after deletion
      } catch (error) {
        console.error(error);
      }
    };

    const renderRows = () => {
      const startIndex = currentPage * rowsPerPage;
      const endIndex = (currentPage + 1) * rowsPerPage;
      const displayedRows = data.slice(startIndex, endIndex);
  
      return displayedRows.map((data, index) => (
        <tr key={index}>
            <td>{data.Doctor}</td>
            <td>{data.DaApp}</td>
            <td>{data.App}</td>
            <td></td>
        </tr>
      ));
    };
  return (
    <div class="ap_parent">
    <div class="ap_div1"> 
    <div class="ap_div2"> <h1><span class="animated-text">Requests</span></h1> </div>
    <div class="ap_div3"> 
    
    <table>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Date </th>
              <th>Time</th>
              <th>Actions</th>
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

export default NotifUser