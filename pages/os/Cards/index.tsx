import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Card(props) {
  return (
    <div className="container mt-4">
      <div className={"row row-cols-1 row-cols-md-1 row-cols-lg-2"}>
        <div className="col">
          <section className="card mb-5 border round">
            <div className="row ">
              <div className="col-md-6 "><img src={props.params.image} className={"profile round img-fluid p-2"} /></div>
              <div className="col-md-6">
                <div className="card-body">
                  <div className="card-header pt-0 d-flex flex-wrap justify-content-between bg-white">
                    <a><img src={props.params.user} /></a>
                    <h6 className="mt-1 text-primary">{props.params.name}</h6>
                    <a><img src={props.params.github} /></a>
                  </div>
                  <h4 className="card-title mt-2">{props.params.project_name}</h4><p>{props.params.matter}</p>
                  <div className="card-footer pb-0 d-flex justify-content-between bg-white">
                    <a><img src={props.params.like_btn} /></a><a><img src={props.params.bookmark} /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col">
          <section className="card mb-5 border round">
            <div className="row ">
              <div className="col-md-6 "><img src={props.params.image} className={"profile round img-fluid p-2"} /></div>
              <div className="col-md-6">
                <div className="card-body">
                  <div className="card-header pt-0 d-flex flex-wrap justify-content-between bg-white">
                    <a><img src={props.params.user} /></a>
                    <h6 className="mt-1 text-primary">{props.params.name}</h6>
                    <a><img src={props.params.github} /></a>
                  </div>
                  <h4 className="card-title mt-2">{props.params.project_name}</h4><p>{props.params.matter}</p>
                  <div className="card-footer pb-0 d-flex justify-content-between bg-white">
                    <a><img src={props.params.like_btn} /></a><a><img src={props.params.bookmark} /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

