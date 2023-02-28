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
    <div className="container" style={{ "marginLeft": "35rem", "marginTop":"1rem"}} >
      <form className="row g-3 " action="action_page.php">
      
      <div className="col-auto pb-6 mb-6">
  <input className="form-control form-control-md pb-6" type="text" value={query} onChange={onSearch} placeholder="Search.." name="search"/></div>
  <div className="col-auto"> &ensp;<button className='btn btn-sm btn-primary pb-6'>Search</button></div>
</form>
</div>
  <  div className='container '>
     
        <div className='row'>
          
          {
            jobs.map(el => {
              return <div  className="col-sm-3 pb-0" style={{ "marginTop": "1rem" }}>
                <div className="border d-flex p-3 shadow mb-5 bg-white rounded position-relative" style={{width : "20rem", height:"11rem"}} >
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