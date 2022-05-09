import { AccessTime, BusinessCenter, Facebook, Google, Instagram, LocalAtm, People, Twitter, Visibility } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/css/singlejobview.css";
import Jobs from "../../components/Jobs";
import SingleItem from "../../components/SingleItem";
function Single_Job_View() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false)
      });
  }, [id]);
  
  if(loading)
    {
        return <h4>Loading Data....</h4>
    }
  return (
    <main>
      <section className="banner__page__title">
        <div className="banner__page__content">
          <div className="banner__left">Job Single View</div>
          <div className="banner__right">Home / Job Single View</div>
        </div>
      </section>
      <section className="single__view__detail">
        <div className="detail_view">
          <Visibility />
          <div className="detail_content">
            <strong>View</strong>
            <p className="detail-number">135</p>
          </div>
        </div>
        <div className="detail_view">
          <People />
          <div className="detail_content">
            <strong>Applications</strong>
            <p className="detail-number">4</p>
          </div>
        </div>
        <div className="detail_view">
          <BusinessCenter />
          <div className="detail_content">
            <strong>Job Type</strong>
            <p className="detail-number">{data.status}</p>
          </div>
        </div>
        <div className="detail_view">
          <LocalAtm />
          <div className="detail_content">
            <strong>Salary</strong>
            <p className="detail-number">$ {data.price}-Manual</p>
          </div>
        </div>
        <div className="detail_view">
          <AccessTime />
          <div className="detail_content">
            <strong>Posted date</strong>
            <p className="detail-number">{data.createdAt}</p>
          </div>
        </div>
      </section>
      <section className="content__singe__secton">
        <SingleItem data={data} />
        <div className="content__single__right">
          <div className="button__aplly button-apply-js">APPLY NOW</div>
          <div className="button__bookmark">
            <i className="fa-brands fa-gratipay"></i>
            <div>BOOKMARK</div>
          </div>
          <div className="social__list">
            <Facebook />
            <Twitter />
            <Google />
            <Instagram />
          </div>
        </div>
      </section>
      <section className="main__job__section">
        <div className="job__title">
          <h2>Find Latest Jobs</h2>
          <p>Your Job for a Future</p>
          <hr className="hr_offer" />
        </div>
        <div className="gird__list__job">
          <Jobs />
        </div>
      </section>
    </main>
  );
}
export default Single_Job_View;
