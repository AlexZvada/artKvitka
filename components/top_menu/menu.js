import styles from "../../styles/header/menu.module.scss";
import A from "../links/link";
import Image from "next/image";
import dollar from "../../images/header/dollar.svg";
import evro from "../../images/header/evro.svg";
import hryvna from "../../images/header/hryvna.svg";
import ua from '../../images/header/flag_ua.png'
import en from '../../images/header/flag_en.png'
import { selectLang } from "../../js/selectLang";
import { selectCurrency } from "../../js/selectCurrency";
import { useEffect, useState } from "react";
import Select from "react-select";
const Menu = () => {
  const [lang, setLang] = useState("");
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    let currency = localStorage.getItem("cur");
    if (!currency) {
      setCurrency("hruvna");
      return;
    }
    setCurrency(currency);
  });
  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (!lang) {
      setLang("ua");
      return;
    }
    setLang(lang);
  }, []);

  const currencyOptions = [
    {
      value: "dollar",
      label: <Image src={dollar} width={30} height={30} />,
    },
    { value: "evro", label: <Image src={evro} width={30} height={30} /> },
    { value: "hryvna", label: <Image src={hryvna} width={30} height={30} /> },
  ];

  const langOptions = [
    {
      value: "ru",
      label: "ru",
    },
    {
      value: "ua",
      label: <Image src={ua} width={30} height={30} />,
    },
    {
      value: "en",
      label: (
        <div>
          <Image src={en} width={30} height={30} />
        </div>
      ),
    },
  ];

  const getOption = (key, options) => {
    const option = options.find(el => el.value === key);
    return option;
  };
  return (
    <>
      <Select
        options={currencyOptions}
        label={currencyOptions.label}
        value={getOption(currency, currencyOptions)}
        onChange={selectCurrency}
        isSearchable={false}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
          }),
        }}
      />
      <Select
        options={langOptions}
        label={langOptions.label}
        value={getOption(lang, langOptions)}
        onChange={selectLang}
        isSearchable={false}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
          }),
        }}
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
