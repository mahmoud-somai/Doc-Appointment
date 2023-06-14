import React,{useState,useEffect} from 'react'
import axios from "axios";
import './Request.css'


const Request = () => {
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
    const rows = [
        {
          name: "John Doe",
          age: 32,
          symptoms: "Chest Pain",
          doctor: "Dr. Smith"
        },
        {
          name: "Jane Smith",
          age: 45,
          symptoms: "Fever",
          doctor: "Dr. Johnson"
        },
        {
          name: "Mike Jones",
          age: 23,
          symptoms: "Headache",
          doctor: "Dr. Lee"
        },
        {
          name: "Amy Johnson",
          age: 55,
          symptoms: "Back Pain",
          doctor: "Dr. Chen"
        },
        {
          name: "Sara Lee",
          age: 37,
          symptoms: "Cold",
          doctor: "Dr. Kim"
        },
        {
          name: "David Chen",
          age: 41,
          symptoms: "Stomach Ache",
          doctor: "Dr. Wu"
        },
        {
          name: "Lisa Wong",
          age: 28,
          symptoms: "Flu",
          doctor: "Dr. Chang"
        },
        {
          name: "Erica Smith",
          age: 50,
          symptoms: "Joint Pain",
          doctor: "Dr. Rodriguez"
        }
      ];

      const showPage = (page) => {
        setCurrentPage(page);
      };
    
      const nextPage = () => {
        if (currentPage < Math.ceil(rows.length / rowsPerPage) - 1) {
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
            <td>{data.DateApp} at {data.TimeApp} </td>
            <td>mohamed@gmail.com</td>
            <td ><div className="actions_btn"><button className='action_btn1'>Accept</button>
            <button className='action_btn2'>Reject</button> </div>
            </td>
          </tr>
        ));
      };
    

  return (
    <div class="ap_parent">
<div class="ap_div1"> 
<div class="ap_div2"> <h1><span class="animated-text">List Of Requests</span></h1> </div>
<div class="ap_div3"> 

<table>
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Date and Time</th>
          <th>Email Patient</th>
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

export default Request