import MainIntro from '../components/main-intro';
import AboutMe from '../components/aboutme';
import Education from '../components/education';
import Skills from '../components/skills';
import WorkExperience from '../components/work-experience';
import Projects from '../components/projects';
import Layout from '../components/layouts/default';

export default function Home() {
  return (
    <Layout>
      <MainIntro />
      <AboutMe />
      <Education />
      <Skills />
      <WorkExperience />
      <Projects />
    </Layout>
  );
}
