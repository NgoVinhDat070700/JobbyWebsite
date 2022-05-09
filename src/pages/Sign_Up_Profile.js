import React from "react"
import SignUpProfile from '../assets/images/51_sign_up_select_profile.png'
import SignUpProfile2 from '../assets/images/51_sign_up_select_profile 2.png'
import '../assets/css/sign_up_profile.css'
function Sign_Up_Profile(){
    return(
        <main>
        <section class="banner__page__title">
            <div class="banner__page__content">
                <div class="banner__left">Sign Up</div>
                <div class="banner__right">Home / Sign Up</div>
            </div>
        </section>
        <section class="main__pricing__plan">
            <div class="pricing__title">
                <h2>Sign Up</h2>
                <hr class="hr_pricing"/>
                <h2>Choose Your Profile</h2>
           
            
                    <div class="container__pricing__lists">
                        <div class="pricing__item">
                            <div class="pricing__content">
                             <img src={SignUpProfile} />
                                <h3>FREELANCE</h3>
                                <h3 class="bg-color">Start a Feelance Profile</h3>
                                
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur suscipit neque saepe, reiciendis, officiis</p>
                            </div>
                            <div class="button_Free">
                                    SIGNUP FREELANCE PROFILE
                            </div>
                            
                        </div>
                        <div class="pricing__item">
                            <div class="pricing__content">
                             <img src={SignUpProfile2} />
                                <h3>COMPANY</h3>
                                <h3 class="bg-color">Start a Company Profile</h3>
                               
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur suscipit neque saepe, reiciendis, officiis</p>
                            </div>
                            <div class="button_company">
                                SIGNUP COMPANY PROFILE
                                </div>
                            
                        </div>
                        
                    </div>
                </div>
        </section>
    </main>
    )
}
export default Sign_Up_Profile