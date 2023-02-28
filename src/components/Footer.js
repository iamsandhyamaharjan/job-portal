import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { BiTime } from 'react-icons/bi';
// import logo from '../image/logo.PNG'
// import BusinessIcon from '@mui/icons-material/Business';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
  return (


    <div className="row bg-dark text-white w-100 m-0 ">

      <div className="col-sm-4">
        <h2 className=" pb-3 pl-2 pt-3 text-center" style={{ fontSize: "40px" }} href="#">KHOJ</h2>
        <p className='text-white text-center' style={{ "fontFamily": 'Island Moments', 'fontSize': '20px' }}>Best place to find your dream job in Nepal. Khoj is a leading human resource consulting & jobs provider company that provides career-related opportunities from the top companies of Nepal for job seekers as per their expertise.</p>
      </div>

      <div className="col-sm-4 text-center"><br />
        <h1 className=' pb-3' style={{ fontSize: "35px" }}>Follow & Subscribe Us</h1>
        &ensp; &ensp;&ensp;&ensp;&ensp;<AiFillInstagram />&ensp;<FaFacebook />&ensp;<AiFillGithub />&ensp;<AiFillLinkedin />&ensp;<AiFillYoutube /><br /><br />
        <h2 className='pb-3'>Subscribe Now</h2>
        <form className="row text-center ">

          <div className="col-sm-3"></div>
          <div className="col-sm-6 text-center d-flex">
            {/* <label htmlFor="inputPassword2" className="visually-hidden">Email</label> */}
            <input type="password" className="form-control text-center" id="inputPassword2" placeholder="Your Email" />
          
            &ensp;&ensp; <button type="submit" className="btn btn-primary ">Send</button>
          </div>
        </form><br/>
        <p className='text-white'>Subscribe Khoj Job Board and get latest updates daily.</p>
      </div>
      <div className=" col-sm-4 "><br />
        <h1 className='text-center pb-4' style={{ fontSize: "40px" }}>Contact us</h1><ul className='list-group'>
          <li className='list-group-item text-center'><BsFillHouseDoorFill />Kalimati,Kathmandu</li>
          <li className='list-group-item text-center'><AiFillPhone />Contact-number:9768579947</li>
          <li className='list-group-item text-center'><HiOutlineMail />khoj@gmail.com</li>
          <li className='list-group-item text-center'><BiTime />10:00am to 6:00pm</li>
        </ul></div>
    </div>


  )
}
