import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pageFourth.scss";
import DataHistory from "./DataHistory.json";
import { useTranslation } from 'react-i18next';
function PageFourth() {
  //translate
  const { t } = useTranslation();
  const [data, setData] = useState(DataHistory);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          initialSlide: 1,
        },
      },
    ],
  };
  const renderData = data.history.map((val, index) => (
    <div className="item-history" key={val.id}>
      <div className="year">
        <p className={"year" + val.year}>{val.year}</p>
      </div>
      <div className="item-box">
        {val.childrenYears.map((child, i) => {
          const title = "home.fourth.history." + index + ".childrenYears." + i + ".title";
          const type = "home.fourth.history." + index + ".childrenYears." + i + ".type";
          return (
            <div className="item-year" key={child.id}>
              <h2>{t(title)}</h2>
              <p>{t(type)}</p>
            </div>
          );
        })}
      </div>
    </div>
  ));
  return (
    <div className="page-fourth">
      <div className="fourth-container">
        <h1 className="fourth-title">History</h1>
        <div className="list-history">
          <Slider {...settings}>{renderData}</Slider>
        </div>

      </div>
    </div>
  );
}

export default PageFourth;
