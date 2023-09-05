import Slider from "react-slick";
import Card from "../cards/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/components/carousel.module.scss";
import { useSelector } from "react-redux";

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
  const { curImg, lang, cur } = useSelector((store) => store.global);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return (
    <Slider {...settings}>
      {array.map((el, index) => {
        return (
          <Card
            el={el}
            key={index}
          />
        );
      })}
    </Slider>
  );
};

export default Carousel;
