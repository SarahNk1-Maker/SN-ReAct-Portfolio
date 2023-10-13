export default function Blog() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '100px',
  };

  const headingStyle = {
    fontSize: '24px',
    color: 'black',
    marginBottom: '20px',
  };

  const projectStyle = {
    marginBottom: '20px',
  };

const imgStyle = {
  maxWidth: '800px', // Adjust the image width as needed

};

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Projects</h1>

      {/* Project 1: SAM's Restaurant Locator */}
      <div style={projectStyle}>
        <img src="Assets/Screenshot 2023-10-06 at 12.11.59 PM.png" alt="SAM's Restaurant Locator" style={imgStyle} />
        <h3>SAM's Restaurant Locator</h3>
        <p>
          A restaurant app that aims to simplify the process of finding, exploring, and enjoying dining experiences while offering convenience and value to both users and restaurant owners.
        </p>
      </div>

      {/* Project 2: Restful Recipes */}
      <div style={projectStyle}>
        <img src="Assets/Screenshot 2023-10-06 at 10.29.45 AM.png" alt="Restful Recipes" style={imgStyle} />
        <h3>Restful Recipes</h3>
        <p>
          A recipe sharing platform. I developed this for my class in the bootcamp to share their tried and tested recipes here.
        </p>
      </div>


    </div>
  );
}

