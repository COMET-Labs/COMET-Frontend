import {useState} from 'react';
import Layout from '../../components/layouts/default';
import styles from './project.module.scss';
import CardData from '../../CardData';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {useMediaQuery} from 'react-responsive';
import Dialog from "@material-ui/core/Dialog";

export default function Project(){
    const ProjectData = CardData[0];
    const [showAllComments,setShowAllComments] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false)
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
      })

    return(
        <Layout darkTheme={false}>
            <div className={styles.all_content}>
                <div className={styles.big_card}>
                    <div>
                        {/* Background image and intro content here */}
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12" 
                    style={
                        isMobile
                        ?
                        {margin:"10px",borderRight:"0px"}
                        :
                        {margin:"10px",borderRight:"1.5px solid rgb(204, 203, 203)"}}>
                                <h1 className={styles.project_matter}>{ProjectData["matter"]}</h1>
                                <p className={styles.project_matter_detailed}>{ProjectData["matter-detailed"]}</p>
                                {ProjectData["contributors"].length<=6
                                ?
                                <div>
                                    <div style={{textAlign:"left"}}>
                                    {ProjectData["contributors"]
                                    .map((data)=>{
                                        return(
                                            <span>
                                                <img className={styles.contributor_image} src={data.image} />
                                            </span>
                                        )
                                    })}
                                    <button className={styles.join_button}>Join Project</button>
                                </div>
                                </div>
                                :
                                <div style={{textAlign:"left"}}>
                                    {ProjectData["contributors"]
                                    .slice(0,5)
                                    .map((data)=>{
                                        return(
                                            <span>
                                                <img className={styles.contributor_image} src={data.image} />
                                            </span>
                                        )
                                    })}
                                    <span className={styles.more_contributors}
                                    onClick={()=>{setDialogOpen(true)}}>+{ProjectData["contributors"].length-5}</span>
                                    <button className={styles.join_button}>Join Project</button>
                                </div>
                                }
                                <div className={styles.project_options}>
                                <span className={styles.like}>
                                    <FavoriteIcon color="error"/>
                                    <p style={{display:"inline",marginLeft:"5px"}}>Liked</p>
                                </span>
                                <span className={styles.bookmark}>
                                    <BookmarkIcon color="action"/>
                                    <p style={{display:"inline",marginLeft:"5px"}}>Save</p>
                                </span>
                                </div>
                                {
                                    ProjectData.comments.length<=2
                                    ?
                                    <div className={styles.all_comments}>
                                        {ProjectData.comments.map(data=>{
                                            return(
                                                <div>
                                                    <img src={data.image} className={styles.comment_image}/>
                                                    <span className={styles.comment_name}>{data.name}</span>
                                                    <span className={styles.comment_timestamp}>48 minutes ago</span>
                                                    <p className={styles.comment_matter}>{data.comment}</p>
                                                    <div className={styles.comment_break}></div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    :
                                    <div>
                                        {showAllComments==0
                                        ?
                                        <div className={styles.all_comments}>
                                            {ProjectData.comments
                                            .slice(0,2)
                                            .map((data)=>{
                                                return(
                                                    <div>
                                                        <img src={data.image} className={styles.comment_image}/>
                                                        <span className={styles.comment_name}>{data.name}</span>
                                                        <span className={styles.comment_timestamp}>48 minutes ago</span>
                                                        <p className={styles.comment_matter}>{data.comment}</p>
                                                        <div className={styles.comment_break}></div>
                                                    </div>
                                                );
                                            })
                                            }
                                            <p className={styles.show_more} onClick={
                                                ()=>{setShowAllComments(1)}
                                            }>View more comments</p>
                                        </div>
                                        :
                                        <div className={styles.all_comments}>
                                            {ProjectData.comments
                                            .map((data)=>{
                                                return(
                                                    <div>
                                                        <img src={data.image} className={styles.comment_image}/>
                                                        <span className={styles.comment_name}>{data.name}</span>
                                                        <span className={styles.comment_timestamp}>48 minutes ago</span>
                                                        <p className={styles.comment_matter}>{data.comment}</p>
                                                        <div className={styles.comment_break}></div>
                                                    </div>
                                                );
                                            })
                                            }
                                            <p className={styles.show_more} onClick={
                                                ()=>{setShowAllComments(0)}
                                            }>View less comments</p>
                                        </div>
                                        }
                                    </div>
                                }
                                <textarea placeholder="Enter a comment" className={styles.comment_field}></textarea>
                                <button className={styles.comment_button}>Comment</button>
                            </div>
                            <div className={"col-lg-5 col-md-5 col-sm-12 "+styles.lang_and_tags}>
                                <h2 className={styles.languages_heading}>Languages</h2>
                                {
                                    ProjectData.languages.map(data=>{
                                        return(
                                            <p className={styles.language_name}>{data}</p>
                                        );
                                    })
                                }
                                <h2 className={styles.languages_heading}>Tags</h2>
                                {
                                    ProjectData.tags.map(data=>{
                                        return(
                                            <button className={styles.tag_name}>{data}</button>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog 
                open={dialogOpen}
                onBackdropClick={()=>{setDialogOpen(false)}}>
                    <h2 style={{margin:"10px"}}>LIST OF CONTRIBUTORS</h2>
                    {ProjectData.contributors.map(data=>{
                        return(
                            <div>
                            <img src={data.image} className={styles.dialog_contributor_image}/>
                            <span>{data.name}</span>
                            </div>
                        )
                    })}
                </Dialog>
            </div>
        </Layout>
        
    )
}