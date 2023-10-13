export default function Blog() {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    color: 'blue',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>A Little about me!!</h1>
      <p style={paragraphStyle}>
        {'I am a passionate and dedicated web developer with a strong foundation in building and designing web applications. My journey into the world of web development began with a genuine curiosity and an insatiable appetite for learning. I thrive on creating innovative and efficient solutions to real-world problems and turning them into seamless, user-friendly experiences on the web.'}
      </p>
    </div>
  );
}


