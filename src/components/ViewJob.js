import React from 'react'
import {useParams} from 'react-router-dom'
import job from '../Data/data.json'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

export const ViewJob = () => {
  const { jobseekeruser } = useSelector((state) => state.jobseekeruser)
  const handleapply = () => {
    {!jobseekeruser?toast("You need to login as a jobseeker to apply ") : toast("Job applied successfully");
  }}

  let { id } = useParams();
  return (
    <div className='container p-5 ' style={{"marginTop":"5%" }}>


    <div className='row'>
      {
        job.map(el => {
          // console.log(el.id === id)
          return (el.id == id) ? 
                    <div >
              <div className="img"  >
                <img className="card-img-left" style={{ width: "13rem", height: "7rem" }} src={el.img} alt="" />
              </div>
              <div className="card-body">

                <h3>{el.position}</h3>
              <strong>{el.company}&ensp;</strong><span>{el.postedAt}&ensp;{el.location}</span>
               <br></br> 
               <br></br> 
         <span className="des-header" style={{" padding": "0px 0px 2px","margin": "0px 0px 15px"," outline":"none", "font-size": "18px", "font-weight": "600", "border-bottom": "3px solid rgb(0, 115, 126)", "display": "inline-block", "color": "rgb(85, 85, 85)", "font-family": "Roboto, sans-serif"}}>Job Description</span>
<div style={{"outline": "none", "color": "rgb(85, 85, 85)","font-family": "Roboto, sans-serif", "font-size": "14px"}}>
<ul style={{" margin": "0px 0px 10px", "outline": "none"}}>
	<li style={{" outline": "none"}}>Prepares work to be accomplished by gathering information and materials.</li>
	<li style={{" outline": "none"}}>Plans concept by studying information and materials.</li>
	<li style={{" outline": "none"}}>Illustrates concept by designing rough layout of art and copy regarding arrangement, size, type size and style, and related aesthetic concepts.</li>
	<li style={{" outline": "none"}}>Obtains approval of concept by submitting rough layout for approval.</li>
	<li style={{" outline": "none"}}>Prepares finished copy and art by operating typesetting, printing, and similar equipment; purchasing from vendors</li>
	<li style={{" outline": "none"}}>Prepares final layout by marking and pasting up finished copy and art.</li>
	<li style={{" outline": "none"}}>Ensures operation of equipment by completing preventive maintenance requirements; following manufacturer's instructions; troubleshooting malfunctions; calling for repairs; maintaining equipment inventories; evaluating new equipment.</li>
	<li style={{" outline": "none"}}>Completes projects by coordinating with outside agencies, art services, printers, etc.</li>
	<li style={{" outline": "none"}}>Maintains technical knowledge by attending design workshops; reviewing.&nbsp;</li>
	<li style={{" outline": "none"}}>professional publications; participating in professional societies.</li>
	<li style={{" outline": "none"}}>Contributes to team effort by accomplishing related results as neede</li>
</ul>
</div>
 
                        <button className='btn btn-primary' onClick={handleapply}>Apply Now</button>   <ToastContainer/>    


              </div>
             
           
            
            
           
          </div> :<> <p></p></>

        })
      }
    </div>


  </div>
  )
}
