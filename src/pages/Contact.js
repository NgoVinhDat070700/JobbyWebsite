import React from "react"
import '../assets/css/contact.css'
import BannerPageTitle from "../components/BannerPageTitle"
function Contact(){
    return (
        <main>
        <BannerPageTitle pageName="Contact" />
        
        <section class="main__contact__section">
            <div class="banner_contact"></div>
            <div class="form-contact">
                <div class="info_contact">
                    <p>Opening a ticket is the fastest and most efficient method of support</p>
                    <h2>Contact Information</h2>
                    <hr class="checkout-hr" />
                    <div class="address">
                        <i class="fa-solid fa-map-location"></i>
                        <strong>Address:</strong>
                        <p>#1234,Sks Nagar,Near MBD Mail 141001 India </p>
                    </div>
                    <div class="email">
                        <i class="fa-solid fa-envelope"></i>
                        <strong>Email:</strong>
                        <p>Support@jobby.com</p>
                    </div>
                </div>
                <div class="form_contact">
                    <div class="contact__title">
                        <h2>Open a Ticket</h2>
                        <hr class="checkout-hr" />
                    </div>
                    <form id="form-contact" action="">
                        <div class="input__name__email">
                            <div class="input__name">
                                <span>Name*</span>
                                <input type="text" placeholder="Enter Name" />
                            </div>
                            <div class="input__email">
                                <span>Email Address*</span>
                                <input type="text" placeholder="Email Address" />
                            </div>
                        </div>
                        <div class="subject">
                            <span>
                                Subject*
                            </span>
                            <input type="text" pattern="Subject" />

                        </div>
                        <div class="message">
                            <span>Message*</span>
                            <textarea rows="7" cols="54"></textarea>
                        </div>
                        <button class="send_message">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>

    </main>
    )
}
export default Contact