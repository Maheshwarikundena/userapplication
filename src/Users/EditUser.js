import axios from "axios";
import React from "react";
import {useState,useEffect} from "react";

import { useNavigate ,useParams} from "react-router-dom";
const EditUser=()=>{
    let navigate =useNavigate();
    const{id}=useParams();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
    });
    const{name,username,email,phone}=user;
    const onInputChange=e=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    };
    useEffect(()=>{
        loadUser();
    },[])


const onSubmit=async e=>{
    e.preventDefault();
    await axios.put(`http://localhost:3005/users/${id}`,user);
    navigate.push("/")
}
const loadUser=async()=>{
    const result=await axios.get(`http://localhost:3005/users/${id}`)
    setUser(result.data);

}
return(
    <div className="container">
        <form class="row g-3" onSubmit={e=>onSubmit(e)}>
            <div class="col-mb-6">
            <label for="Inputname" class="form-label">Name</label>
            <input  type="name" class="form-control" name="name" value={name} onChange={e=>onInputChange(e)} />
            </div>
            <div class="col-mb-6">
            <label for="Inputusername" class="form-label">Username</label>
            <input  type="name" class="form-control" name="username" value={username} onChange={e=>onInputChange(e)} />
            </div>
            <div class="col-mb-6">
            <label for="Inputemail" class="form-label">Email</label>
            <input  type="name" class="form-control" name="email" value={email} onChange={e=>onInputChange(e)} />
            </div>
            <div class="col-mb-6">
            <label for="Inputphone"  class="form-label">Phonenumber</label>
            <input  type="name" class="form-control" name="phone" value={phone} onChange={e=>onInputChange(e)} />
            </div>
            <div class="col-12">
            
            <button className="btn-btn-primary">Edit User</button>
            </div>

        </form>
    </div>
)
}
export default EditUser;