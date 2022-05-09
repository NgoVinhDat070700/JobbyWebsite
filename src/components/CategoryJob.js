import React from "react"

import Category1 from "../assets/images/01_homepage.png";
import Category2 from "../assets/images/01_homepage2.png";
import Category3 from "../assets/images/01_homepage4.png";
import Category4 from "../assets/images/01_homepage4.png";
import Category5 from "../assets/images/01_homepage5.png";
import Category6 from "../assets/images/01_homepage6.png";
import Category7 from "../assets/images/01_homepage7.png";
import Category8 from "../assets/images/01_homepage8.png";
import Category9 from "../assets/images/01_homepage9.png";
import Category10 from "../assets/images/01_homepage10.png";
import Category11 from "../assets/images/01_homepage11.png";
import Category12 from "../assets/images/01_homepage12.png";
import  '../assets/css/main.css'
function CategoryJob(){
    return (
        <section className="choose__jobs_section">  
            <div className="choose__job__title">
                <h2>Choose Job Category</h2>
                <p>Best Jobs All Categories</p>
                <hr className="hr_offer"/>
            </div>
            <div className="grid__choose">
                <div className="grid__choose__item">
                    <div className="image"><img src={Category1} alt="" /></div>
                    <div className="name__category padding_item">Education & Training</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image"> <img src={Category2} alt="" /></div>
                  
                    <div className="name__category padding_item">Sales & Marketing</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image"><img src={Category3} alt="" /></div>
                   
                    <div className="name__category padding_item">Programming</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image"><img src={Category4} alt="" /></div>
                   
                    <div className="name__category padding_item">Admin Support</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                    <div className="image"><img src={Category5} alt="" /></div>
                    <div className="name__category padding_item">Design & Multimedia</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image"> <img src={Category6} alt="" /></div>
                  
                    <div className="name__category padding_item">Web Developer</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image">  <img src={Category7} alt="" /></div>
                 
                    <div className="name__category padding_item">Writing</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image"> <img src={Category8} alt="" /></div>
                  
                    <div className="name__category padding_item">Legal</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image"><img src={Category9} alt="" /></div>
                   
                    <div className="name__category padding_item">IT & Networking</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image"><img src={Category10} alt="" /></div>
                   
                    <div className="name__category padding_item">Sales & Marketing</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image"> <img src={Category11} alt="" /></div>
                  
                    <div className="name__category padding_item">Customer Service</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
                <div className="grid__choose__item">
                     <div className="image"> <img src={Category12} alt="" /></div>
                  
                    <div className="name__category padding_item">Translation</div>
                    <div className="sum__job padding_item">150 jobs</div>
                </div>
            </div>
        </section>
    )
}
export default CategoryJob