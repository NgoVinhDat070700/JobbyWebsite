import React, { useEffect, useState } from "react"
import {
    AddLocation,
    Favorite,
    LocalActivityOutlined,
  } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";
function Project({data,type,setType}){
  const [users,setUsers]=useState([])
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
      const res = await axios.get("http://localhost:3000/account");
      const data = await res.data;
      console.log("data", data);
      setUsers(data);
    };
    getDataJob();
  }, []);
  const renderData = (data) => {
    return (
      <div className={type?"container__gird__list__job":"container__gird__list__job__list"}>
        {data.map(item=>(
          <div className="gird_job_details feature__item2" key={item.id}>
          <div className="gird__job_detail_header">
            <div className="detail__header__left">
              <img className="image__avatar" src={item.image} />
              <div className="info">
                {users.map((user)=>{
                  if(user.id===item.userId){
                    return(
                      <div className="name">{user.usename}</div>
                    )
                  }
                })}
                <div className="address">
                  <AddLocation /> {item.location}
                </div>
              </div>
            </div>
            <div className="detail__header__right">
              <div className="price">$ {item.priceMin}-$ {item.priceMax}</div>
            </div>
          </div>
          <div className="grid__job__detail__body">
            <div className="subtitle">{item.projectName}</div>
            <div className="description">{item.projectDescription}</div>
            <div className="list__option">
              {item.tagSkill.map((tg, idx) => (
                <div className="card__name" key={idx}>
                  {tg}
                </div>
              ))}
              <div className="card__name  bg-card-red">+1</div>
            </div>
          </div>
          <div className="grid__job__detail__footer">
            <div className="button__apply hover-button">BID NOW</div>
            <div className="button__viewjob hover-button"> <Link to={`/browser_Project/${item.id}`}>VIEW PROJECT</Link></div>
            <div className="button__favorite hover-button">
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
export default Project