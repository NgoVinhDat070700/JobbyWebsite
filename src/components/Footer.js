import { ArrowCircleUp, ArrowDropDown, CheckCircle, Facebook, Google, Instagram, LanguageOutlined, Twitter } from "@mui/icons-material"
import React from "react"
import '../assets/css/footer.css'
import Img from '../assets/images/44_invoice_view.png'
function Footer(){
    return(
        <footer>
            <div className="footer__head">
                <div className="footer__head__left">
                    <h2>Subscribe to Newletter</h2>
                    <div className="content__confirm btn-checkcicle">
                        <CheckCircle fontSize="inherit" />
                       
                        <p className="a-mo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem magnam itaque suscipit saepe at assumenda animi aut odio ullam accusamus, dignissimos fugit voluptas</p>
                    </div>
                </div>
                <div className="footer__head__right">
                    <form className="form-email" action="">
                        <input className="input__email " type="text" placeholder="Your Email Address" />
                        <button className="submit__email" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <hr />
            <div className="footer__body">
                <div className="footer__body__content">
                    <div className="content_block">
                        <img src={Img} />
                        <h2>Jobby</h2>
                    </div>
                    <p className="a-mo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eum, distinctio tempore nemo</p>
                </div>
                <div className="footer__body__content" >
                    <h2>About</h2>
                    <a className="a-mo" href="#">About Us</a>
                    <a className="a-mo" href="#">Login</a>
                    <a className="a-mo" href="#">My Account</a>
                    <a className="a-mo" href="#">Contact</a>
                    <a className="a-mo" href="#">Privacy Policy</a> 
                    <a className="a-mo" href="#">Term of Use</a>
                </div>
                <div className="footer__body__content">
                    <h2>About</h2>
                    <a className="a-mo" href="#">About Us</a>
                    <a className="a-mo" href="#">Login</a>
                    <a className="a-mo" href="#">My Account</a>
                    <a className="a-mo" href="#">Contact</a>
                    <a className="a-mo" href="#">Privacy Policy</a> 
                    <a className="a-mo" href="#">Term of Use</a>
                </div>
                <div className="footer__body__content">
                    <h2>About</h2>
                    <a className="a-mo" href="#">About Us</a>
                    <a className="a-mo" href="#">Login</a>
                    <a className="a-mo" href="#">My Account</a>
                    <a className="a-mo" href="#">Contact</a>
                    <a className="a-mo" href="#">Privacy Policy</a> 
                    <a className="a-mo" href="#">Term of Use</a>
                </div>
            </div>
            <hr />
            <div className="footer__bottom">
                <div className="footer__bottom__left">
                    <p className="a-mo">@Copyright 2018 Jobby All Right </p>
                </div>
                <div className="footer__bottom__right">
                    <div className="language__footer">
                        <LanguageOutlined />
                        <p>EN</p>
                        <ArrowDropDown />
                    </div>
                   <Facebook />
                    <Twitter />
                   <Google />
                    <Instagram />
                    
                </div>
            </div>
    </footer>

    )
}
export default Footer