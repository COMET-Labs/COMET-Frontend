import styles from './timeline.module.scss';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function TimeLineDark(props){
    const classes = useStyles();

  return (
    <div>
    <h1 className={styles.timeline_header}>TIMELINE</h1>
    <Timeline align="alternate">
        {props.work.map((company,index)=>{
            return(
                <TimelineItem key={index}>
                    <TimelineOppositeContent>
                    <Typography className={styles.content} variant="body2" color="textSecondary">
                        <p style={{color:"#ebebeb"}}>{company.start}</p>
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <WorkIcon color="primary"/>
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className={styles.content} variant="h6" component="h1">
                        <p style={{color:"#ebebeb"}}>{company.name}</p>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            )
        })}
        {props.edu.map((institute)=>{
            return(
                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography variant="body2">
                        <p style={{color:"#ebebeb"}}>{institute.start}</p>
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <SchoolIcon color="primary"/>
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="h1">
                        <p style={{color:"#ebebeb"}}>{institute.shortname}</p>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            )
        })}
        </Timeline>
    </div>
  );
}

export default TimeLineDark;