import React, { useEffect, useState } from "react"
import {
    AddLocation,
    Favorite,
    LocalActivityOutlined,
    Star,
  } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";

function Company({data,type,setType}){
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
  const renderData = (data) => {
    return (
      <div className={type?"grid__feature__lists":"grid__feature__list__list"}>
          {data.map((item) => (
        <div className="feature__item feature__item2" key={item.id}>
              <div className="avatar_member_feature avatar__company">
                <img src={item.image} />
              </div>
        <div className="member__detail">
           <h3> {item.nameCompany}</h3>
           
          <p> {item.websiteCompany}</p>
            
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
              <AddLocation /> {item.location}
            </div>
          </div>
        </div>
        <div className="grid__job__detail__footer">
          <div className="button__apply hover-button"><Link to={`/browser_Company/${item.id}`}>VIEW PROFILE</Link></div>
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
export default Company