import React from "react";
import web from "../src/images/img1.svg";
import web2 from "../src/images/img2.svg";
import web3 from "../src/images/imgs2.svg";
import web4 from "../src/images/img4.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import First from "./First";
import Second from "./Second";

const App = () => {
    return(
        <>
          <First heading = "Lorem ipsum dolor sit amet."
                  matter = "Cras imperdiet, nulla sit amet iaculis malesuada, purus mi tristique enim, quis vestibulum sapien felis eget nunc."
                  imgsrc= {web} />
          <Second heading = "Pellentesque sit amet auctor risus."
                  matter = "Pellentesque sit amet auctor risus. Cras vitae suscipit ex. Pellentesque sit amet auctor risus." 
                  imgsrc= {web2} />
          <First heading = "Sed neque risus, venenatis. "
                  matter = "Aliquam feugiat dui vitae efficitur tincidunt. Cras blandit convallis quam sit amet aliquam. Aliquam aliquet molestie condimentum."
                  imgsrc= {web3} />
          <Second heading = "Pellentesque sit amet auctor risus."
                  matter = "Quisque et egestas quam. Fusce ornare scelerisque orci elementum suscipit. Vestibulum eget orci dapibus, luctus sapien quis, tempor enim." 
                  imgsrc= {web4} />
        </>
    );
};

export default App;
