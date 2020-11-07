import React from 'react'

const AboutMe = (props)=>{
    return (
        <div className="container about-me">
        <div className="row">
            <div className='col-lg-6 col-md-12'>
              <img className="about-me-image" src={props.params.image}/>
            </div>
            <div className='col-lg-6 col-md-12 about-me-text'>
                <h1>ABOUT ME</h1>
                <h2>{props.params.head}</h2>
                <h3>{props.params.body}</h3>
            </div>
        </div>
    </div>
    )
};

export default AboutMe;