import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Aashritha</h4>
      
      <div className='footerLinks'>
        <a href="https://github.com/aashrithapaladugu" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/aashritha-paladugu-31a752286/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:aashrithapaladugu@gmail.com' target='_blank'><GrMail/></a>
        
      </div>
    </footer>
  )
}

export default Footer