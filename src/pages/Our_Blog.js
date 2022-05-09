import React, { useEffect, useState } from "react";
import "../assets/css/about.css";
import "../assets/css/jobs_grid.css";
import "../assets/css/checkout.css";
import "../assets/css/blog_view.css";
import "../assets/css/blog.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BannerPageTitle from "../components/BannerPageTitle";
function Our_Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users,setUsers] = useState([])

  useEffect(() => {
    const getDataBlog = async () => {
      const res = await axios.get("http://localhost:3000/blogs");
      if (res.status === 200) {
        console.log("OK");
        setLoading(false);
        setBlogs(res.data);
      }
    };
    getDataBlog();
  }, []);
  useEffect(() => {
    const getDataUsers = async () => {
      const res = await axios.get("http://localhost:3000/account");
      if (res.status === 200) {
        console.log("OK");
        setLoading(false);
        setUsers(res.data);
      }
    };
    getDataUsers();
  }, []);

  if (loading) {
    return <h2>Loading data......</h2>;
  }
  return (
    <main>
      <BannerPageTitle pageName="Our Blog" />
      <section className="main__pricing__plan">
        <div className="pricing__title">
          <h2>Our Blog</h2>
          <hr className="hr_pricing" />
        </div>
      </section>
      <section className="main__blog">
        <div className="main__blog__header">
          <div className="blog">
            <div className="div-img">
              <img style={{width:"300px",height:"100%",backgroundSize:"cover"}} src={blogs[0].image} />
            </div>
            <div className="content_blog">
              <div className="auth_and_date">
                <div className="auth">
                  <p>By</p>{users.map(user=>{
                    if(user.id===blogs[0].user_id){
                      return(<p class="color-red">{user.usename}</p>)
                    }
                  })}
                </div>
                <div className="date">{blogs[0].createdAt}</div>
              </div>
              <div className="title_blog">
                <strong> {blogs[0].nameBlog}</strong>
              </div>
              <div className="desc_blog">
              {blogs[0].description1}
              </div>
              <button className="button-read-more">READ MORE</button>
            </div>
          </div>
          <div className="banner_blog">
            <div className="boder">
              <div className="banner__head">
                <img src="./image/44_invoice_view.png" alt="" />
                <p>
                  <strong>Jobby</strong> Blog
                </p>
              </div>
              <h3>Subscribe and Get Updates</h3>
              <input type="text" placeholder="Email Address" />
              <button className="subscribe">SUBSCRIBE NOW</button>
            </div>
          </div>
        </div>
        <div className="list__blog">
          {blogs.map((blog) => (
            <div className="item_blog" key={blog.id}>
              <div className="div-image">
                <img src={blog.image} />
              </div>
              <div className="item_blog_content">
                <div className="auth_and_date">
                  <div className="auth">
                    <p>By </p> {users.map((user)=>{
                      if(user.id===blog.user_id){
                        return (
                          <p className="color-red"> {user.usename}</p>
                        )
                      }
                    })}
                  </div>
                  <div className="date">{blog.createdAt}</div>
                </div>
                <div className="title_blog">
                  <strong> {blog.nameBlog}</strong>
                </div>
                <div className="desc_blog">{blog.description1}</div>
                <button className="button-read-more"><Link to={`/blog_view/${blog.id}`} >READ MORE</Link></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default Our_Blog;
