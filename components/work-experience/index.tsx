import  styles from './work-exp.module.scss'

function WorkExperience(props) {
  return (
    <div>
      <h1 className={styles.work_header}>WORK EXPERIENCE</h1>
      {props.params.map((company)=>{
        return(
          <div className="container">
            <div className={"row "+styles.company}>
              <img src={company.image} className={"col-lg-4 col-md-6 col-sm-12 "+styles.image}></img>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h3 className={styles.date}>{company.start}-{company.end}</h3>
                <h2 className={styles.company_name}>{company.name}</h2>
                <h3 className={styles.company_matter}>{company.matter}</h3>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  );
}

export default WorkExperience;
