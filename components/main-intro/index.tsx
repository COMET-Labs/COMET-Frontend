
import  styles from './main-intro.module.scss';

function MainIntro(props) {
  return (
    <div className="container">
      <div className="row"> 
        <img src={props.params.image} className={"col-lg-6 col-md-6 col-sm-12 "+styles.image}/>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h3 className={styles.hello_msg}>Hi there!  <span className="iconify" style={{float:"right"}} color="#20c95c" data-icon="bx-bxs-pencil" data-inline="false"></span></h3>
          <h2 className={styles.i_am}>I'm <span className={styles.name}>{props.params.name}</span></h2>
          <p className={styles.intro_text}>{props.params.intro}</p>
          <a className={styles.button} href={props.params.cvlink}>Download CV</a>
          <div className={styles.all_icons}>
            <a href={props.params.insta}><span className={"iconify "+styles.icon} color="black" data-icon="ant-design:instagram-outlined" data-inline="false"></span></a>
            <a href={props.params.twitter}><span className={"iconify "+styles.icon} color="black" data-icon="ant-design:twitter-outlined" data-inline="false"></span></a>
            <a href={props.params.fb}><span className={"iconify "+styles.icon} color="black" data-icon="bx:bxl-facebook" data-inline="false"></span></a>
            <a href={props.params.behance}><span className={"iconify "+styles.icon} color="black" data-icon="ant-design:behance-outlined" data-inline="false"></span></a>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default MainIntro;
