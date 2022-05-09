import { AddLocation } from "@mui/icons-material"
import axios from "axios";
import React, { memo, useEffect, useState } from "react"

function SingleItem({data}){
    const { userId,image, price,addressCity, nameJob, description, tags, status,exp,qualification } = data
    const [users,setUsers] = useState([])
    useEffect(() => {
      const getDataUser = async () => {
        const res = await axios.get("http://localhost:3000/account");
        const data = await res.data;
        setUsers(data);
      };
      getDataUser();
    }, []);
    return (
        <div className="content__singe__left">
          <div className="content__header">
            <div className="profile__member__detail">
              <img src={image} />
              <div>
                {users.map(user=>{
                  if(user.id ===userId){
                    return(<strong className="name_users">{user.usename}</strong>)
                  }
                })}
                <div className="location_address">
                  <AddLocation />
                  <p>{addressCity}</p>
                </div>
              </div>
            </div>
            <div className="salary__and__status">
              <h3>{price}$</h3>
              <div className="status">
                {status}
              </div>
            </div>
          </div>
          <div className="content__description">
            <h3>{nameJob}</h3>
            <div className="content__des">{description}</div>
            <div className="list__tag__skills">
              {tags.map((tg, idx) => (
                <div className="tag__kill" key={idx}>
                  {tg}
                </div>
              ))}
            </div>
            <div className="requirement">
              <h4>Requirement</h4>
              <div className="require__line">
                <strong>Avalibility:</strong>
                <p>{status}</p>
              </div>
              <div className="require__line">
                <strong>Experience Level:</strong>
                <p>{exp}</p>
              </div>
              <div className="require__line">
                <strong>Languages :</strong>
                <p>English</p>
              </div>
              <div className="require__line">
                <strong>Qualification:</strong>
                <p>{qualification}</p>
              </div>
            </div>
            <div className="button__aplly__left button-apply">APPLY NOW</div>
          </div>
        </div>
    )
}
export default memo(SingleItem)