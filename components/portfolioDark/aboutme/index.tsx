import styles from './aboutme.module.scss'

function AboutMeDark(props) {
  return (
    <div>
      <h1 className={styles.about_me_header}>ABOUT ME</h1>
      <p className={"col-lg-9 col-md-10 col-sm-12 "+styles.about_me_matter}>{props.params.matter}</p>
      <div className={"col-lg-9 col-md-10 col-sm-12 "+styles.all_contacts}>
        <div className={"col-lg-4 col-md-4 col-sm-12 "+styles.contact}>
          <span className={"iconify "+styles.icon} color="#767BFE" data-icon="gridicons:location" data-inline="false"></span>
          {props.params.location}
        </div>
        <div className={"col-lg-4 col-md-3 col-sm-12 "+styles.contact}>
        <span className={"iconify "+styles.icon} color="#767BFE" data-icon="ic:baseline-email" data-inline="false"></span>
        {props.params.email}
        </div>
        <div className={"col-lg-4 col-md-3 col-sm-12 "+styles.contact}>
        <span className={"iconify "+styles.icon} color="#767BFE" data-icon="fa-solid:phone-alt" data-inline="false"></span>
        {props.params.phone}
        </div>
        </div>
      </div>
  );
}

export default AboutMeDark;
