import  styles from './projects.module.scss'

function ProjectsDark(props) {
  return (
    <div>
      <h1 className={styles.projects_header}>WORKS AND PROJECTS</h1>
      {props.params.map((project)=>{
        return(
          <div className="container">
            <div className={"row "+styles.project}>
              <img src={project.image} className={"col-lg-4 col-md-6 col-sm-12 "+styles.image}></img>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h3 className={styles.date}>{project.start}-{project.end}</h3>
                <h2 className={styles.project_name}>{project.name}</h2>
                <h3 className={styles.project_matter}>{project.matter}</h3>
                <div className={styles.all_icons}>
                  <a href={project.link}><span className={"iconify "+styles.icon} data-icon="mdi:web" color="white" data-inline="false"></span></a>
                  <a href={project.github}><span className={"iconify "+styles.icon} data-icon="entypo:code" color="white" data-inline="false"></span></a>
              </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default ProjectsDark;
