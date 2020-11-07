import React from 'react';

const Skills = (props)=>{
    return(
    <div className="skills" style={{textAlign:"center",paddingTop:"5%"}}>
        <h1 style={{marginBottom:"5%"}}>My Skills</h1>
        <div className="container">
            <div className='row'>
                {props.params.map(item=>{
                    return(
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h2>{item.name}</h2>
                        <img className="skill-img" src={item.image}/>
                        <p>{item.description}</p>
                        <div className="bar-container" style={{display:"inline"}}>
                        <div className="bar" style={{width:item.rating+"%",border:"solid",borderWidth:"100%"}}></div>
                        <p style={{textAlign:"center"}}>Skill Level: {item.rating}%</p>
                    </div>
                    </div>)
                })}
            </div>
        </div>
    </div>);
}

export default Skills;