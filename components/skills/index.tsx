import styles from './skills.module.scss';

function Skills(props) {
  return (
    <div>
      <h1 className={styles.skills_header}>SKILLS </h1>
      <div className="container">
        <div className="row">
          {props.params.map((skill) => {
            return (
              <div className={'col-lg-4 col-md-6 col-sm-12 ' + styles.skill}>
                <img src={skill.images} className={styles.skill_images}></img>
                <span className={styles.skill_name}>{skill.name}</span>
                <div className={styles.bar_container}>
                  <div className={styles.bar} style={{ width: skill.level + '%' }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
