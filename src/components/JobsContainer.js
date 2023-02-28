import React, { useState } from 'react'
import Fuse from 'fuse.js';
import job from '../Data/data.json'
import { Hero } from './Hero';
import{Link} from "react-router-dom";


export const JobsContainer = () => {
  
  const fuse = new Fuse(job, {
    keys: [
      'name',
      'company',
      'category'
    ],
    includeScore: true
  });

  const [query, updateQuery] = useState('');
  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }
  const results = fuse.search(query);
  // const jobsResults = results.map(job => job.item);
  const jobs  = query ? results.map(job => job.item) : job;
  return (
  <>
  <Hero/>
   
  <  div className=' mt-4 container justify-content-center ml-4 pl-4' >
 
        <div className='row justify-content-center ml-4 '>
          <div className="col-sm-4"></div>
          <div className="col-sm-6 text-center mb-4 "> 
      
          <div className="col-sm-12 pb-6 mb-6 d-flex">
  <input className="form-control form-control-md pb-6" type="text" value={query} onChange={onSearch} placeholder="Job title, Company's name , Job level" name="search"/>
   &ensp;<button type='button' className='btn btn-block btn-primary pb-6 '>Search</button>
  </div>

</div>
<div className="col-sm-2"></div>
          
          
          {
            jobs.map(el => {
              return <div  className="col-sm-4 pb-0 text-centerjustify-content-center m-0" style={{ "marginTop": "1rem" }}>
                 
                <div className="border d-flex p-3 shadow mb-5 bg-white rounded position-relative m-0 justify-content-center" style={{width : "24rem", height:"11rem" }} >
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{zIndex:"1",left:"90%"}}>{el.postedAt}</span>
                 <div style={{ borderRadius: '50%' }}><img src={el.img}alt="logo" style={{ borderRadius: '50%', width : "90px" , height : "100px" }}></img></div>
                 <div className="card-body"><strong style={{fontSize:"18px"}}>{el.position}</strong><br/><span style={{fontSize:"15px" ,fontWeight:"bold"}}>{el.company}</span><br/> {
        el.languages?.length>0 ?
        el.languages?.map(e=>{
          return <> • {e.skill}</>
        })
        :
        <p>No reviews yet</p>
      } <br/><br/>  <Link to={`/products/${el.id}` }>   <button className='btn btn-sm btn-primary'>View Job</button></Link></div>
               
                </div>
               
              </div>

            })
          }
        </div>


      </div>
      </>
     )}