import Layout from '../../components/layouts/default';
import Card from '../../components/os/Cards/index';
import CardData from '../../CardData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {InputGroup, FormControl} from 'react-bootstrap';
import  styles from './os.module.scss';

export default function OS(){
    return(
        <Layout darkTheme={false}>
            <div style={{backgroundColor:" rgb(250, 250, 250)"}}>
            <div className="container" style={{maxWidth:"1600px"}}>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        {/* Keep the code for search section here */}
                        {/* This is the search section */}
                        <div className={styles.card}>
                            <div className="container">
                                <div className={styles.search}>
                                <InputGroup>
                                    <FormControl className={styles.bar}/>
                                    <InputGroup.Append>
                                    <InputGroup.Text className={styles.bar}><i className={`${styles.fa} fa fa-search`}></i></InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                </div>
                                <div className={styles.title}>Search Results</div>
                                <p className={styles.text}>Graphic Designing</p>
                                <p className={styles.text}>Design</p>
                                <p className={styles.text}>Graphics</p>
                                <p className={styles.text}>Another Search Result</p>
                                <a className={styles.link} href="#">Load More..</a>
                                <div className={styles.title}>Popular Topics</div>
                                <p className={styles.text}>Name of the topic</p>
                                <p className={styles.text}>Name of another topic</p>
                                <p className={styles.text}>Topic name</p>
                                <p className={styles.text}>One more topic name</p>
                                <div className={styles.title}>Recent Searches</div>
                                <p className={styles.text}>Name of the topic</p>
                                <p className={styles.text}>Name of another topic</p>
                                <p className={styles.text}>Topic name</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12" 
                    style={{marginTop:"10px",marginBottom:"10px"}}>
                        <div className="container">
                            <div className="row">
                                {CardData.map((data,index)=>{
                                    return(
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <Card params={data} />
                                        </div>
                                    )
                                })}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}