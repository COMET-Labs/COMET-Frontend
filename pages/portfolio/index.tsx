import MainIntro from '../../components/portfolio/main-intro';
import AboutMe from '../../components/portfolio/aboutme';
import Education from '../../components/portfolio/education';
import Skills from '../../components/portfolio/skills';
import WorkExperience from '../../components/portfolio/work-experience';
import Projects from '../../components/portfolio/projects';
import Layout from '../../components/layouts/default';

import PortFolioData from '../../PortFolioData';

export default function PortFolio() {
  return (
    <Layout>
      <MainIntro params={PortFolioData["intro"]}/>
      <AboutMe />
      <Education params={PortFolioData["education"]}/>
      <Skills params={PortFolioData["skills"]}/>
      <WorkExperience params={PortFolioData["work-experience"]}/>
      <Projects params={PortFolioData["projects"]}/>
    </Layout>
  );
}