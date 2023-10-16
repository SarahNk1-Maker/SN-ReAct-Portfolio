import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons library


const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '30px',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

const headingStyle = {
  fontSize: '50px',
  color: 'black',
  marginBottom: '40px',
};

const imgStyle = {
  maxWidth: '100px', // Adjust the image width as needed
  borderRadius: '50%',
};
const paragraphStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
};
const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
};

const githubURL = 'https://github.com/SarahNk1-Maker'; // Replace with your actual GitHub profile URL
  const linkedinURL = 'www.linkedin.com/in/sarah-naveed'; // Replace with your actual LinkedIn profile URL

export default function Home() {
  return (
    <div style={containerStyle}>
      <h1>Sarah Naveed</h1>
      <img src="../assets/Untitled design.png" alt="Avatar" style={imgStyle} />
      <h2 style={headingStyle}>Crafting Digital Experiences, One Line of Code at a Time</h2>
      <p style={paragraphStyle}>
        {'I am a passionate and dedicated web developer with a strong foundation in building and designing web applications. My journey into the world of web development began with a genuine curiosity and an insatiable appetite for learning. I thrive on creating innovative and efficient solutions to real-world problems and turning them into seamless, user-friendly experiences on the web.'}
      </p>

      {/* Footer with GitHub and LinkedIn icons */}
      <div style={footerStyle}>
      <a href={githubURL} target="_blank" rel="noopener noreferrer">
         
          <FaGithub size={40} style={{ margin: '10px' }} />
        </a>

        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
       
          <FaLinkedin size={40} style={{ margin: '10px' }} />
        </a>
      </div>
    </div>
  );
}