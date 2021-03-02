import  styles from './education.module.scss'

function EducationDark(props) {
  return (
    <div>
      <h1 className={styles.edu_header}>EDUCATION</h1>
      {props.params.map((institute,index)=>{
        return(
          <div className="container" key={index}>
            <div className={"row "+styles.institute}>
              <img src={institute.image} className={"col-lg-4 col-md-6 col-sm-12 "+styles.image}></img>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <h3 className={styles.date}>{institute.start}-{institute.end}</h3>
                <h2 className={styles.institute_name}>{institute.name}</h2>
                <h3 className={styles.institute_matter}>{institute.matter}</h3>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default EducationDark;
