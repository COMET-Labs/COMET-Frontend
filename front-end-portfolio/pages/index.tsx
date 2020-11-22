import MainIntro from './main-intro'
import AboutMe from './aboutme'
import Education from './education'
import Skills from './skills'
import WorkExperience from './work-experience'
import Projects from './projects'

export default function Home() {
  return (
    <div>
      <MainIntro />
      <AboutMe />
      <Education />
      <Skills />
      <WorkExperience />
      <Projects/>
    </div>
  )
}
