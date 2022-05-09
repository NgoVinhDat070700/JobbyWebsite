import React from "react"
import '../assets/css/signin.css'
import Image from '../assets/images/49_sign_in.png'
import BannerPageTitle from "../components/BannerPageTitle"
function Sign_In(){
    return(
        <main>
            <div>
            <BannerPageTitle pageName="Sign In"  />
            <section className="section__signin">
                <form className="left-sign-in">
                <div className="left-sign-in-title">
                    <h3>Sign in to Jobby</h3>
                    <hr className="checkout-hr" />
                </div>
                    
    
                <div className="title-email-password">
                    <p>Email/Address*</p>
                    <input type="text" placeholder="Enter Email/Address" />
                </div>
    
                <div className="title-email-password">
                    <p>Password*</p>
                    <input type="password" placeholder="Enter Password" />
                </div>
    
                <button className="btn-sign-in">SIGN IN NOW</button>
                
                <div className="left-sign-in-bottom">
                    <div className="join-us-now">
                        <p>Need an account ? </p>
                        <a href="#">Join us now <i className="fa-solid fa-angles-right"></i></a>
                    </div>
    
                    <div className="forget-password">
                        <p>Forget Password ?</p>
                    </div>
                </div>
                </form>
                <div className="right-sign-in">
                <div className="right-sign-in-img">
                    <img src={Image} alt="" />
                </div>
            </div>
            </section>
        </div>
        </main>
    )
}
export default Sign_In