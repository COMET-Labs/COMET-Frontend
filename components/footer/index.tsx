import  styles from './footer.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer=()=> {
  return(
        <div className={styles.footer}>
            <div className="container">
            <div className="row ">             
                <div className={`${styles.footersection} col-lg-3 col-md-6 col-sm-12`}> 
                    <h5 className={styles.linktitle}>Company</h5>
                    <ul className="list-unstyled">
                        <li><a className={styles.link} href="#">About</a></li>
                        <li><a className={styles.link} href="#">Blog</a></li>
                        <li><a className={styles.link} href="#">Jobs</a></li>
                        <li><a className={styles.link} href="#">Privacy</a></li>
                        <li><a className={styles.link} href="#">Terms</a></li>
                    </ul>
                </div>
                <div className={`${styles.footersection} col-lg-3 col-md-6 col-sm-12`}>
                <ul className="list-unstyled">
                    <h5 className={styles.linktitle}>Divisions</h5>
                        <li><a className={styles.link} href="#">COMET</a></li>
                        <li><a className={styles.link} href="#">IIITians Network</a></li>
                        <li><a className={styles.link} href="#">IITians Network</a></li>
                        <li><a className={styles.link} href="#">NITians Network</a></li>
                    </ul>
                </div>
                <div className={`${styles.footersection} col-lg-3 col-md-6 col-sm-12`}>
                <h5 className={styles.linktitle}>Services</h5>
                <ul className="list-unstyled">
                        <li><a className={styles.link} href="#">Tech-Events</a></li>
                        <li><a className={styles.link} href="#">Startup Portal</a></li>
                        <li><a className={styles.link} href="#">Alumni Network</a></li>
                        <li><a className={styles.link} href="#">Internships</a></li>
                        <li><a className={styles.link} href="#">OS & Hackathons</a></li>
                    </ul>
                </div>
                <div className={`${styles.footersection} col-lg-3 col-md-6 col-sm-12`}>
                <h5 className={styles.linktitle}>Support</h5>
                <ul className="list-unstyled">
                        <li><a className={styles.link} href="#">Help</a></li>
                        <li><a className={styles.link} href="#">Contact Us</a></li>
                    </ul>
                    <div className={`${styles.icon_row} col-sm-12`}>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-facebook`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-instagram`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-linkedin`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-twitter`}></i></a>
                    </div>
                    <div className={`${styles.icon_row} col-sm-12`}>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-facebook`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-instagram`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-linkedin`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-twitter`}></i></a>
                    </div>
                    <div className={`${styles.icon_row} col-sm-12`}>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-facebook`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-instagram`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-linkedin`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-twitter`}></i></a>
                    </div>
                    <div className={`${styles.icon_row} col-sm-12`}>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-facebook`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-instagram`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-linkedin`}></i></a>
                    <a className={styles.socialicon} href="#"><i className={`${styles.fa} fa fa-twitter`}></i></a>
                    </div>
                    
                </div>
            </div>
            <hr/>
            <div className="row">             
                <div className="col-sm-12">
                    <p className={styles.subtitle}>© 2020-IIITians Network</p>
                </div>
            </div>
            </div>
    </div>
    )
}

export default Footer;

