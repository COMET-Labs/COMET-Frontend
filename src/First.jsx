import React from "react";
import { NavLink } from "react-router-dom";

const First = (props) => {
    return(
        <>
          <section id="header" className="d-flex pt-5 align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                      <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            
                            <h1>
                                <strong className="brand-name">IIITians Network</strong> {props.heading} 
                            </h1>
                            <h2 className="my-3">
                                {props.matter}
                            </h2>
                            <div className="mt-3">
                                <NavLink to="/" className="btn-get-started">
                                    Get Started
                                </NavLink>
                                <br></br><br></br>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated image" alt="IIITian"/>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
          </section>
        </>
    );
};

export default First; 
