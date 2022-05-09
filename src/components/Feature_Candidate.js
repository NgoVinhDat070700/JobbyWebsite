import {
  AddLocation,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  Favorite,
  Star,
} from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
function Feature_Candidate() {
  const [freelancers, setFreelancers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getDataJob = async () => {
      const res = await axios.get("http://localhost:3000/freelancer");
      const data = await res.data;
      console.log("data", data);
      setFreelancers(data);
    };
    getDataJob();
  }, []);
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
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {freelancers.map((item) => (
        <div className="feature__item" key={item.id}>
          {jobs.map((job) => {
            if (job.id === item.jobId) {
              return (
                <div className="avatar_member_feature">
                  <img src={job.image} />
                  <p>$ {item.hourlyRate}/hr</p>
                </div>
              );
            }
          })}
          <div className="member__detail">
            {users.map((user) => {
              if (user.id === item.userId) {
                return <h3> {user.usename}</h3>;
              }
            })}
            {jobs.map((job) => {
              if (job.id === item.jobId) {
                return (<div className="member__infoNameJob">
                   <p> {job.nameJob}</p>
                   <p className="p-red">{job.status==="Full time"?"Available Full Time":"UnAvailable Full Time"}</p>
                </div>)
              }
            })}
          </div>
          <div className="member__des">
            <div className="member__rate">
              <Star fontSize="inherit" />
              <Star fontSize="inherit" />
              <Star fontSize="inherit" />
              <Star fontSize="inherit" />
              <Star fontSize="inherit" />
              <p>{item.rating}</p>
            </div>
            <div className="member_location">
              <div className="name">Location</div>
              <div className="address">
                <AddLocation /> HaNoi
              </div>
            </div>
          </div>
          <div className="grid__job__detail__footer">
            <div className="button__apply hover-button">VIEW PROFILE</div>
            <div className="button__viewjob hover-button">HIRE ME </div>
            <div className="button__favorite ">
                <div className="boder-favorite">
                <Favorite className="favorite" />
                </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
export default Feature_Candidate;
