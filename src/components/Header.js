import React, { Component } from "react";
import "./Header.css";
import logo from "../Images/img1.jpg";
import Slider from "./Slider";
import Tabs from "./Tabs";
import Footer from "./Footer";
import image7 from "../Images/image7.jpg";
import { Link } from "react-router-dom";



class Header extends Component {
    render () {
        return (
              <div>
                 <div className="header">
                   <nav className="navbar navbar-inverse">
                     <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/"><a className="navbar-brand" style={{fontWeight:"bolder"}}>Webflow</a></Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Features</a>
                                 <div className="dropdown-menu"><a className="dropdown-item">Designer</a></div>
                                 <div className="dropdown-menu"><a className="dropdown-item">Interaction</a></div>
                                 <div className="dropdown-menu"><a className="dropdown-item">CMS</a></div>
                                 <div className="dropdown-menu"><a className="dropdown-item">E-commerce</a></div>
                                 <div className="dropdown-menu"><a className="dropdown-item">Editor</a></div>
                                 <div className="dropdown-menu"><a className="dropdown-item">Hosting</a></div>
                            </li>
                            <li><a>Customers</a></li>
                            <li><a>Templates</a></li>
                            <li className="divider"></li>
                            <li><a>Resources</a></li>
                         </ul>
                         <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span>Sign Up</Link></li>
                            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
                         </ul>
                     </div>
                     <div className="headerText">
                      <h1>Propel - Business Website Templates</h1>
                      <p>by webflow</p>
                      <button type="button" style={{borderRadius:"20px", marginRight:"20px"}}>Business</button>
                      <button type="button" style={{borderRadius:"20px", marginRight:"20px"}}>Small Business</button>
                      <button type="button" style={{borderRadius:"20px", marginRight:"20px"}}>CMS</button>
                      <p>A Versatile and dynamic template perfect for promoting your business and services</p>
                      <button type="button" className="btn btn-danger" style={{marginRight:"20px"}}>Use For Free</button>
                      <button type="button" className="btn">Preview</button>
                     </div>
                     <div className="Slider" style={{marginBottom:"40px", paddingLeft:"200px"}}>
                        <Slider/>
                     </div>
                   </nav>
                  
                  
                  </div>
                  
                   <div className="banner">
                       <img src={logo} style={{width:"54px"}} alt=""/>
                       <h2>CMS Ready</h2>
                       <p>This template comes with a pre-built CMS. Just add your content and you're <br/> ready to go — or customize the data structure however you'd like.</p>
                       <button type="button" style={{backgroundColor:"white", color:"blue"}}>Learn Webflow CMS</button>
                   </div>
                   < Tabs />
                   
                   <div className="banner">
                       <img src={logo} style={{width:"54px"}} alt=""/>
                       <h2>Fully Customizable in Webflow</h2>
                       <p>All templates were built by designers using Webflow without writing code. <br/> That means you can customize them using our visual interface too.</p>
                       <button type="button" style={{backgroundColor:"white", color:"blue"}}>Learn How</button>
                   </div>
                   <div className="Gallery">
                       <h4 style={{fontStyle:"roboto", fontWeight:"bolder", paddingLeft:"240px", paddingTop:"30px", paddingBottom:"20px"}}>More Website Templates</h4>
                       <div className="row" style={{width:"100%", textAlign:"center"}}>
                          <img src={image7} alt=""  />
                       </div>
                   </div>

                   <div className="Gallery">
                       <h4 style={{fontStyle:"roboto", fontWeight:"bolder", paddingLeft:"240px", paddingBottom:"20px"}}>More Designs</h4>
                       <div className="row" style={{width:"100%", textAlign:"center"}}>
                          <img src={image7} alt=""  />
                       </div>
                   </div>
                   <Footer />
                  
                   
                   


                </div>
        )
    }
}






export default Header;

