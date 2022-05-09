import { AddLocation, Star } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../assets/css/singlejobview.css";
function Single_Project_View() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projects,setProjects]= useState([])
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getFindData = async () => {
      const res = await axios.get(`http://localhost:3000/project/${id}`);
      setData(res.data);
      setLoading(false);
    };
    getFindData();
  }, [id]);
  useEffect(() => {
    const getDataJob = async () => {
      const res = await axios.get("http://localhost:3000/account");
      const data = await res.data;
      console.log("data", data);
      setUsers(data);
    };
    getDataJob();
  }, []);
  useEffect(() => {
    const getAllProject = async () => {
      const res = await axios.get("http://localhost:3000/project");
      const data = await res.data;
      console.log("data", data);
      setProjects(data);
    };
    getAllProject();
  }, []);

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
          <i className=" icon_single fa-solid fa-eye"></i>
          <div className="detail_content">
            <strong>View</strong>
            <p className="detail-number">135</p>
          </div>
        </div>
        <div className="detail_view">
          <i className=" icon_single fa-brands fa-app-store-ios"></i>
          <div className="detail_content">
            <strong>Applications</strong>
            <p className="detail-number">4</p>
          </div>
        </div>
        <div className="detail_view">
          <i className=" icon_single fa-solid fa-briefcase"></i>
          <div className="detail_content">
            <strong>Job Type</strong>
            <p className="detail-number">fulltime</p>
          </div>
        </div>
        <div className="detail_view">
          <i className=" icon_single fa-regular fa-magnifying-glass-dollar"></i>
          <div className="detail_content">
            <strong>Salary</strong>
            <p className="detail-number">
              ${data.priceMin}-${data.priceMax}
            </p>
          </div>
        </div>
        <div className="detail_view">
          <i className=" icon_single fa-solid fa-eye"></i>
          <div className="detail_content">
            <strong>Posted date</strong>
            <p className="detail-number">{data.createdAt}</p>
          </div>
        </div>
      </section>
      <section className="content__singe__secton">
        <div className="content__singe__left">
          <div className="content__header">
            <div className="profile__member__detail">
              <img src="https://imgt.taimienphi.vn/cf/Images/ptx/2019/2/19/hinh-anh-tuyen-dung-dep-hinh-dang-tin-tuyen-dung-2.jpg" />
              <div>
                {users.map((user) => {
                  if (user.id === data.userId) {
                    return <strong>{user.usename}</strong>;
                  }
                })}
                <div className="location">
                  <AddLocation />
                  <p>{data.location}</p>
                </div>
              </div>
            </div>
            <div className="salary__and__status">
              <h3>
                ${data.priceMin}-${data.priceMax}
              </h3>
            </div>
          </div>
          <div className="content__description">
            <h3>{data.projectName}</h3>
            <div className="content__des">{data.projectDescription}</div>
            <div className="list__tag__skills">
              {data.tagSkill?.map((tag, idx) => (
                <div className="tag__kill" key={idx}>
                  {tag}
                </div>
              ))}
            </div>
            <div className="attachments">
              <strong>Attachments</strong>
              <div className="attachments__content">
                {data.Attachment?.map((att, idx) => (
                  <div className="download__attchments" key={idx}>
                    <div className="name-project">{att.name}</div>
                    <p>{att.typeFile}</p>
                    <i className="fa-solid fa-file-arrow-down"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="freelancers__bidding">
            <h3>Freelancers Bidding</h3>
            {projects?.map(project=>(
                <div className="freelancers__list">
                <div className="freelancers__list__left">
                  <img
                    src={project.image}
                    alt=""
                  />
                  <div className="info-detail">
                    {users.map((user)=>{
                        if(user.id===project.userId){
                            return(
                                <div className="name">{user.usename}</div>
                            )
                        }
                    })}
                    <div className="location-evaluate">
                      <i className="fa-regular fa-location-dot"></i>
                      <p>{project.location}</p>
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <p className="green">4.9</p>
                    </div>
                  </div>
                </div>
                <div className="freelancers__list__right">
                  <div className="price"> ${project.priceMin}-${project.priceMax}</div>
                  <div className="date-dealine">{project.dateJob}</div>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className="content__single__right">
            <div className="button__top">{data.dateJob}</div>
            <div className="content__right">
              <strong>Bid now this Job</strong>
              <div className="minimal-rate">
                <p>Set more minimal rate</p>
                <p>Clear</p>
              </div>
              <div className="price-right">${data.priceMin}-${data.priceMax}</div>
              <input type="range" />
              <div>Set deliver your time</div>
              <div className="set__deliver">
                <div className="number">
                  <p className="down">-</p>
                  <p>1</p>
                  <p className="up">+</p>
                </div>
                <div className="date-day">
                  <select>
                    <option default>
                      Day <i className="fa-regular fa-caret-down"></i>
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="button__bookmark_project red">PLACE A BID</div>
            <div className="button__bookmark_project">
              <i className="fa-brands fa-gratipay"></i>
              <div>BOOK MARK</div>
            </div>
            <div className="social__list">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-instagram-square"></i>
            </div>
          </div>
      </section>
    </main>
  );
}
export default Single_Project_View;
