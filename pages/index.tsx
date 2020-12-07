import MainIntro from '../components/main-intro';
import AboutMe from '../components/aboutme';
import Education from '../components/education';
import Skills from '../components/skills';
import WorkExperience from '../components/work-experience';
import Projects from '../components/projects';
import Layout from '../components/layouts/default';

import PortFolioData from '../PortFolioData';


export default function Home() {
  return (
    <Layout>

      <MainIntro params={PortFolioData["intro"]}/>
      <AboutMe />
      <Education params={PortFolioData["education"]}/>
      <Skills />
      <WorkExperience params={PortFolioData["work-experience"]}/>
      <Projects params={PortFolioData["projects"]}/>
    </Layout>
  );
}