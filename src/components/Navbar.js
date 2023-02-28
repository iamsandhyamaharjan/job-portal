import React from 'react'
import { AiOutlineLogin } from 'react-icons/ai';
import { VscSignIn } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setCompanyUserStore } from '../redux/reducer/companyuser';
import { setjobseekerUserStore } from '../redux/reducer/jobseekeruser';



export const Navbar = () => {
  let navigate = useNavigate();


  let dispatch = useDispatch();
  function handleLogout() {
    dispatch(setCompanyUserStore(null))
    dispatch(setjobseekerUserStore(null))
    navigate('/')
  }
  const { Companyuser } = useSelector((state) => state.Companyuser)
  const { jobseekeruser } = useSelector((state) => state.jobseekeruser)
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <h1 className="navbar-brand  text-light h1 fst-italic" style={{ fontSize: "40px" }} href="#">KHOJ</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
            {!Companyuser ?
              <>    <li className="nav-item">
                <Link className="nav-link active  text-light" aria-current="page" to="/">Jobs</Link>
              </li></> :
              <>
                <li className="nav-item">
                  <Link className="nav-link active  text-light" aria-current="page" to="/createjob">Add Job</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active  text-light" aria-current="page" to="/piechart">Piechart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active  text-light" aria-current="page" to="/barchart">Barchart</Link>
                </li>
              </>
            }

            <li className="nav-item">
              <Link className="nav-link active  text-light" aria-current="page" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-light" to="/faq">FAQ</Link>
            </li>


          </ul>
          <div className="d-flex justify-content-between align-items-center">

          {(!Companyuser) && (!jobseekeruser) ?<>
            <div>
              <button type="button" className="btn btn-sm  btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <li className="d-flex text-light">
                  <AiOutlineLogin size={25} />LOGIN
                </li>
              </button>


              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{bsModalWidth: "200px"}}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    
                     
                      {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   */}
                    <div className="modal-body">
                     
                      <Link to='/EmployerLogin'>  <h1 className="modal-title fs-5" data-bs-dismiss="modal" aria-label="Close" id="exampleModalLabel">Employer</h1></Link>
                      <Link to='/Login'>  <h1 className="modal-title fs-5" data-bs-dismiss="modal" aria-label="Close" id="exampleModalLabel">Jobseeker</h1></Link>

                    </div>

                  </div>
                </div>
              </div>
            </div>&ensp;&ensp;
            <div>
              <button type="button" className="btn btn-sm  btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <li className="d-flex text-light">
                  <VscSignIn size={25} />REGISTER
                </li>
              </button>


              <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                   
                      {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    */}
                    <div className="modal-body">
                    
                      <Link to='/EmployerRegister'>  <h1 className="modal-title fs-5" data-bs-dismiss="modal" aria-label="Close" id="exampleModalLabel">Employer</h1></Link>
                      <Link to='/Register'>  <h1 className="modal-title fs-5" data-bs-dismiss="modal" aria-label="Close" id="exampleModalLabel">Jobseeker</h1></Link>

                    </div>

                  </div>
                </div>
              </div>
            </div>
            </>:<button className="btn btn-primary" type='button' onClick={handleLogout}>Logout</button>}
          </div>

        </div>
      </div>
    </nav>
  )
}
