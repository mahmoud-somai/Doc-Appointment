import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import  Login  from './pages/Login/Login';
import  LoginDoctor  from './pages/Login/LoginDoctor';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import User from './pages/User/User'
import Register from './pages/Register/Register';
import Booking from './pages/Booking/Booking';
import Background from './components/Background/Background'
import Doctor from './pages/Doctor/Doctor';
import Navbar from './components/Navbar/Navbar';
import Appointment from './pages/Doctor/Appointment/Appointment';
import Request from './pages/Doctor/Request/Request';


import About from './pages/Doctor/About/About';
import SetProfile from './pages/Doctor/SetProfile/SetProfile';
import NotifDoctor from './pages/Doctor/NotifDoctor/NotifDoctor';
import NotifUser from './pages/User/NotifUser/NotifUser';
import ListAppointment from './pages/User/ListAppointment/ListAppointment';
import UpdateDoctor from './pages/Admin/UpdateDoctor';
import UpdateUser from './pages/Admin/UpdateUser';


function App() {
  const token=localStorage.getItem("token")

 
  return (
  
    <>
    <Navbar/>
      <Background/>
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/doctor/login" element={<LoginDoctor/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/updateDoctor/:id" element={<UpdateDoctor/>}/>
        <Route path="/admin/updateUser/:id" element={<UpdateUser/>}/>
        {token && <Route path="/user" element={<User/>}/>}
        <Route path="/register" element={<Register/>}/>
        <Route path="/user" element={<Navigate replace to="/login"/>}/>


        <Route path="/doctor/appointment" element={<Appointment/>}/>
        <Route path="/doctor/requests" element={<Request/>}/>
        <Route path="/doctor/about" element={<About/>}/>
        <Route path="/doctor/settings" element={<SetProfile/>}/>
        <Route path="/doctor/notification" element={<NotifDoctor/>}/>

        
        <Route path="/user/notification" element={<NotifUser/>}/>
        <Route path="/user/booking" element={<Booking/>}/>
        <Route path="/user/doctor/:id" element={token ? <Doctor /> : <Navigate to="/login" />} />
        <Route path="/user/appointment" element={<ListAppointment/>}/>

       
      </Routes>
    </BrowserRouter>      
    </>  

  );
}

export default App;
