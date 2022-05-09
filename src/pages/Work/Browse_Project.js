import React, { useEffect, useState } from "react";
import "../../assets/css/jobs_grid.css";
import Jobs from "../../components/Jobs";
import Banner from "../../assets/images/02_browse_jobs_grid2.png";
import JobList from "../../components/Job_List";
import Job_List from "../../components/Job_List";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GridViewSharp, ViewList } from "@mui/icons-material";
import Project from "../../components/Project";
import SearchLeft from "../../components/SearchLeft";
import BannerPageTitle from "../../components/BannerPageTitle";
import axios from "axios";
function Browse_Project() {
  const [type, setType] = useState(true);
  const [data,setData] = useState([])
  useEffect(() => {
    const getDataJob = async () => {
      const res = await axios.get("http://localhost:3000/project"
      );
      const data = await res.data;
      console.log("data", data);
      setData(data);
    };
    getDataJob();
  }, []);
  const [inputText,setInputText] = useState({
    searchKeyword:"",
    searchJobType:"",
    searchExp:"",
    searchLocation:""
  })

  const onChangeInput = ((e)=>{
    e.persist()
    setInputText({...inputText,[e.target.name]:e.target.value})
  })
  const handleSearch = async ()=>{
      const res = await axios.get(`http://localhost:3000/project?categories_id=${inputText.searchJobType}&&location=${inputText.searchLocation}`
      );
      const data = await res.data;
      
      setData(data);
  }
  const TypeGird = () => {
    setType(true);
  };
  const TypeList = () => {
    setType(false);
  };
  return (
    <main>
      <BannerPageTitle pageName="Browser Project Grid " />
      <section className="main__container__section">
      <SearchLeft inputText={inputText} setInputText={setInputText} onChangeInput={onChangeInput} handleSearch={handleSearch} />
        <div className="banner__container__right">
          <div className="banner__right__top">
            <img src={Banner} width="700px" />
          </div>
          <div className="tags__menu">
            <div className="tabs__left">
              
            </div>
            <div className="tab__right">
              <label for="">Sort By:</label>
              <select name="" id="">
                <option>ABC</option>
              </select>
              <GridViewSharp onClick={TypeGird} />
              <ViewList onClick={TypeList} />
            </div>
          </div>
          <Project data={data} setData={setData} type={type} setType={setType} />
        </div>
      </section>
    </main>
  );
}
export default Browse_Project;
