import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Aashritha paladugu</b> and I am from Hyderabad, India.
            I'm a <b>MERN stack web developer</b> and a final year college student pursuing <b>BTech in CSE with specialization in Cybersecurity</b> at <b>VELLORE INSTITUTE OF TECHNOLOGY </b>. <br/><br/>
            I am interested in <b>web developement.</b> 
             I thrive on challenges and am constantly seeking <b> opportunities </b> to push the boundaries of my skills. <br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            I'm eagerly seeking an <b>internship opportunity </b>to apply my expertise in a real-world setting, where I can contribute meaningfully to projects while further honing my craft.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Java' />
        <Skills skill='Python' />
        <Skills skill='Javascript'/>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='NoSQL' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Linux' />
        <Skills skill='Wireshark' />
        <Skills skill='Burpsuite' />
        
      </div>
    </>
  )
}

export default About