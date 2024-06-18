import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import music from "../LottieFiles/music.json";
import Typed from "./Typed.js";



import { CiMusicNote1 } from "react-icons/ci";


const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>PALADUGU AASHRITHA</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of learning and very exicted to explore new things. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am good in <b>Java</b> and know a bit of <b>Python</b> and I am working on a few 
            projects in the <b>MERN</b> stack.<br /> As i am a cybersecurity enthusiast
            I plan to learn <b></b>, <b>cybersecurity courses</b> and I love to design would learn <b>UI/UX design</b> in the near future. <br /><br />
            Also, I love to listen <b>music..</b> <CiMusicNote1 style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Lottie 
          className="illustration" 
          animationData={music} 
          loop={true} 
        />
      </div>
    </div>
  )
}

export default Home