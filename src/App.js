import React from 'react'
import './App.css';
//importing the components that altogether make a portfolio  
import Navbar from './components/Navbar';
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills';

//Given below is a dummy JSON Object for the portfolio of a sample person
//As of now ,this project is not connected to a backend therefore I'm using this
//dummy object for a sample portfolio.The explanation of the key:value pairs is as follows:
//1.intro:contains the name, description and profile image url of the person
//2.about me: some extra information with another image url
//3.skills: an array of skills where each skill consists of its name, image url, persons description
//about that specific skill and what rating he/she gives to himself/herself in that skill.
//More no of sections can be added if you want to work on this portfolio

const PortFolio = {
  "intro":{
    "name":"Jack Backy",
    "description":"I am a passionate developer. I love developing web and mobile apps and Coding is my passion",
    "image":'/images/user_image.jpeg'
  },
  "about-me":{
    "head":"Lorem ipsum dolor sit amet",
    "body":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip cillum dolore eu fugiat nulla pariatur.",
    "image":"/images/about-me-img.jpg"
  },
  "skills":[
    {"name":'Web Development',
    "image":'/images/web-dev-img.png',
    "description":'I like developing web apps and I have working in it for a while',
    "rating":95},
    {"name":'App Development',
    "image":'/images/android-dev.png',
    "description":'Android Apps have been an interesting thing for me to build',
    "rating":75},
    {"name":'Machine Learning',
    "image":'/images/ml.png',
    "description":'Enthusiast about the ML World.Gonna work in it soon',
    "rating":50},
    {"name":'Game Development',
    "image":'/images/game-dev.png',
    "description":'Developing games since the last two months',
    "rating":45},
    {"name":'Ethical Hacking',
    "image":'/images/ethical-hacking.png',
    "description":'Just a beginner and aiming to master it',
    "rating":45},
    {"name":'Competitive Coding',
    "image":'/images/cp.png',
    "description":'Currently rated 18** on CodeChef',
    "rating":65}
  ]
}

//Given below is a functional component named App which nests the components named Navbar, Intro,
//AboutMe and Skills, i.e, the components required to make a portfolio. Each component returns the
//HTML for respective part of the portfolio and props are being used to pass custom data for
//each portfolio, for eg: for the intro part we pass Portfoli["intro"] which contains the proper
//information for introduction of a specific person.

function App() {
  return (
    <div>
      <Navbar/>
      <Intro params={PortFolio['intro']}/>
      <AboutMe params={PortFolio['about-me']}/>
      <Skills params={PortFolio['skills']}/>
    </div>
  );
}

export default App;
