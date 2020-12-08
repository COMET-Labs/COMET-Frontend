import MainIntro from '../components/main-intro';
import AboutMe from '../components/aboutme';
import Education from '../components/education';
import Skills from '../components/skills';
import WorkExperience from '../components/work-experience';
import Projects from '../components/projects';
import Layout from '../components/layouts/default';

import PortFolioData from '../PortFolioData';
import NavBar from '../components/navbar';


export default function Home() {
  return (
    <Layout>
      
      <MainIntro params={PortFolioData["intro"]}/>
      <AboutMe />
      <Education params={PortFolioData["education"]}/>
      <Skills params={PortFolioData["skills"]}/>
      <WorkExperience params={PortFolioData["work-experience"]}/>
      <Projects />
    </Layout>
  );
}
