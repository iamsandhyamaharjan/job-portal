import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Register = () => {
  let navigate = useNavigate()
  const initialValues = {name:"",email:"",phone:"",password:"",confirmpassword:""}
  const[formValues,setFormValues] = useState(initialValues)
  const[formErrors,setFormErrors] = useState({})
const [isSubmit,setIsSubmit] = useState(false);
  const handleChange = (e) =>{
const { name, value} = e.target;
setFormValues({ ...formValues, [name]: value});
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
   setFormErrors(validate(formValues));
   setIsSubmit(true)
  }
  const validate = (values) =>{
const errors = {};
const regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

if(!values.name){
  errors.name = "Name field is required!"
}
if(!values.email){
  errors.email = "Email field is required!"
}
else if(!regexemail.test(values.email)){
  errors.email = "This is not a valid email format"
}
if(!values.phone){
  errors.phone= "Phone field is required!"
}

if(!values.password){
  errors.password = "Password field is required!"
}
if(!values.confirmpassword){
  errors.confirmpassword = "Confirm password field is required!"
}
else if(values.password !== values.confirmpassword)
{
  errors.confirmpassword = "Password is incorrect!"
}
return errors
  }
  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
      toast("Your account has been registered");
      navigate('/')
    }
  },[formErrors,isSubmit,navigate])
  return (
    <div className="container p-5" style={{ "marginTop": "5%" }}>
      <h1 className="text-center">Jobseeker Register Form</h1>
   
          <form onSubmit={handleSubmit}>
           <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="name" className="form-control" name='name' value={formValues.name} onChange={handleChange} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text text-danger">{formErrors.name}</div>
          </div>
          <p></p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="text" className="form-control" name="email"   value={formValues.email} onChange={handleChange}aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text text-danger">{formErrors.email}</div>
          </div>
          <p></p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
            <input type="text" className="form-control" name="phone" value={formValues.phone}onChange={handleChange} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text text-danger">{formErrors.phone}</div>
          </div>
          <p></p>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password"   value={formValues.password}onChange={handleChange} id="exampleInputPassword1"/>
            <div className='form-text text-danger'>{formErrors.password}</div>
          </div>
          <p></p>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label"> Confirm Password</label>
            <input type="password" className="form-control" name="confirmpassword" value={formValues.confirmpassword}onChange={handleChange} id="exampleInputPassword1"/>
            <div className="form-text text-danger">{formErrors.confirmpassword}</div>
          </div>
          
         
          <button type="submit" className="btn btn-primary">Create Account</button><ToastContainer/>
          
        </form>
        </div>
  )
}
