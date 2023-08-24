import Slider from "react-slick";
import Card from "../cards/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dollar, evro, hryvna } from '../../images/index'
import styles from "../../styles/components/carousel.module.scss";

import { useEffect, useState } from "react";
import { itemCard } from "../../library/library";

function NextArrow({ currentSlide, slideCount, ...props }) {
  return (
    <div
      {...props}
      className={`slick-next slick-arrow 
        ${currentSlide === slideCount - 1 ? " slick-disabled" : ""} ${
        styles.slick_arrow_right
      }`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
      style={{
        display: "block",
        backgroundColor: "#67AECA",
        left: "1154px",
      }}
    />
  );
}

function PrevArrow({ currentSlide, slideCount, ...props }) {
  return (
    <div
      {...props}
      className={`slick-prev ${currentSlide === 0 ? "slick-disabled" : ""} ${
        styles.slick_arrow_left
      }`}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
      style={{
        display: "block",
        backgroundColor: "#67AECA",
        left: "0px",
        zIndex: "9999",
      }}
    ></div>
  );
}
const getPrice = (price, course) => {
  let total = price * course;

  return total;
};

const Carousel = ({ array }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [currency, setCurrency] = useState();
  const [curencyImg, setCurrencyImg] = useState();
  const [key, setKey] = useState("");
  const [course, setCourse] = useState(null);

  const getCurrencyImg = (currency) => {
    switch (currency) {
      case "dollar":
        setCurrencyImg(dollar);
        break;
      case "evro":
        setCurrencyImg(evro);
        break;
      case "hryvna":
        setCurrencyImg(hryvna);
        break;
      default:
        break;
    }
  };

  async function getCurrentCourse(currency) {
    const fetchData = await fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    const data = await fetchData.json();
    const evro = data.find((el) => {
      return el.r030 === 978;
    });
    const dollar = data.find((el) => {
      return el.r030 === 840;
    });
    switch (currency) {
      case "dollar":
        setCourse(1);
        break;
      case "evro":
        setCourse((dollar.rate / evro.rate).toFixed(3));
        break;
      case "hryvna":
        setCourse(dollar.rate.toFixed(2));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    setKey(lang);
    const curency = localStorage.getItem("cur");
    setCurrency(curency);
    getCurrencyImg(curency);
    getCurrentCourse(curency);
  }, []);
  return (
    <Slider {...settings}>
      {array.map((el, index) => {
        return (
          <Card
            curencyImg={curencyImg}
            index={index}
            el={el}
            price={getPrice(el.price, course)}
            text={itemCard.btn[key]}
            alt={`${currency}`}
            key={index}
          />
        );
      })}
    </Slider>
  );
};

export default Carousel;
