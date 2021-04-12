import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from './cards.module.scss';

export default function Card(props) {
  return (
    <div className={"container "+styles.card}>
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6" style={{padding:"0"}}><img src={props.params.image} className={"img-fluid p-2 "+styles.project_image} /></div>
          <div className="col-lg-6 col-md-6 col-sm-6" style={{marginTop:"10px"}}>
              <div className="card-header pt-0 d-flex flex-wrap justify-content-between bg-white"
              style={{display:"inline"}}>
                <a><img src={props.params.user} className={styles.icon}/></a>
                <h6 className={"mt-1 text-primary "+styles.author_name}>{props.params.name}</h6>
                <a><img src={props.params.github} className={styles.icon}/></a>
              </div>
              <h4 className={"card-title mt-2 "+styles.project_name}>{props.params.project_name}</h4>
              <p className={styles.project_description}>{props.params.matter}</p>
              <div className="card-footer pb-0 d-flex bg-white">
                <a><img src={props.params.like_btn} /></a>
                <span className={styles.like_ctr}>({props.params.likes})</span>
                <a style={{position:"absolute",right:"10px"}}><img src={props.params.bookmark} /></a>
              </div>
          </div>
          </div>
        </div>
  );
}

