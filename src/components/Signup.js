import React, { Component } from 'react';


class Signup extends Component {
     render() {
         return(
           <div className="form">
              <div className="form-group">
                 <label for="email">Email address:</label>
                 <input type="email" className="form-control" id="email"/>
              </div>
              <div className="form-group">
                 <label for="pwd">Password:</label>
                 <input type="password" className="form-control" id="pwd"/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
           </div>
         )
     }
}


export default Signup;