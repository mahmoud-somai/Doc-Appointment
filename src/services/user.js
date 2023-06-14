import axios from "axios";

const url='http://localhost:8800';

class UserService{
    saveUser(User){
        return axios.post(url+"/api/user/register",User)
    }

    loginUser(User){
        return axios.post(url+"/api/user/login",User)
    }

    loginDoctor(Doctor){
        return axios.post(url+"/api/doctor/logindoc",Doctor)  
    }
    getData(){
        return axios.get(url+"/api/posts");
    }
    getDoctorById(id){
        return axios.get(url+"/doctor/"+id);
    }
    UpdateDoctor(id,Doctor){
        return axios.patch(url+"/api/doctor/"+id,Doctor);
    }
    UpdateUser(id,User){
        return axios.patch(url+"/api/user/"+id,User);
    }
}

export default new UserService();