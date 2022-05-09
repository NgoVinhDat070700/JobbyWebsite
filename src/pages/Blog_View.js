import React, { useEffect, useState } from "react"
import '../assets/css/about.css'
import '../assets/css/jobs_grid.css'
import '../assets/css/checkout.css'
import '../assets/css/blog_view.css'
import axios from "axios"
import { useParams } from "react-router-dom"
import { Facebook, Google, Instagram, ReplyRounded, Twitter } from "@mui/icons-material"
function Blog_View(){
    const [data,setData] = useState([])
    const [users,setUsers]= useState([])
    const [loading,setLoading] = useState(true)
    const {id} = useParams()
    useEffect(()=>{
        const getData = async()=>{
            const res = await axios.get(`http://localhost:3000/blogs/${id}`)
            if(res.status===200){
                setLoading(false)
                setData(res.data)
            }
        }
        getData()
    },[id])
    useEffect(()=>{
        const getUser = async ()=>{
            const res = await axios.get("http://localhost:3000/account")
            setUsers(res.data)
        }
        getUser()
    },[])
    console.log(data)
    if(loading){
        return <h1>Loading .......</h1>
    }
    return(
        <main>
        <section className="banner__page__title">
            <div className="banner__page__content">
                <div className="banner__left">Our Blog</div>
                <div className="banner__right">Home / Our Blog</div>
            </div>
        </section>
        <section className="content__blog__view">
            <div className="view__left">
                <div className="div-image-view">
                    <img src={data.image}  />
                </div>
                <div className="auth_and_date">
                    <div className="auth"><p>By</p>
                    {users.map((user)=>{
                        if(user.id === data.user_id){
                            return(
                                <p className="color-red">{user.usename}</p>
                            )
                        }
                    })}
                    </div>
                    <div className="date">{data.createdAt}</div>
                </div>
                <div className="blog_title">
                    {data.nameBlog}
                </div>
                <div className="blog_des">
                    {data.description1}

                </div>
                <p className="blog_des bg-color-red">
                {data.description2}

                </p>
                <div className="blog_des">
                {data.description1}

                </div>
                <div className="share">
                    <p>SHARE:</p>

                    <Facebook />
                    <Twitter />
                    <Google />
                    <Instagram />
                </div>
                <div className="comment">
                    <h2>03 Comment</h2>
                    <hr className="hr_pricing"/>
                    <div className="item_comment">
                        <img src="https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png" alt="" className="avatar_comment"/>
                        <div className="content_comment">
                            <div className="header_comment">
                                <div className="name_user_comment">
                                    <div className="name-user">Jonh Doe</div>
                                    <p>Match 25,2018</p>
                                </div>
                                <div className="reply">
                                    <ReplyRounded fontSize="inherit" />
                                    <p>Reply</p>
                                </div>
                            </div>
                            <div className="content_comment">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nesciunt nobis et
                                excepturi veniam explicabo eius a voluptatibus, itaque reiciendis, facilis consequuntur
                                nulla. Dolores neque temporibus nam, aliquid natus quis?
                            </div>
                        </div>
                    </div>
                    <div className=" item_comment reply">
                        <img src="https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png" alt="" className="avatar_comment"/>
                        <div className="content_comment">
                            <div className="header_comment">
                                <div className="name_user_comment">
                                    <div className="name-user">Jonh Doe</div>
                                    <p>Match 25,2018</p>
                                </div>
                                <div className="reply">
                                    <ReplyRounded fontSize="inherit" />
                                    <p>Reply</p>
                                </div>
                            </div>
                            <div className="content_comment">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nesciunt nobis et
                                excepturi veniam explicabo eius a voluptatibus, itaque reiciendis, facilis consequuntur
                                nulla. Dolores neque temporibus nam, aliquid natus quis?
                            </div>
                        </div>
                    </div>
                    <div className="item_comment">
                        <img src="https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png" alt="" className="avatar_comment"/>
                        <div className="content_comment">
                            <div className="header_comment">
                                <div className="name_user_comment">
                                    <div className="name-user">Jonh Doe</div>
                                    <p>Match 25,2018</p>
                                </div>
                                <div className="reply">
                                    <ReplyRounded fontSize="inherit" />
                                    <p>Reply</p>
                                </div>
                            </div>
                            <div className="content_comment">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nesciunt nobis et
                                excepturi veniam explicabo eius a voluptatibus, itaque reiciendis, facilis consequuntur
                                nulla. Dolores neque temporibus nam, aliquid natus quis?
                            </div>
                        </div>
                    </div>
                    <div className="view-more">VIEW MORE</div>
                    <h2>Leave a Comment</h2>
                    <hr className="hr_pricing"/>
                    <div className="write_comment">
                        <div className="form_write">
                            <div className="div-input">
                                <i className="fa-solid fa-user"></i>
                                <input type="text" placeholder="Wrire a comment"/>
                            </div>
                            <button className="button_post_a_comment">POST A COMMENT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view__right">
                <div className="search-input">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search Keyword" />
                </div>
                <h3>Categories</h3>
                <div className="list-category">
                    <a href="#">Latest</a>
                    <a href="#">Best Articles</a>
                    <a href="#">Productivity</a>
                    <a href="#">Managements</a>
                    <a href="#">Business Growth</a>
                    <a href="#">Freelancing</a>
                </div>
                <div className="banner_blog">
                    <div className="boder">
                        <div className="banner__head">
                            <img src="./image/44_invoice_view.png" alt=""/>
                            <p><strong>Jobby</strong> Blog</p>

                        </div>
                        <h3>Subscribe and Get Updates</h3>
                        <input type="text" placeholder="Email Address"/>
                        <button className="subscribe">SUBSCRIBE NOW</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default Blog_View