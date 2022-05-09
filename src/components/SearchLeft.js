import { CheckCircle, Search } from "@mui/icons-material"
import axios from "axios"
import React, { memo, useEffect, useState } from "react"

function SearchLeft({inputText,setInputText,onChangeInput,handleSearch}){
    const [categories,setCategories] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const AllCategory = async ()=>{
          const res = await axios.get("http://localhost:3000/categories")
          setCategories(res.data)
          setLoading(false)
        }
        AllCategory()
      },[])
    console.log("re-render")
    return (
        <div className="banner__container__left">
          <div className="container__left__filter">
            <strong className="title__gird">Filter</strong>
            <p className="clear__gird">Clear All Filter</p>
          </div>
          <div className="container__left__skill">
            <div className="skill-title">
              <strong className="title__gird">Filter</strong>
              <p className="clear__gird">Clear All Filter</p>
            </div>
            <div className="form__search__kill">
              <Search />
              <input type="text" onChange={onChangeInput} name="searchKeyword" value={inputText.searchKeyword} placeholder="Keyword" />
            </div>
            <div className="list__tag__skills">
              <div className="tag__kill">UI</div>
              <div className="tag__kill">UX</div>
              <div className="tag__kill">PHP</div>
              <div className="tag__kill">JAVASCRIPT</div>
              <div className="tag__kill">ReactJS</div>
              <div className="tag__kill">NodeJS</div>
              <div className="tag__kill">Python</div>
            </div>
          </div>
          <div className="container__left__availability">
            <div className="availability__inline">
              <strong>Availability</strong>
              <div className="availability">
                <div className="check-availability">
                  <div className="check-cicle">
                    <CheckCircle fontSize="inherit" />
                  </div>
                  <p className="color-mo">Hourly</p>
                </div>
                <div className="check-availability">
                <div className="check-cicle">
                  <CheckCircle fontSize="inherit" />
                </div>
                <p className="color-mo">Part time</p>
                </div>
                
                <div className="check-availability">
                <div className="check-cicle">
                  <CheckCircle fontSize="inherit" />
                </div>
                <p className="color-mo">Full time</p>
                </div>
              </div>
            </div>
            <p className="color-mo">Clear</p>
          </div>
          <div className="form__jobtype">
            <div className="form__jobtype__title">
              <strong className="title__gird">Job type</strong>
              <p className="clear__gird">Clear</p>
            </div>
            <div className="form__input__type">
              <select className="select_date color-mo"  onChange={onChangeInput} name="searchJobType">
                <option disabled selected >Select Job Type</option>
                {categories.map((cat)=>(
                  <option value={cat.id} key={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="pay__rate__slide">
            <div className="pay__rate__title">
              <p className="title__gird grid__pay">
                <strong>Pay Rate</strong>($)
              </p>
              <p className="clear__gird grid__clear">Clear</p>
            </div>
            <div className="slider__pay__rate">
              <div className="progress"></div>
              <div className="range-input">
                <input type="range" className="range-min" min="0" max="10000" />
                <input type="range" className="range-max" min="0" max="7500" />
              </div>
            </div>
          </div>
          <div className="form__exp__leve">
            <div className="exp_titel">
              <strong className="title__gird">Experience Level</strong>
              <p className="clear__gird">Clear</p>
            </div>
            <div className="form__input__type">
              <select className="select_date color-mo">
                <option>1 Năm</option>
                <option>2 Năm</option>
                <option>3 Năm</option>
                <option>4 Năm</option>
                <option>5 Năm</option>
                <option>6 Năm</option>
                <option>7 Năm</option>
                <option>8 Năm</option>
                <option>9 Năm</option>
                <option>10 Năm</option>
              </select>
            </div>
          </div>
          <div className="container__left__location">
            <div className="form__location">
              <strong className="title__gird">Location</strong>
              <p className="clear__gird">Clear</p>
            </div>
            <div className="form__search_location">
              <Search inputText={inputText} setInputText={setInputText} />
              <input type="text"  onChange={onChangeInput} name="searchLocation" value={inputText.searchLocation} placeholder="Keyword" />
            </div>
          </div>
          <button style={{border:"none",cursor:"pointer"}} onClick={()=>handleSearch()} className="search__now">SEARCH NOW</button>
        </div>
    )
}
export default memo(SearchLeft)