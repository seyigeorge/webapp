import React, {Component} from "react";
import "./Login.css";

class Login extends Component {
    render() {
        return(
            <div className="form">
                <div className="form-group">
                     <label for="email">Email address:</label>
                     <input type="email" class="form-control" id="email"/>
                </div>
                <div className="form-group">
                     <label for="pwd">Password:</label>
                     <input type="password" class="form-control" id="pwd"/>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </div>
        )
    }
}

export default Login;