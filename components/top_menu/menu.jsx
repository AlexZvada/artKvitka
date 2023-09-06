import styles from "../../styles/header/menu.module.scss";
import A from "../links/link";
import Image from "next/image";
import { dollar, evro, hryvna } from "../../images/index";
import ua from "../../images/header/flag_ua.png";
import en from "../../images/header/flag_en.png";
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setLang,
  setCur,
  setCurrentCource,
} from "../../store/redusers/globalOptionsSlice";

const Menu = () => {
  const { lang, cur } = useSelector((store) => store.global);
  const { likedCount, inBucketCount } = useSelector((store) => store.card);
  const [course, setCourse] = useState({});

  const dispatch = useDispatch();
  async function getCurrentCourse() {
    const fetchData = await fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    const data = await fetchData.json();
    const evro = data.find((el) => 
      el.cc === "EUR"
    );
    const dollar = data.find((el) => 
      el.cc === "USD"
    );
    return {
      evro: dollar.rate / evro.rate,
      hryvna: dollar.rate,
      dollar: 1,
    };
  }

  const getOption = (key, options) => {
    const option = options.find((el) => el.value === key);
    return option;
  };
  const selectCurrency = (e) => {
    const value = e.value;
    switch (value) {
      case "dollar":
        localStorage.setItem("cur", "dollar");
        dispatch(setCur("dollar"));
        dispatch(setCurrentCource(course.dollar));
        break;
      case "evro":
        localStorage.setItem("cur", "evro");
        dispatch(setCur("evro"));
        dispatch(setCurrentCource(course.evro));
        break;
      case "hryvna":
        localStorage.setItem("cur", "hryvna");
        dispatch(setCur("hryvna"));
        dispatch(setCurrentCource(course.hryvna));

      default:
        break;
    }
  };
  const selectLang = (e) => {
    const value = e.value;
    switch (value) {
      case "ru":
        localStorage.setItem("lang", "ru");
        dispatch(setLang("ru"));
        break;
      case "ua":
        localStorage.setItem("lang", "ua");
        dispatch(setLang("ua"));
        break;
      case "en":
        localStorage.setItem("lang", "en");
        dispatch(setLang("en"));
      default:
        break;
    }
  };

  const currencyOptions = [
    {
      value: "dollar",
      label: <Image src={dollar} width={30} height={30} alt="Dollar" />,
    },
    {
      value: "evro",
      label: <Image src={evro} width={30} height={30} alt="Evro" />,
    },
    {
      value: "hryvna",
      label: <Image src={hryvna} width={30} height={30} alt="Hryvna" />,
    },
  ];

  const langOptions = [
    {
      value: "ru",
      label: "ru",
    },
    {
      value: "ua",
      label: <Image src={ua} width={30} height={30} alt="Ukrainian language" />,
    },
    {
      value: "en",
      label: <Image src={en} width={30} height={30} alt="English language" />,
    },
  ];

  useEffect( () => {
    // const c =  getCurrentCourse()
    

    const lang = localStorage.getItem("lang");
    const cur = localStorage.getItem("cur");
    if (!lang) {
      dispatch(setLang("ua"));
    }
    if (!cur) {
      dispatch(setCur("hryvna"));
    }
    if (lang && cur) {
      dispatch(setLang(lang));
      dispatch(setCur(cur));
    }
    
  }, []);
  return (
    <>
      <Dropdown
        controlClassName={styles.dropMenu}
        options={currencyOptions}
        value={getOption(cur, currencyOptions)}
        onChange={selectCurrency}
      />
      <Dropdown
        controlClassName={styles.dropMenu}
        options={langOptions}
        value={getOption(lang, langOptions)}
        onChange={selectLang}
      />
      <span className={styles.btn_wrapper}>
        <A
          href="/"
          className={`${styles.icons} ${styles.basket}`}
          id={"basket"}
        />
        {inBucketCount > 0 ? (
          <span className={styles.btn}>{inBucketCount}</span>
        ) : null}
      </span>
      <span className={styles.btn_wrapper}>
        <A
          href="/favorites"
          className={`${styles.icons} ${styles.favorites}`}
          id={"favorites"}
        />
        {likedCount > 0 ? (
          <span className={styles.btn}>{likedCount}</span>
        ) : null}
      </span>
      <A
        href="/"
        className={`${styles.icons} ${styles.account}`}
        id={"account"}
      />
    </>
  );
};

export default Menu;
