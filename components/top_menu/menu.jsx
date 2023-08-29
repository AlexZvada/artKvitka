import styles from "../../styles/header/menu.module.scss";
import A from "../links/link";
import Image from "next/image";
import dollar from "../../images/header/dollar.svg";
import evro from "../../images/header/evro.svg";
import hryvna from "../../images/header/hryvna.svg";
import ua from "../../images/header/flag_ua.png";
import en from "../../images/header/flag_en.png";
import { useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch, useSelector } from "react-redux";
import { setLang, setCur } from "../../store/redusers/globalOptionsSlice";

const Menu = () => {
  const { lang, cur } = useSelector((store) => store.global);
  const dispatch = useDispatch();

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
        // location.reload();
        break;
      case "evro":
        localStorage.setItem("cur", "evro");
        dispatch(setCur("evro"));
        // location.reload();
        break;
      case "hryvna":
        localStorage.setItem("cur", "hryvna");
        dispatch(setCur("hryvna"));
        // location.reload();
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
        // location.reload();
        break;
      case "ua":
        localStorage.setItem("lang", "ua");
        dispatch(setLang("ua"));
        // location.reload();
        break;
      case "en":
        localStorage.setItem("lang", "en");
        dispatch(setLang("en"));
        // location.reload();
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

  useEffect(()=>{
    const lang = localStorage.getItem('lang');
    const cur = localStorage.getItem('cur')
    if (!lang) {
      dispatch(setLang('ua'))
    }
    if (!cur) {
      dispatch(setCur('hryvna'))
    }
    if (lang&&cur) {
      dispatch(setLang(lang));
      dispatch(setCur(cur))
    }
  },[])
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
      <A
        href="/"
        className={`${styles.icons} ${styles.basket}`}
        id={"basket"}
      ></A>
      <A
        href="/"
        className={`${styles.icons} ${styles.favorites}`}
        id={"favorites"}
      ></A>
      <A
        href="/"
        className={`${styles.icons} ${styles.account}`}
        id={"account"}
      ></A>
    </>
  );
};

export default Menu;
