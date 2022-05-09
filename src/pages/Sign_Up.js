import React from "react"
import "../assets/css/sign_up.css"
import BannerPageTitle from "../components/BannerPageTitle"
function Sign_Up(){
    return (
        <main>
        <BannerPageTitle pageName="Sign Up" />
        
        <section class="section__signup">
            
            <div class="left-sign-in-title">
                <h3>Sign Up to Jobby</h3>
                <hr class="checkout-hr" />
            </div>

        <form action="" class="main-sign-up">
            <div class="title-email-password">
                <p>Email/Address*</p>
                <input type="text" placeholder="Enter Email/Address"/>
            </div>

            <div class="title-email-password">
                <p>Password*</p>
                <input type="password" placeholder="Enter Password"/>
                <span><i class="fas fa-eye"></i></span>
            </div>

            <div class="title-email-password">
                <p>Confirm Password*</p>
                <input type="text" placeholder="Enter Confirm Password"/>
            </div>

         
            <input type="checkbox" checked id="check"/>
            <label for="check" class="check-accept">I accept the <a href="">Terms of Services</a></label>
            
            <button class="btn-next">NEXT</button>

            <div class="sign-in-now">
                <p>Already have an account ?</p>
                <a href="">Sign in Now </a>
            </div>
        </form>
            
        </section>

    </main>
    )
}
export default Sign_Up