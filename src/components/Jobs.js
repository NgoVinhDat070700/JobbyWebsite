import {
  AddLocation,
  Favorite,
  LocalActivityOutlined,
} from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const getDataJob = async () => {
      const res = await axios.get(
        "http://localhost:3000/jobs"
      );
      const data = await res.data;
      console.log("data", data);
      setLoading(false)
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
      containerClass=""
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
      {jobs.map((job) => (
        <div className="gird_job_details" key={job.id}>
          <div className="gird__job_detail_header">
            <div className="detail__header__left">
              <img className="image__avatar" src={job.image} />
              <div className="info">
              {users.map((user)=>{
                  if(user.id===job.userId){
                    return(
                      <div className="name">{user.usename}</div>
                    )
                  }
                })}
                <div className="address">
                  <AddLocation /> {job.addressCity}
                </div>
              </div>
            </div>
            <div className="detail__header__right">
              <div className="price">$ {job.price}</div>
              <div className="status">
                {job.status}
              </div>
            </div>
          </div>
          <div className="grid__job__detail__body">
            <div className="subtitle">{job.nameJob}</div>
            <div className="description">{job.description}</div>
            <div className="list__option">
              {job.tags.map((tg, idx) => (
                <div className="card__name" key={idx}>
                  {tg}
                </div>
              ))}
              <div className="card__name bg-card-red">+1</div>
            </div>
          </div>
          <div className="grid__job__detail__footer">
            <div className="button__apply hover-button">APPLY</div>
            <div className="button__viewjob hover-button" >VIEW JOB</div>
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
export default Jobs;
