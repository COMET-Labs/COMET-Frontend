import {useEffect,useState} from 'react';
import MainIntro from '../../components/portfolio/main-intro';
import AboutMe from '../../components/portfolio/aboutme';
import Education from '../../components/portfolio/education';
import TimeLine from '../../components/portfolio/timeline';
import Skills from '../../components/portfolio/skills';
import WorkExperience from '../../components/portfolio/work-experience';
import Projects from '../../components/portfolio/projects';
import Layout from '../../components/layouts/default';
import MainIntroDark from '../../components/portfolioDark/main-intro';
import AboutMeDark from '../../components/portfolioDark/aboutme';
import EducationDark from '../../components/portfolioDark/education';
import TimeLineDark from '../../components/portfolioDark/timeline';
import SkillsDark from '../../components/portfolioDark/skills';
import WorkExperienceDark from '../../components/portfolioDark/work-experience';
import ProjectsDark from '../../components/portfolioDark/projects';

import PortFolioData from '../../PortFolioData';

export default function PortFolio() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div style={{backgroundColor: darkTheme?"rgb(49,49,49)":"white"}}>
      <a
        onClick={()=>{
          setDarkTheme(prevTheme => !prevTheme);
        }}
      >
        <span className="iconify"
         style={{float:"left",
         color:"gray",
         height:"30px",
         width:"30px",
         marginTop:"2.75vh",
         marginLeft:"5%",
         cursor:"pointer"}} 
         data-icon="gg:dark-mode" 
         data-inline="false"
         >
         </span>
      </a>
      <Layout darkTheme={darkTheme}>
      
      {darkTheme?
      <div><MainIntroDark params={PortFolioData["intro"]}/>
      <AboutMeDark params={PortFolioData["about-me"]}/>
      <EducationDark params={PortFolioData["education"]}/>
      <TimeLineDark edu={PortFolioData["education"]} work={PortFolioData["work-experience"]}/>
      <SkillsDark params={PortFolioData["skills"]}/>
      <WorkExperienceDark params={PortFolioData["work-experience"]}/>
      <ProjectsDark params={PortFolioData["projects"]}/></div>
      :
      <div><MainIntro params={PortFolioData["intro"]}/>
      <AboutMe params={PortFolioData["about-me"]}/>
      <Education params={PortFolioData["education"]}/>
      <TimeLine edu={PortFolioData["education"]} work={PortFolioData["work-experience"]}/>
      <Skills params={PortFolioData["skills"]}/>
      <WorkExperience params={PortFolioData["work-experience"]}/>
      <Projects params={PortFolioData["projects"]}/></div>
      }
      
    </Layout>
    </div>
    
  );
}