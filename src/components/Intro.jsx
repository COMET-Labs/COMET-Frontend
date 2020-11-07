import React from 'react'

const Intro = (props)=>{
    return (
    <div className="container intro" style={{padding:"5%"}}>
        <div className="row">
            <div className='col-lg-6 col-md-12 intro-text' style={{padding:"7%"}}>
                <h1>HELLO,</h1>
                <h2>I'm {props.params.name}</h2>
                <h3>{props.params.description}</h3>
            </div>
            <div className='col-lg-6 col-md-12'>
              <img className="intro-img" src={props.params.image}/>
            </div>
        </div>
    </div>
    );
}

export default Intro;