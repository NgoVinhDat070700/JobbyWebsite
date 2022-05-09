import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/css/slider.css";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
function Sliders() {
  const [slide, setSlide] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://61aad3e3bfb110001773f31d.mockapi.io/jobby/slider"
      );
      const data = await res.data;
      setSlide(data);
    };
    getData();
  }, []);

  return (
    <section className="slider_home">
      <div className="container-fluid">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {slide?.map((item) => (
            <div className="row" key={item.id}>
              <img src={item.image} alt="" />
              <div className="content_slider">
                <h3>{item.name}</h3>
                <a href="#">{item.sumJob} Jobs</a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
export default Sliders;
