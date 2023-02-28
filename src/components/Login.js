import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setjobseekerUserStore } from '../redux/reducer/jobseekeruser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  let navigate = useNavigate()
 let dispatch =useDispatch()
  const initialValues = {email:"" ,password :"" }
  const [formValues, setformValues] = useState(initialValues)
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setisSubmit] = useState(false)
  const handleChange = (e) =>{
const{name,value} = e.target
setformValues({...formValues, [name]:value})
}
  const handleSubmit =(e) =>{
e.preventDefault()
setformErrors(validate(formValues))
setisSubmit(true)

 
 
  
  }
  const validate = (values)=>{
    const errors = {}
    if(!values.email)
    {
      errors.email="Email field is required!"
    }
     if(!values.password)
    {
      errors.password="Password field is required!"
    }
    return errors
  }
  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
      toast("Login successful");
      
      dispatch(setjobseekerUserStore({
        state:formValues,
         loggedIn:true
       
       }))
       navigate('/')
    }
  },[formErrors,isSubmit])
  return (
    <div className='container p-5' style={{ "marginTop": "5%" }} >
   <h1 className='text-center'>Jobseeker Login Form</h1>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="text"  name="email" className="form-control" value={formValues.name}onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text text-danger">{formErrors.email}</div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password"className="form-control"value={formValues.password} onChange={handleChange} id="exampleInputPassword1"/>
          </div>
          <div className="text-danger">{formErrors.password}</div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button><ToastContainer/>
          
        </form>
        </div>
  )
}
