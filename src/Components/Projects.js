import React from 'react';
import ProjectBox from './ProjectBox';
import lh from '../images/lh.png';
import ffr from '../images/ffr.png';
import elk from '../images/elk.png';
import mp from '../images/mp.png';
import rf from '../images/rf.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
      <ProjectBox projectPhoto={lh} projectName="Learnhub" />
       
        <ProjectBox projectPhoto={rf} projectName="Recipefinder" />
        <ProjectBox projectPhoto={ffr} projectName="firefightingrobot" />
        <ProjectBox projectPhoto={mp} projectName="minimusicplayer" />
        <ProjectBox projectPhoto={elk} projectName="elkstackanalysis" />
        
      </div>

    </div>
  )
}

export default Projects