import React, { useEffect, useState } from "react";
import "../../assets/css/freelancer_profile.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AddLocation, Facebook, FacebookOutlined, GitHub, GridViewSharp, Image, Language, LinkedIn, Preview, SportsBasketball, Star, Twitter, ViewList } from "@mui/icons-material";
import axios from "axios";
import { useParams } from "react-router-dom";
import Job_List from "../../components/Job_List";
import BannerPageTitle from "../../components/BannerPageTitle";
function Freelancer_Profile() {
  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/freelancer/${id}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [id]);
  console.log(data);
  useEffect(() => {
    const getDataJob = async () => {
      const res = await axios.get("http://localhost:3000/jobs");
      const data = await res.data;
      console.log("data", data);
      setJobs(data);
    };
    getDataJob();
  }, []);
  useEffect(() => {
    const getDataJob = async () => {
      const res = await axios.get("http://localhost:3000/account");
      const data = await res.data;
      console.log("data", data);
      setUsers(data);
    };
    getDataJob();
  }, []);
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
      <BannerPageTitle pageName="Freelancer Profile View" />
      <div className="container__freelancers">
        <div className="container__freelancers__left">
          <div className="profile__header">
            {jobs.map((job) => {
              if (job.id === data.jobId) {
                return <img class="avatar__company" src={job.image} />;
              }
            })}
            {users.map((user) => {
              if (user.id === data.userId) {
                return <div className="name">{user.usename}</div>;
              }
            })}
            {jobs.map((job) => {
              if (job.id === data.jobId) {
                return (<div className="member__infoNameJob">
                   <p> {job.nameJob}</p>
                   <p className="p-red">{job.status==="Full time"?"Available Full Time":"UnAvailable Full Time"}</p>
                </div>)
              }
            })}
          </div>
          <div className="button__profile">
            <div className="contact__btn">CONTACT</div>
            <div className="hireme__btn">HIRE ME</div>
          </div>
          <div className="websites">
            <strong>Websites</strong>
            <div className="address__website">
              <Language fontSize="inherit" />
              <p>{data.infoWeb}</p>
            </div>
            <div className="address__website">
              <Language fontSize="inherit" />
              <p>{data.infoBlog}</p>
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
            <Star fontSize="inherit"/>
            <Star fontSize="inherit"/>
            <Star fontSize="inherit"/>
              <p>{data.rating}</p>
            </div>
          </div>
          <div className="location">
            <strong>Location</strong>
            <div className="location-icon">
              <AddLocation fontSize="inherit" />
              {jobs.map((job) => {
                if (job.id === data.jobId) {
                  return <p>{job.addressCity}</p>;
                }
              })}
            </div>
          </div>
          <div className="view_Location" />
          <div className="content__detail">
            <div className="line-detail">
              <strong>Hourly Rate</strong>
              <p>${data.hourlyRate}/hr</p>
            </div>
            <div className="line-detail">
              <strong>Age</strong>
              <p>{data.age}</p>
            </div>
            <div className="line-detail">
              <strong>Experenice</strong>
              {jobs.map((job) => {
                if (job.id === data.jobId) {
                  return <p>{job.exp}</p>;
                }
              })}
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
                  <Tab style={{fontSize:"14px"}} label="Profile" {...a11yProps(0)} />
                  <Tab label="Portfolio" {...a11yProps(1)} />
                  <Tab label="Reviews" {...a11yProps(2)} />
                </Tabs>
              </Box>
            </Box>
          </div>
          <div className="tab-content">
            <TabPanel value={value} index={0}>
              <div class="tab-pane actives ">
                <h2>About</h2>
                {jobs.map((job) => {
                  if (job.id === data.jobId) {
                    return <p>{job.description}</p>;
                  }
                })}
                <h2>Skill</h2>
                {jobs.map((job) => {
                  if (job.id === data.jobId) {
                    return (
                      <div class="list__tag__skills line-button">
                        {job.tags.map((tag, idx) => (
                          <div class="tag__kill tag_kills">{tag}</div>
                        ))}
                      </div>
                    );
                  }
                })}

                <h2>Language</h2>
                <div class="list__tag__skills line-button ">
                  <div class="tag__kill tag_freelancer bg-language">English</div>
                  <div class="tag__kill tag_freelancer bg-language">VietName</div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div class="tab-pane actives ">
                <h2>Portfolio</h2>
                <div className="portfolio__list">
                  {data.portfolio?.map((portfo, idx) => (
                    <div className="portfolio__item" key={idx}>
                      <div className="portfolio_image">
                        <img src={portfo.image} />
                        <div class="priview_portfolio">
                          <Preview /><p>Live Preview</p>
                        </div>
                      </div>
                      <div className="portfolio_name"><Image /><div>{portfo.name}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div class="tab-pane actives ">
                <h2>All Reviews</h2>
                <div className="list__review">
                  {data.userComment?.map((comment) => (
                    <div className="review__item" key={comment.id}>
                      {users.map((user) => {
                        if (user.id === comment.user_id) {
                          return (
                            <>
                              {jobs.map((job)=>{
                                if(job.id===data.jobId){
                                  return(
                                    <div className="infor__review">

                                <img src={job.image}/>
                                <div className="info_member__review">
                                  <h3>{user.usename}</h3>
                                  <p>{job.jobName}</p>
                                  <div className="member__rate">
                                    <Star fontSize="inherit" />
                                    <Star fontSize="inherit" />
                                    <Star fontSize="inherit" />
                                    <Star fontSize="inherit" />
                                    <Star fontSize="inherit" />
                                    <p>{comment.rating}</p>
                                  </div>
                                </div>
                              </div>
                                  )
                                }
                              })}
                            </>
                          );
                        }
                      })}
                      <div className="content__review">{comment.contentComment}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Freelancer_Profile;
