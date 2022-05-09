import React, { useEffect, useState } from "react"
import {
    AddLocation,
    Favorite,
    LocalActivityOutlined,
    Star,
  } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";

function Freelancer({data,type,setType}){
  console.log(type)
 
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage,setCurrunPage] = useState(1);
  const [itemPage,setItemPage] = useState(4);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const indexOfLastItem = currentPage * itemPage;
  const indexOfFirstItem = indexOfLastItem - itemPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const handleClick = (event) => {
    setCurrunPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    setCurrunPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrunPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }
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
  const renderData = (data) => {
    return (
      <div className={type?"grid__feature__lists":"grid__feature__list__list"}>
          {data.map((item) => (
        <div className="feature__item feature__item2" key={item.id}>
        {jobs.map((job) => {
          if (job.id === item.jobId) {
            return (
              <div className="avatar_member_feature avatar__company">
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
            <Star fontSize="inherit"/>
            <Star fontSize="inherit"/>
            <Star fontSize="inherit"/>
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
          <div className="button__apply hover-button"><Link to={`/browser_Freelancer/${item.id}`} >VIEW PROFILE</Link></div>
          <div className="button__viewjob hover-button">HIRE ME</div>
          <div className="button__favorite ">
                <div className="boder-favorite">
                <Favorite className="favorite" />
                </div>
            </div>
        </div>
      </div>
      ))}
      </div>
    );
  };
    return (
      <>
        {renderData(currentItems)}
        <ul className="paginate">
        <li className="previous">
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        <li className="page__number">
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}
        </li>
        <li className="next">
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      </>
    )
}
export default Freelancer