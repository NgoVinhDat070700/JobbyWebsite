import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../../assets/css/jobs_grid.css";
import "../../assets/css/main.css";
import Jobs from "../../components/Jobs";
import Banner from "../../assets/images/02_browse_jobs_grid2.png";
import JobList from "../../components/Job_List";
import Job_List from "../../components/Job_List";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { GridViewSharp, ViewList } from "@mui/icons-material";
import axios from "axios";
import SearchLeft from "../../components/SearchLeft";
import BannerPageTitle from "../../components/BannerPageTitle";
function Browse_Jobs() {
  const [type, setType] = useState(true);
  const [status,setStatus] = useState("")
  const TypeGird = () => {
    setType(true);
  };
  const TypeList = () => {
    setType(false);
  };
  const [data,setData] = useState([])
  useEffect(() => {
    const getDataJob = async () => {
      const res = await axios.get(status?
        `http://localhost:3000/jobs?status=${status}`
        :"http://localhost:3000/jobs"
      );
      const data = await res.data;
      console.log("data", data);
      setData(data);
    };
    getDataJob()
  }, [status]);
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
  const handleSearch = useMemo(()=>{
    const Search = async ()=>{
      const res = await axios.get(`http://localhost:3000/jobs?categories_id=${inputText.searchJobType}`
      );
      const data = await res.data;
      
      setData(data);
   }
   Search()
  },[inputText])
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
      <BannerPageTitle pageName="Browser Jobs Grid" />
      <section className="main__container__section">
        <SearchLeft inputText={inputText} setInputText={setInputText} onChangeInput={onChangeInput} handleSearch={handleSearch} />
        <div className="banner__container__right">
          <div className="banner__right__top">
            <img src={Banner} width="700px" />
          </div>
          <div className="tags__menu">
            <div className="tabs__left">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Newest Jobs" {...a11yProps(0)} />
                    <Tab onClick={()=>setStatus("Full time")} label="Full Time" {...a11yProps(1)} />
                    <Tab onClick={()=>setStatus("Part time")} label="Part Time" {...a11yProps(2)} />
                  </Tabs>
                </Box>
              </Box>
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
          <TabPanel value={value} index={0}>
            <Job_List data={data} setData={setData} type={type} setType={setType} />
          </TabPanel>
          <TabPanel value={value}  index={1} >
            <Job_List data={data} setData={setData} status={0} type={type} setType={setType} />
          </TabPanel>
          <TabPanel value={value}  index={2} >
            <Job_List data={data} setData={setData} status={1}  type={type} setType={setType} />
          </TabPanel>
        </div>
      </section>
    </main>
  );
}
export default Browse_Jobs;
