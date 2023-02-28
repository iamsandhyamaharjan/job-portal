import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreateJob = () => {
  const handleAdd = () => toast("Job added successfully");

  return (
          <div className="container p-5"  style={{ "marginTop": "5%" }}>
                    <h1 className='text-center'>Create a job</h1>
          <form className='container'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Job Title</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Job Level</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Company Name</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">No. of Vacancy</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Skills</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
         
          <button type="submit" onclick={handleAdd} className="btn btn-primary">Create a job</button><ToastContainer/>
        </form>
        </div>
  )
}
