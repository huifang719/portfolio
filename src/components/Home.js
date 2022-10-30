import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <Typewriter
  options={{
    strings: ['Hello, Welcome to my site', 
              "I'm Livia Gu",
              "I am a web developer"],
    autoStart: true,
    loop: true,
  }}
/>
  );
}

export default Home;