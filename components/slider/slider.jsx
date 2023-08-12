import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dollar from "../../images/header/dollar.svg";
import evro from "../../images/header/evro.svg";
import hryvna from "../../images/header/hryvna.svg";
import styles from "../../styles/components/carousel.module.scss";

import { useEffect, useState } from "react";
import { mainPage } from "../../library/library";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#67AECA",
        left: "1185px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      {...props}
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#67AECA",
        left: "-30px",
        zIndex: "9999",
      }}
      onClick={onClick}
    ></div>
  );
}
const getCurrencyImg = (currency) => {
  switch (currency) {
    case "dollar":
      return dollar;
    case "evro":
      return evro;
    case "hryvna":
      return hryvna;
    default:
      break;
  }
};

const getPrise = (currency, price) => {
  let total;
  switch (currency) {
    case "dollar":
      total = price;
      break;
    case "evro":
      total = price * 0.91;
      break;
    case "hryvna":
      total = price * 36.93;
      break;
    default:
      break;
  }
  return total;
};

const onClickHandler = (e) => {
  const target = e.target;
  if (target.classList[1] === styles.active) {
    target.classList.remove(styles.active);
  } else {
    target.classList.add(styles.active);
  }
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
  const [key, setKey] = useState("");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    setKey(lang);
    const curency = localStorage.getItem("cur");
    setCurrency(curency);
  }, []);
  return (
    <Slider {...settings}>
      {array.map((el) => {
        return (
          <>
            <div className={styles.card} key={el.id}>
              <Image src={el.img} width={250} height={343} />
              <p className={styles.card_text}>{el.text}</p>
              <div className={styles.bottom}>
                <div className={styles.price_wrapper}>
                  <Image
                    src={getCurrencyImg(currency)}
                    width={30}
                    height={30}
                    alt="Currency"
                  />
                  <span className={styles.price}>
                    {getPrise(currency, el.price)}
                  </span>
                </div>
                <div className={styles.btns_wrapper}>
                  <button
                    className={styles.likeBtn}
                    onClick={onClickHandler}
                  ></button>
                  <button className={styles.buyBtn}>
                    {mainPage.cardBtn[key]}
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </Slider>
  );
};

export default Carousel;
