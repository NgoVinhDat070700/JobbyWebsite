import React, { useEffect, useState } from "react";
import "../../assets/css/freelancer_profile.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AddLocation, Assessment, Facebook, FacebookOutlined, GitHub, GridViewSharp, Image, Language, LinkedIn, Preview, SportsBasketball, Star, Twitter, ViewList } from "@mui/icons-material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Job_List from "../../components/Job_List";
function Company_Profile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/companies/${id}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [id]);
  console.log(data);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <main>
      <section className="banner__page__title">
        <div className="banner__page__content">
          <div className="banner__left">Browser Job Grid</div>
          <div className="banner__right">Home / Browser Job Grid</div>
        </div>
      </section>
      <div className="container__freelancers">
        <div className="container__freelancers__left">
          <div className="profile__header">
            <img src={data.image} /><div className="name">{data.nameCompany}</div>
            
          </div>
          <div className="button__profile">
            <div className="contact__btn">CONTACT</div>
            <div className="hireme__btn">HIRE ME</div>
          </div>
          <div className="websites">
            <strong>Websites</strong>
            <div className="address__website">
              <Language fontSize="inherit"/>
              <p>{data.websiteCompany}</p>
            </div>
            <div className="address__website">
            <Language fontSize="inherit"/>
              <p>{data.blogCompany}</p>
            </div>
            <div className="address__website">
              <Assessment fontSize="inherit"/>
              <p>{data.portfoliosite}</p>
            </div>
          </div>
          <div className="progress__website">
            <strong>Profile Completeness</strong>
            <div className="skill-bars">
              <div className="bar">
                <span className="result-progress">85%</span>
                <div className="info"></div>
                <div className="progress-line html">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="rating">
            <strong>Rating</strong>
            <div className="start__rate">
              <Star fontSize="inherit" />
              <Star fontSize="inherit" />
              <Star fontSize="inherit" />
              <Star fontSize="inherit" />
              <Star fontSize="inherit" />
              <p>{data.rating}</p>
            </div>
          </div>
          <div className="location">
            <strong>Location</strong>
            <div className="location-icon">
              <AddLocation fontSize="inherit" />
              <p>{data.location}</p>
            </div>
          </div>
          <img src="" alt="" />
          <div className="content__detail">
            <div className="line-detail">
              <strong>Hourly Rate</strong>
              <p>${data.HourlyRate}/hr</p>
            </div>
            <div className="line-detail">
              <strong>Age</strong>
              <p>{data.age}</p>
            </div>
            <div className="line-detail">
              <strong>Experenice</strong>
              <p>{data.Experenice}</p>
            </div>
            <div className="line-detail">
              <strong>JobDone</strong>
              <p>{data.jobDone}</p>
            </div>
          </div>
          <div className="contact__social__list">
            <strong>Contact Social Account</strong>
            <div className="social-item facebook">
              <FacebookOutlined />
              <p>http://facebook.com/johndoe</p>
            </div>
            <div className="social-item twitter">
              <Twitter />
              <p>http://twiter.com/johndoe</p>
            </div>
            <div className="social-item linkedin">
              <LinkedIn />
              <p>http://linkedIn.com/johndoe</p>
            </div>
            <div className="social-item dribble">
              <SportsBasketball />
              <p>http://dribbble.com/johndoe</p>
            </div>
            <div className="social-item github">
              <GitHub />
              <p>http://github.com/johndoe</p>
            </div>
          </div>
        </div>
        <div className="container__freelancers__right">
          <div className="tabs">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Profile" {...a11yProps(0)} />
                  <Tab label="Members" {...a11yProps(1)} />
                  <Tab label="Reviews" {...a11yProps(2)} />
                </Tabs>
              </Box>
            </Box>
          </div>
          <div className="tab-content">
            <TabPanel value={value} index={0}>
              <div class="tab-pane actives ">
                <div className="about">
                  <h2>About</h2>
                  <p></p>
                </div>
                <div className="skills">
                  <h2>Skill</h2>

                  <div class="list__tag__skills line-button">
                  {data.skills?.map((skill,idx)=>(
                      <div class="tag__kill  tag_kills" key={idx}>{skill}</div>
                  ))}
                  </div>
                </div>

                <div className="languages">
                <h2>Language</h2>
                  <div class="list__tag__skills line-button">
                  {data.Language?.map((lang,idx)=>(
                        <div class="tag__kill tag_freelancer" key={idx}>{lang}</div>
                  ))}
                    
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div class="tab-pane actives ">
                <h2>Members</h2>
                <div className="list__review">
                  {data.review?.map((rv)=>(
                      <div className="review__item" key={rv.id}>
                      <div className="infor__review">
                        <img src={rv.image} />
                        <div className="info_member__review">
                        <h3>{rv.name}</h3>
                          <p>{rv.jobName}</p>
                          <div className="member__rate">
                            <Star fontSize="inherit" />
                            <Star fontSize="inherit" />
                            <Star fontSize="inherit" />
                            <Star fontSize="inherit" />
                            <Star fontSize="inherit" />
                            <p>{rv.Rating}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div class="tab-pane actives ">
                <h2>All Reviews</h2>
                <div className="list__review">
                  {data.review?.map((rv)=>(
                      <div className="review__item" key={rv.id}>
                      <div className="infor__review">
                        <img src={rv.image} />
                        <div className="info_member__review">
                        <h3>{rv.name}</h3>
                          <p>{rv.jobName}</p>
                          <div className="member__rate">
                            <Star fontSize="inherit" />
                            <Star fontSize="inherit" />
                            <Star fontSize="inherit" />
                            <Star fontSize="inherit" />
                            <Star fontSize="inherit" />
                            <p>{rv.Rating}</p>
                          </div>
                        </div>
                      </div>
                      <div className="content__review">{rv.contentReview}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Company_Profile
