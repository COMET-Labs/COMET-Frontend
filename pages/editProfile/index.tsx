import {useState} from 'react';
import Layout from '../../components/layouts/default';
import styles from './editProfile.module.scss';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

export default function editProfile(){
    const [step, setStep] = useState(0);
    const [selectedStep, setSelectedStep] = useState(0);

    //STATE HOOKS FOR WORK EXPERIENCE
    const [workExperience, setWorkExperience] = useState(["ASd","Ads","ASD","ADS"]);
    const [selectedWorkExperience, setSelectedWorkExperience] = useState(-1);
    
    const isSmall = useMediaQuery({
        query: '(max-width: 960px)'
    });
    return(
        <Layout darkTheme={false}>
            <div className={styles.edit_profile_page}>
            <div className={styles.all_content}>
                <h2 className={styles.main_heading}>Complete Profile</h2>
                <Grid className={styles.main_content} container>
                    {
                        !isSmall
                        ?
                        <Grid item xs={12} sm={12} md={4} lg={3}>
                            <Grid container
                            className={selectedStep==0?styles.step_selected:styles.step_not_selected}
                            onClick={()=>{setSelectedStep(0)}}>
                                <Grid className={styles.step_heading} item xs={10} sm={10} md={10} lg={10}>
                                    <p>Basic Information</p>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                    {
                                        step>0
                                        ?
                                        <div>
                                            <CheckCircleOutlineOutlinedIcon style={{color:"#1bc47d",marginTop:"6px"}}>

                                            </CheckCircleOutlineOutlinedIcon>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </Grid>
                            </Grid>
                            <Grid container
                            className={selectedStep==1?styles.step_selected:styles.step_not_selected}
                            onClick={()=>{setSelectedStep(1)}}>
                                <Grid className={styles.step_heading} item xs={10} sm={10} md={10} lg={10}>
                                    <p>About Me</p>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                    {
                                        step>1
                                        ?
                                        <div>
                                            <CheckCircleOutlineOutlinedIcon style={{color:"#1bc47d",marginTop:"6px"}}>

                                            </CheckCircleOutlineOutlinedIcon>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </Grid>
                            </Grid>
                            <Grid container
                            className={selectedStep==2?styles.step_selected:styles.step_not_selected}
                            onClick={()=>{setSelectedStep(2)}}>
                                <Grid className={styles.step_heading} item xs={10} sm={10} md={10} lg={10}>
                                    <p>Social Accounts</p>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                    {
                                        step>2
                                        ?
                                        <div>
                                            <CheckCircleOutlineOutlinedIcon style={{color:"#1bc47d",marginTop:"6px"}}>

                                            </CheckCircleOutlineOutlinedIcon>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </Grid>
                            </Grid>
                            <Grid container
                            className={selectedStep==3?styles.step_selected:styles.step_not_selected}
                            onClick={()=>{setSelectedStep(3)}}>
                                <Grid className={styles.step_heading} item xs={10} sm={10} md={10} lg={10}>
                                    <p>Education</p>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                    {
                                        step>3
                                        ?
                                        <div>
                                            <CheckCircleOutlineOutlinedIcon style={{color:"#1bc47d",marginTop:"6px"}}>

                                            </CheckCircleOutlineOutlinedIcon>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </Grid>
                            </Grid>
                            <Grid container
                            className={selectedStep==4?styles.step_selected:styles.step_not_selected}
                            onClick={()=>{setSelectedStep(4)}}>
                                <Grid className={styles.step_heading} item xs={10} sm={10} md={10} lg={10}>
                                    <p>Work Experience</p>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                    {
                                        step>4
                                        ?
                                        <div>
                                            <CheckCircleOutlineOutlinedIcon style={{color:"#1bc47d",marginTop:"6px"}}>

                                            </CheckCircleOutlineOutlinedIcon>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </Grid>
                            </Grid>
                            <Grid container
                            className={selectedStep==5?styles.step_selected:styles.step_not_selected}
                            onClick={()=>{setSelectedStep(5)}}>
                                <Grid className={styles.step_heading} item xs={10} sm={10} md={10} lg={10}>
                                    <p>Projects</p>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                    {
                                        step>5
                                        ?
                                        <div>
                                            <CheckCircleOutlineOutlinedIcon style={{color:"#1bc47d",marginTop:"6px"}}>

                                            </CheckCircleOutlineOutlinedIcon>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </Grid>
                            </Grid>
                            <Grid container
                            className={selectedStep==6?styles.step_selected:styles.step_not_selected}
                            onClick={()=>{setSelectedStep(6)}}>
                                <Grid className={styles.step_heading} item xs={10} sm={10} md={10} lg={10}>
                                    <p>Skills</p>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                    {
                                        step>6
                                        ?
                                        <div>
                                            <CheckCircleOutlineOutlinedIcon style={{color:"#1bc47d",marginTop:"6px"}}>

                                            </CheckCircleOutlineOutlinedIcon>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </Grid>
                            </Grid>
                            <Grid container
                            className={selectedStep==7?styles.step_selected:styles.step_not_selected}
                            onClick={()=>{setSelectedStep(7)}}>
                                <Grid className={styles.step_heading} item xs={10} sm={10} md={10} lg={10}>
                                    <p>Club Membership</p>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                    {
                                        step>7
                                        ?
                                        <div>
                                            <CheckCircleOutlineOutlinedIcon style={{color:"#1bc47d",marginTop:"6px"}}>

                                            </CheckCircleOutlineOutlinedIcon>
                                        </div>
                                        :
                                        <div>

                                        </div>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                        :
                        <div></div>
                    }
                    <Grid item xs={12} sm={12} md={8} lg={9} className={styles.step_content}>
                        {
                            selectedStep==0
                            ?
                            <div>
                                Basic Information
                                <br></br>
                                this div contains basic info related inputs
                            </div>
                            :
                            <div>
                            </div>
                        }
                        {
                            selectedStep==1
                            ?
                            <div>
                                About Me
                            </div>
                            :
                            <div>
                            </div>
                        }
                        {
                            selectedStep==2
                            ?
                            <div>
                                Social Accounts
                            </div>
                            :
                            <div>
                            </div>
                        }
                        {
                            selectedStep==3
                            ?
                            <div>
                                Education
                            </div>
                            :
                            <div>
                            </div>
                        }
                        {
                            selectedStep==4
                            ?
                            <div>
                                <h2 className={styles.step_content_heading}>Work Experience</h2>
                                <Grid container className={styles.input_container}>
                                    {
                                        isSmall
                                        ?
                                        <Grid item xs={12} sm={12}>Enter details about your work experience</Grid>
                                        :
                                        <div></div>
                                    }
                                    <Grid item className={styles.step_content_side_section} xs={2} sm={2} md={3} lg={3}>
                                        {
                                            !isSmall
                                            ?
                                            <p className={styles.enter_details_heading}>Enter details about your work experience</p>
                                            :
                                            <div></div>
                                        }
                                        {workExperience.map((data,index)=>{
                                            return(
                                                <div style={{height:"50px"}}>
                                                <div className={styles.step_content_section_button}>
                                                    <p className={styles.step_content_section_button_text}>
                                                        {index+1}
                                                    </p>
                                                </div>
                                                <br></br>
                                                </div>
                                            )
                                            })
                                        }
                                        <div className={styles.step_content_section_button}>
                                            <p className={styles.step_content_section_button_text}>
                                                +
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item className={styles.step_content_main} xs={10} sm={10} md={9} lg={9}>
                                        <Grid container>
                                            <Grid item className={styles.image_grid} xs={12} sm={12} md={6} lg={5}>
                                                <img src="https://images.unsplash.com/photo-1600456899121-68eda5705257?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1125&q=80"
                                                 className={styles.input_image}></img>
                                                 <div className={styles.camera_icon}>
                                                     <CameraAltIcon></CameraAltIcon>
                                                 </div>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} lg={7}>
                                                <h3 className={styles.name_label}>
                                                    Company name<span style={{color:"red"}}>*</span>
                                                </h3>
                                                <input
                                                className={styles.name_input}
                                                placeholder="Enter company name">
                                                </input>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            :
                            <div>
                            </div>
                        }
                        {
                            selectedStep==5
                            ?
                            <div>

                            </div>
                            :
                            <div>
                            </div>
                        }
                        {
                            selectedStep==6
                            ?
                            <div>

                            </div>
                            :
                            <div>
                            </div>
                        }
                        {
                            selectedStep==7
                            ?
                            <div>

                            </div>
                            :
                            <div>
                            </div>
                        }
                    </Grid>
                </Grid>
                {
                    isSmall
                    ?
                    <div>
                        <MenuIcon
                        style={{
                            position:"fixed",
                            bottom:"25px",
                            left:"10px",
                            backgroundColor:"#767bfe",
                            borderRadius:"50%",
                            color:"white",
                            padding:"5px",
                            width:"40px",
                            height:"40px",
                            marginLeft:"10px",
                            marginTop:"10px"
                        }}>
                        </MenuIcon>
                    </div>
                    :
                    <div>
                    </div>
                }
            </div>
            </div>
        </Layout>
    )
}