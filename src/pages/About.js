import React, { useEffect, useState } from "react"
import '../assets/css/about.css'
import '../assets/css/jobs_grid.css'
import '../assets/css/checkout.css'
import BannerPageTitle from "../components/BannerPageTitle"
import axios from "axios"
import { CheckCircle, Facebook, Google, Instagram, Twitter, YouTube } from "@mui/icons-material"
function About(){
    const [teams,setTeams] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const res = await axios.get("http://localhost:3000/team")
            setTeams(res.data)
        }
        getData()
    },[])
    return(
        <main>
        <BannerPageTitle pageName="About Us" />
        <div class="payment-title">
            <h2>About</h2>
            <hr class="checkout-hr" />
            
        </div>
        <div class="content_about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat eveniet soluta itaque consequatur dignissimos odio iste nobis maiores dolore delectus quia quos exercitationem vero voluptatem quaerat, ratione consectetur laboriosam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quaerat sit. Voluptates, adipisci dignissimos excepturi accusamus, dolor consectetur tempora id laboriosam odio quaerat voluptatum, dolorem rerum minus quis fuga consequuntur.</p>
        </div>
        <section class="we__choose__us">
            <div class="left">
                <h2>Why Choose Us</h2>
                <hr class="checkout-hr" />
                <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam in ad dignissimos? Iusto cum enim voluptate hic veniam vero assumenda numquam quod perferendis porro! Officiis numquam maxime facilis nesciunt.</div>
                <div class="content__confirm">
                    <CheckCircle fontSize="inherit" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem magnam itaque suscipit saepe at
                        assumenda animi aut odio ullam accusamus, dignissimos fugit voluptas</p>
                </div>
                <div class="content__confirm">
                    <CheckCircle fontSize="inherit" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem magnam itaque suscipit saepe at
                        assumenda animi aut odio ullam accusamus, dignissimos fugit voluptas</p>
                </div>
                <div class="content__confirm">
                    <CheckCircle fontSize="inherit" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem magnam itaque suscipit saepe at
                        assumenda animi aut odio ullam accusamus, dignissimos fugit voluptas</p>
                </div>
            </div>
            <div class="right">
                <div class="video"></div>
            </div>
        </section>
        <section class="meet_out_team">
            <h2>Meet Our Team</h2>
            <hr class="checkout-hr" />
            <div class="list__team">
            {teams.map(team=>(
                <div class="item_team" key={team.id}>
                <div class="div-image">
                    <img src={team.image} />
                </div>
                <div class="name">{team.name}</div>
                <div class="position">{team.position}</div>
                <div class="list__social">
                    <Facebook />
                    <Twitter />
                    <Google />
                    <Instagram />
                    <YouTube />
                </div>
            </div>
            ))}
                
            </div>
        </section>

    </main>
    )
}
export default About