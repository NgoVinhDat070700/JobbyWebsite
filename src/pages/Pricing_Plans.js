import React, { useEffect, useState } from "react";
import "../assets/css/invoice.css";
import "../assets/css/pricing.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BannerPageTitle from "../components/BannerPageTitle";
import Pricing from "../components/Pricing";
import axios from "axios";
function Pricing_Plans() {
  const [type,setType] = useState("Monthly")
  const [pricing,setPricing] = useState([])
  useEffect(()=>{
    const getData = async()=>{
      const res = await axios.get(type?`http://localhost:3000/pricing?type=${type}`:`
      http://localhost:3000/pricing?type=Monthly`)
      setPricing(res.data)
    }
    getData()
  },[type])
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
      <BannerPageTitle pageName="Pricing Plans" />
      <section class="main__pricing__plan">
        <div class="pricing__title">
          <h2>Pricing Plans</h2>
          <hr class="hr_pricing" />
        </div>
        <div className="container__tab">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab onClick={()=>setType("Monthly")} label="Monthly Pricing Plans" {...a11yProps(0)} />
                <Tab onClick={()=>setType("Yearly")} label="Yearly Pricing Plans" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Box>
        </div>
        <TabPanel value={value} index={0}>
            <Pricing pricing={pricing} />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Pricing pricing={pricing} />
        </TabPanel>
      </section>
    </main>
  );
}
export default Pricing_Plans;
