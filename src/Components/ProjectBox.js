import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    LearnhubDesc: "LearnHub is a cutting-edge Learning Management System built with the MERN stack (MongoDB, Express.js, React, Node.js) to streamline and enhance modern education experiences. It provides an intuitive and comprehensive platform for both educators and learners.",
    LearnhubGithub: "https://github.com/aashrithapaladugu/lms-mern",
    LearnhubWebsite: "https://frontend-clms-using-mern.vercel.app/",

    RecipefinderDesc: "Recipe Finder is a web application that allows users to search for delicious recipes by ingredients or dish names, featuring a user-friendly interface with real-time data from the Edamam API. Built with React.js, it includes interactive animations and a fun, emoji-filled background.",
    RecipefinderGithub: "https://github.com/aashrithapaladugu/rf1",
    RecipefinderWebsite: "https://rf1.vercel.app/",

    firefightingrobotDesc: "Our award-winning fire-fighting robot features manual and automatic modes, advanced sensors, and Bluetooth control, providing an efficient and cost-effective solution for detecting and extinguishing fires while enhancing safety in hazardous environments.",
    firefightingrobotGithub: "https://github.com/aashrithapaladugu/Fire-Fighting-Robot",
    firefightingrobotWebsite: "",

    minimusicplayerDesc: "The MiniMusic Player app, built with Android Studio using Java and XML, displays a list of songs and allows users to effortlessly play, pause, skip to the next song, and go back to the previous song with intuitive controls.",
    minimusicplayerGithub: "",
    minimusicplayerWebsite: "https://drive.google.com/file/d/1PhcsOJl-LGKNY6j90uTzwlNEueYEkwOR/view?usp=sharing",

    elkstackanalysisDesc: "The ELK Stack (Elasticsearch, Logstash, Kibana) enables real-time data analysis and visualization. Elasticsearch stores and searches log data, Logstash processes it, and Kibana visualizes it through interactive dashboards, providing comprehensive insights from large volumes of log data.",
    elkstackanalysisGithub: "https://github.com/aashrithapaladugu/elk-",
    elkstackanalysisWebsite: "",
  };

  const showGithub = desc[projectName + 'Github'] !== "";
  const showDemo = desc[projectName + 'Website'] !== "";

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />
        {showGithub && (
          <a href={desc[projectName + 'Github']} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
        {showDemo && (
          <a href={desc[projectName + 'Website']} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><CgFileDocument /> Demo</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
