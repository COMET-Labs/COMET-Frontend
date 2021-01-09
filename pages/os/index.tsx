import Layout from '../../components/layouts/default';
import Card from '../../components/os/Cards/index';
import CardData from '../../CardData';

export default function OS(){
    return(
        <Layout darkTheme={false}>
            <div style={{backgroundColor:" rgb(250, 250, 250)"}}>
            <div className="container" style={{maxWidth:"1600px"}}>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        {/* Keep the code for search section here */}
                        This is the search section
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