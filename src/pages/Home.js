import { ArrowLeftOutlined, ArrowRightOutlined, CheckCircle, DoubleArrow, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import '../assets/css/main.css'
import CategoryJob from '../components/CategoryJob'
import Feature_Candidate from '../components/Feature_Candidate'
import Jobs from '../components/Jobs'
import Sliders from '../components/Sliders'
function Home(){
    return (
        <main>
            <section className="form-search">
            <div className="search-form">
                <div className="input-search">
                    <div className="input-search-form1">
                        <input type="text" placeholder="Keywords (e.g. Job Title,Position...)"  />
                    </div>
                    <div className="input-search-form2" >
                        <input type="text" placeholder="Location (e.g. City,Country.)"   />
                    </div>
                    <div className="input-search-form2" >
                        <input type="text" placeholder="Industry (e.g Design,Art."  />
                    </div>
                    <div className="button-search">
                        <SearchOutlined /><div> SEARCH NOW</div>
                    </div>
                </div>
            </div>
        </section>
        <Sliders />
        <section class="main__introduce">
            <div class="container__detail">
                    <div class="detail_text">3M Register Member</div>
                    <div class="detail_text">786k Jobs Found</div>
                    <div class="detail_text">1.2k Best Companeries</div>
                <div class="detail-flex">
                    <button class="nav_button job" href="#">POST A JOB</button>
                    <button class="nav_button work" href="#">POST A WORK</button>
                </div>
            </div>
        </section>
        <section className="main__offers">
            <div className="offers__title">
                <h2>What We Offers</h2>
                <p>Offering the East Deal</p>
                <hr className="hr_offer"/>
            </div>
            <div className="gird__list__offer">
                <div className="gird_offers">
                    <h4>Searching the Best Job</h4>
                    <p className="content-offer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat recusandae nostrum, dolore quod inventore ipsa. Eveniet in placeat optio commodi iste odio, veritatis necessitatibus ea? Est explicabo dolorem quos repellat.</p>
                    <div className="readmore">
                    <a href="#">Read More </a>
                    <DoubleArrow  fontSize="small" /> 
                    </div>
                </div>
                <div className="gird_offers">
                    <h4>Searching the Best Job</h4>
                    <p className="content-offer" className="content-offer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat recusandae nostrum, dolore quod inventore ipsa. Eveniet in placeat optio commodi iste odio, veritatis necessitatibus ea? Est explicabo dolorem quos repellat.</p>
                    <div className="readmore">
                    <a href="#">Read More </a>
                    <DoubleArrow  fontSize="small" /> 
                    </div>
                </div>
                <div className="gird_offers">
                    <h4>Searching the Best Job</h4>
                    <p className="content-offer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat recusandae nostrum, dolore quod inventore ipsa. Eveniet in placeat optio commodi iste odio, veritatis necessitatibus ea? Est explicabo dolorem quos repellat.</p>
                    <div className="readmore">
                    <a href="#">Read More </a>
                    <DoubleArrow  fontSize="small" /> 
                    </div>
                </div>
                <div className="gird_offers">
                    <h4>Searching the Best Job</h4>
                    <p className="content-offer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat recusandae nostrum, dolore quod inventore ipsa. Eveniet in placeat optio commodi iste odio, veritatis necessitatibus ea? Est explicabo dolorem quos repellat.</p>
                    <div className="readmore">
                    <a href="#">Read More </a>
                    <DoubleArrow  fontSize="small" /> 
                    </div>
                </div>
            </div>
        </section>
        <section className="main__job__section">
            <div className="job__title">
                <h2>Find Latest Jobs</h2>
                <p>Your Job for a Future</p>
                <hr className="hr_offer"/>
            </div>
            <div className="gird__list__job">
                <Jobs />
            </div>
            <div className="button_job"><div className="browser-all-job">Browser All Jobs</div></div>
        </section>
        <CategoryJob />
        <section className="feature__section">
            <div className="feature__candidate__section" >
                <div className="feature__title">
                    <h2>Featured Candidates</h2>
                    <p>Discover, Intelligent, Experienced, Professional, Trustworthy, Freelancer & Full Time Candidates</p>
                    <hr className="hr_offer"/>
                </div>
                <div className="grid__feature__list ">
                    <Feature_Candidate />
                </div>
                <div className="browser-all-job button-feature">Browser All Jobs</div>
            </div>
        </section>
        <section className="main__bottom__section">
            <div className="main__bottom_left">
                <h3>Post Jobs</h3>
                <div className="div-red">Quick and easy way advantise</div>
                <hr />
                <p className="p-mo padding-top-hr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos earum temporibus debitis corporis repudiandae esse iusto est asperiores expedita delectus! </p>
                <div className="bottom__content padding-top">
                    <div className="btn-checkcicle">
                        <CheckCircle fontSize="inherit" />
                    </div>
                    <div className="bottom__detail">
                        <strong>Hire for your Companies</strong>
                    <p className="p-mo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos earum temporibus debitis corporis repudiandae esse iusto est asperiores expedita delectus! </p>
                    </div>
                </div>
                <div className="bottom__content padding-top">
                    <div className="btn-checkcicle">
                        <CheckCircle fontSize="inherit" />
                    </div>
                    <div className="bottom__detail">
                        <strong>Hire for your Companies</strong>
                    <p className="p-mo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos earum temporibus debitis corporis repudiandae esse iusto est asperiores expedita delectus! </p>
                    </div>
                </div>
                <div className="detail">
                    <button className="nav_button_job" href="#">POST A JOB</button>
                    <button className="nav_button_learn" href="#">POST A JOB</button>
                </div>
            </div>
            <div className="main__botton_right">
                <h3>Post Jobs</h3>
                <div className="div-red">Quick and easy way advantise</div>
                <hr />
                <p className="p-mo padding-top-hr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos earum temporibus debitis corporis repudiandae esse iusto est asperiores expedita delectus! </p>
                <div className="bottom__content padding-top">
                    <div className="btn-checkcicle">
                        <CheckCircle fontSize="inherit" />
                    </div>
                    <div className="bottom__detail">
                        <strong>Hire for your Companies</strong>
                    <p className="p-mo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos earum temporibus debitis corporis repudiandae esse iusto est asperiores expedita delectus! </p>
                    </div>
                </div>
                <div className="bottom__content padding-top">
                    <div className="btn-checkcicle">
                        <CheckCircle fontSize="inherit" />
                    </div>
                    <div className="bottom__detail">
                        <strong>Hire for your Companies</strong>
                    <p className="p-mo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos earum temporibus debitis corporis repudiandae esse iusto est asperiores expedita delectus! </p>
                    </div>
                </div>
                <div className="detail">
                    <button className="nav_button_job" href="#">POST A JOB</button>
                    <button className="nav_button_learn" href="#">POST A JOB</button>
                </div>
            </div>
        </section>
        </main>
    )
}
export default Home