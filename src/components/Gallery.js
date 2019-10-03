import React, { Component } from "react";
import image7 from "../Images/image7.jpg";


class Gallery extends Component {
    render () {
        return(
              <div>  
                 <div className="row" style={{width:"100%"}}>
                      <img src={image7} alt=""  />
                 </div>
                 
                                       
               </div>
        )
    }
}

export default Gallery;
