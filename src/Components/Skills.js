import React from 'react'; 
//import { FaPython } from "react-icons/fa6";

import { FaReact, FaJava, FaBootstrap ,FaDatabase,FaLinux } from "react-icons/fa";

import { DiNodejs, DiJavascript1,DiPython  } from "react-icons/di";
import { SiExpress, SiMongodb,  SiWireshark,SiBurpsuite } from "react-icons/si";

import './Skills.css'; // Import your CSS file

const Skills = ({ skill }) => {
    const icon = {
        'Java': {icon: <FaJava />, name: "Java"},
        'JavaScript': {icon: <DiJavascript1 />, name: "JavaScript"},
        'Python': {icon: <DiPython />, name: "Python"},
        'React': {icon: <FaReact/>, name: "React"},
        'Node': {icon: <DiNodejs />, name: "Node.js"},
        'Express': {icon: <SiExpress />, name: "Express"},
        'MongoDb': {icon: <SiMongodb />, name: "MongoDB"},
        'NoSQL': {icon: <FaDatabase />, name: "NoSQL"},
        'Bootstrap': {icon: <FaBootstrap />, name: "Bootstrap"},
        'Linux': {icon: <FaLinux  />, name: "Linux"},
        'Wireshark': {icon: <SiWireshark />, name: "Wireshark"},
        'Burpsuite': {icon: <SiBurpsuite />, name: "Burpsuite"},
        //'FaGitAlt': {icon: <FaGitAlt />, name: "FaGitAlt"},
        
    };
    
    // Check if skill exists in icon object
    if (!(skill in icon)) {
        return null; // or some default component/message
    }
    
    return (
        <div className='SkillBox'>
            <div className='Icon'>{icon[skill].icon}</div>
            <div className='SkillName'>{icon[skill].name}</div>
        </div>
    )
}

export default Skills;
