import  styles from './navbar.module.scss'
import  {Navbar,Nav} from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg">
            <div className={`row order-lg-last order-sm-first ${styles.profile}`}>
              <div className={`col ${styles.first}`}>
                <div className={`row ${styles.name}`}>
                  <span className={styles.fname}>Shashi&nbsp;</span>
                  <span className={styles.lname}>Shekhar</span>
                </div>
                <div className="row">
                <span className={styles.institute}>IIITDM Jabalpur</span>
                
                </div>
                </div>
                <div className={`col ${styles.second}`}>
                 <img src="https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg" className={styles.pic}/> 
                </div>
                </div>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-center" style={{flex:1}}>
              <div className="row">
               <Nav.Link href="#" className={styles.links}>Feed</Nav.Link>
               <Nav.Link href="#" className={styles.links}>OS</Nav.Link>
               <Nav.Link href="#" className={styles.links}>Startup</Nav.Link>
               <Nav.Link href="#" className={styles.links}>Alumni Network</Nav.Link>
               <Nav.Link href="#" className={styles.links}>Internship</Nav.Link>
               <Nav.Link href="#" className={styles.links}>Events</Nav.Link>
              </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
  );
}

export default NavBar;
