import { ArrowDropDown, Email, LanguageOutlined, Notifications, Search, SearchOffOutlined } from "@mui/icons-material"
import { Menu } from "@mui/material"
import React from "react"
import { Link} from "react-router-dom"
import '../assets/css/header.css'

function Navbar(){
    return (
        <header>
            <div className="head">
                <div className="head-left">
                    <li className="header__navlinks welcome">Welcome to Jobby</li>
                    <li className="header__navlinks language">
                        <LanguageOutlined color="#757575" fontSize="inherit" className="icon" />
                        <li className="header__navlinks" className="en">EN</li>
                        <ArrowDropDown fontSize="inherit"  className="icon"/>
                    </li>
                </div>
                <div className="head-right">
                <li className="header__navlinks "><div className="notifications">
                <Email fontSize="inherit" className="icon" /><p className="dot"></p></div></li>
                <li className="header__navlinks "><div className="notifications"><Notifications fontSize="inherit" className="icon" /><p className="dot"></p></div></li>
                <li className="header__navlinks profile" >
                    <img className="header__avatar-profile" src="https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg" alt="" />
                    <span>Avatar</span>
                    <ArrowDropDown fontSize="inherit" className="icon" />
                </li>
                </div>
            </div>
            <nav>
                <div className="container">
                    <div className="row__navbar">
                        <div className="col-logo">
                            <img className="header__logo logo" src="https://i.pinimg.com/736x/6e/af/1a/6eaf1a844ae4b6fa6eeb6ff17f468cc0.jpg" alt=""/>
                            <h1>Jobby</h1>
                            <li className="item">
                                <Menu fontSize="inherit" className="icon" />
                            </li>
                        </div>
                        <div className="col">
                        <ul className="top-bar__menu-list">
                            <li className="item"><Link to="/">Home</Link></li>
                            <li className="item">
                                <a href="#">Find Jobs</a>
                                <ul>
                                    <li className="item"><Link to="browser_Job">Browse Jobs</Link></li>
                                    <li className="item"><Link to="job_sing_view">Single Job View</Link></li>
                                    <li className="item"><Link to="job_sing_view">Post a Job</Link></li>
                                </ul>
                            </li>
                            <li className="item">
                                <a href="#">Find Work</a>
                                <ul>
                                    <li className="item"><Link to="browser_Project">Browse Project</Link></li>
                                    <li className="item"><a href="single_project_view.html">Single Job View</a></li>
                                    <li className="item"><a href="single_project_view.html">Post a Job</a></li>
                                </ul>
                            </li>
                            <li className="item">
                                <a href="#">Find Company</a>
                                <ul>
                                    <li className="item"><Link to="browser_Company">Browse Company</Link></li>
                                    <li className="item"><a href="freelancers_profile.html">Company Profile</a></li>
                                </ul>
                            </li>
                            <li className="item">
                                <a href="#">Find Freelance</a>
                                <ul>
                                    <li className="item"><Link to="browser_Freelancer">Browse Freelance</Link></li>
                                    <li className="item"><a href="freelancers_profile.html">Freelance Profile</a></li>
                                </ul>
                            </li>
                            <li className="item">
                                <a href="#">Page</a>
                                <ArrowDropDown fontSize="inherit" className="icon" />
                                <ul>
                                    <li className="item"><Link to="about">About</Link></li>
                                    <li className="item"><Link to="blog">Our Blog</Link></li>
                                    <li className="item"><Link to="">Single Blog View</Link></li>
                                    <li className="item"><Link to="pricing">Pricing Plans</Link></li>
                                    <li className="item"><Link to="checkout">Checkout</Link></li>
                                    <li className="item"><Link to="invoice_view">Invoice Slip</Link></li>
                                    <li className="item"><Link to="invoice_view">Invoice Slip</Link></li>
                                    <li className="item"><Link to="login">Sign in</Link></li>
                                    <li className="item"><Link to="register">Sign up</Link></li>
                                    <li className="item"><Link to="sign_up_profile">Sign up Select Profile</Link></li>
                                    <li className="item"><Link to="#">Create Freelancer Profile</Link></li>
                                    <li className="item"><Link to="#">Create Company Profile</Link></li>
                                    <li className="item"><Link to="contact">Contact</Link></li>
                                    <li className="item"><Link to="help_center">Help Center</Link></li>

                                </ul>
                            </li>
                        
                        </ul>
                        <ul>
                            <li className="icon-search item">
                                <Search fontSize="small" />
                            </li>
                         
                        </ul>
                        <ul className="button__menu">
                            <li className="item">
                                <li >
                                    <a className="nav__button" href="#">POST A JOB</a>
                                    <a className="nav__button nav_button_black" href="#">POST A TASK</a>
                                </li>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
            <nav >
            <ul className="responsive_menu">
                <li className="item"><a href="index.html">Home</a></li>
                <li className="item">
                    <a href="#">Find Jobs</a>
                    <ul>
                        <li className="item"><a href="job_grid.html">Browse Jobs</a></li>
                        <li className="item"><a href="job_sing_view.html">Single Job View</a></li>
                        <li className="item"><a href="job_sing_view.html">Post a Job</a></li>
                    </ul>
                </li>
                <li className="item">
                    <a href="#">Find Work</a>
                    <ul>
                        <li className="item"><a href="browser_project_grid.html">Browse Project</a></li>
                        <li className="item"><a href="single_project_view.html">Single Job View</a></li>
                        <li className="item"><a href="single_project_view.html">Post a Job</a></li>
                    </ul>
                </li>
                <li className="item">
                    <a href="#">Find Company</a>
                    <ul>
                        <li className="item"><a href="company_gird.html">Browse Company</a></li>
                        <li className="item"><a href="freelancers_profile.html">Company Profile</a></li>
                    </ul>
                </li>
                <li className="item">
                    <a href="#">Find Freelance</a>
                    <ul>
                        <li className="item"><a href="freelancers_grid.html">Browse Freelance</a></li>
                        <li className="item"><a href="freelancers_profile.html">Freelance Profile</a></li>
                    </ul>
                </li>
                <li className="item">
                    <a href="#">Page</a>
                    <ArrowDropDown fontSize="inherit" className="icon"  />
                    <ul>
                        <li className="item"><a href="#">About</a></li>
                        <li className="item"><a href="#">Our Blog</a></li>
                        <li className="item"><a href="#">Single Blog View</a></li>
                        <li className="item"><a href="#">Pricing Plans</a></li>
                        <li className="item"><a href="#">Checkout</a></li>
                        <li className="item"><a href="#">Invoice Slip</a></li>
                        <li className="item"><a href="#">Invoice Slip</a></li>
                        <li className="item"><a href="#">Sign in</a></li>
                        <li className="item"><a href="#">Sign up</a></li>
                        <li className="item"><a href="#">Sign up Select Profile</a></li>
                        <li className="item"><a href="#">Create Freelancer Profile</a></li>
                        <li className="item"><a href="#">Create Company Profile</a></li>
                        <li className="item"><a href="#">Contact</a></li>
                        <li className="item"><a href="#">Help Center</a></li>

                    </ul>
                </li>
            
            </ul>
        </nav>
        
        </header>
    )
}
export default Navbar