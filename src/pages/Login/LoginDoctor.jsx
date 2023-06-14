import React,{ useState } from 'react'
import UserService from "../../services/user"
import "./Login.css"
import jwt_decode from 'jwt-decode';
import{useNavigate} from "react-router-dom"



const Login = () => {

  const [token, setToken] = useState('');
  const [_id, setIdtoken] = useState('');

  const [login,setLogin]=useState({
    email:"",
    password:""
  });
  const handleChange=(e)=>{
    setLogin(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  console.log(login);
  const navigate=useNavigate()

  
  const handleClick=async e=>{
    
    e.preventDefault()
      await UserService.loginDoctor(login).then((res)=>{
        const token = res.data;
        setToken(token);
        const decodedToken = jwt_decode(token);
        const {_id } = decodedToken;

        setIdtoken(_id);
        localStorage.setItem("token",res.data)

        localStorage.setItem("id",_id);
        console.log(res.data);
        navigate("/doctor/about")
        
      })
     
  };

  return (
    <><div class="login-box">
    <p>Login</p>
    <form>
      <div class="user-box">
        <input required="" name="email" type="text" onChange={handleChange} />
        <label>Email</label>
      </div>
      <div class="user-box">
        <input required="" name="password" type="password" onChange={handleChange} />
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <button onClick={handleClick}>Submit</button>
      </a>
    </form>
    <p>Don't have an account? <a href="/register" class="a2"  >Sign up!</a></p>
  </div></>
   /* <div class="log_form">
    <div class="log_title">Welcome</div>
    <div class="log_subtitle">Let's create your account!</div>
   
    <div class="log_input-container log_ic2">
      <input id="email" class="log_input" type="text" placeholder=" " onChange={handleChange}  name='email'/>
      <div class="log_cut cut-short"></div>
      <label className='log_label' for="email" class="log_placeholder">Email</label>
    </div>
    <div class="input-container log_ic2">
      <input id="password" class="log_input" type="text" placeholder=" " onChange={handleChange} name='password'/>
      <div class="log_cut"></div>
      <label className='log_label' for="password" class="log_placeholder">Password</label>
    </div>
    <button onClick={handleClick} class="log_submit">submit</button>
  </div>
  */
  )
}

export default Login