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
    <>

      <div className=" d-flex justify-content-around bg-dark text-white content">

        <div className="text w-25"> <h2 className="pt-3 pb-3" style={{ fontSize: "40px" }} href="#">KHOJ</h2><p className='text-white' style={{ "fontFamily": 'Island Moments', 'fontSize': '20px' }}>Best place to find your dream job in Nepal. Khoj is a leading human resource consulting & jobs provider company that provides career-related opportunities from the top companies of Nepal for job seekers as per their expertise.</p></div>

        <div className="text w-25"><br /><h2 className=' pb-3'>Follow & Subscribe Us</h2>
          &ensp; &ensp;&ensp;&ensp;&ensp;<AiFillInstagram />&ensp;<FaFacebook />&ensp;<AiFillGithub />&ensp;<AiFillLinkedin />&ensp;<AiFillYoutube /><br /><br />
          <h2 className='pb-3'>Subscribe Now</h2>
          <form className="row g-3">

            <div className="col-auto">
              <label htmlFor="inputPassword2" className="visually-hidden">Email</label>
              <input type="password" className="form-control" id="inputPassword2" placeholder="Your Email" />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Send</button>
            </div>
          </form>
          <p className='text-white'>Subscribe Khoj Job Board and get latest updates daily.</p>
        </div>
        <div className="text"><br />
          <h2 className='text-center pb-4'>Contact us</h2><ul className='list-group'>
            <li className='list-group-item'><BsFillHouseDoorFill />Kalimati,Kathmandu</li>
            <li className='list-group-item'><AiFillPhone />Contact-number:9768579947</li>
            <li className='list-group-item'><HiOutlineMail />khoj@gmail.com</li>
            <li className='list-group-item'><BiTime />10:00am to 6:00pm</li>
          </ul></div>

      </div>
    </>
  )
}
