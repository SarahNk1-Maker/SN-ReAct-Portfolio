import React from 'react';
import './App.css'; // Import your CSS file
import { FaGithub } from 'react-icons/fa'; // Import icons from react-icons library



const githubURL = 'https://github.com/SarahNk1-Maker';
export default function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio</h1>

      {/* Project 1: SAM's Restaurant Locator */}
      <div className="project">
        <img src="Assets/SAM.png" alt="SAM's Restaurant Locator" />
        <h3>SAM's Restaurant Locator</h3>
        <p>
          A restaurant app that aims to simplify the process of finding, exploring, and enjoying dining experiences while offering convenience and value to both users and restaurant owners.
        </p>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
         
          <FaGithub size={40} style={{ margin: '10px' }} />
        </a>
      </div>

      {/* Project 2: Restful Recipes */}
      <div className="project">
        <img src="Assets/img.jpeg" alt="Restful Recipes" />
        <h3>Restful Recipes</h3>
        <p>
          A recipe sharing platform. I developed this for my class in the bootcamp to share their tried and tested recipes here.
        </p>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
         
         <FaGithub size={40} style={{ margin: '10px' }} />
       </a>
      </div>
      {/* Project 2: Restful Recipes */}
      <div className="project">
        <img src="Assets/img.jpeg" alt="Restful Recipes" />
        <h3>Restful Recipes</h3>
        <p>
          A recipe sharing platform. I developed this for my class in the bootcamp to share their tried and tested recipes here.
        </p>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
         
         <FaGithub size={40} style={{ margin: '10px' }} />
       </a>
      </div>
      {/* Project 2: Restful Recipes */}
      <div className="project">
        <img src="Assets/img.jpeg" alt="Restful Recipes" />
        <h3>Restful Recipes</h3>
        <p>
          A recipe sharing platform. I developed this for my class in the bootcamp to share their tried and tested recipes here.
        </p>
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
         
         <FaGithub size={40} style={{ margin: '10px' }} />
       </a>
      </div>
    </div>
  );
}

