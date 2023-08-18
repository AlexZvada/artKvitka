import A from "../links/link";
import Image from "next/image";
import logo from "../../images/main_logo.jpg";
import Container from "./Layout";
import header from "../../styles/header/header.module.scss";
import link from "../../styles/links/links.module.scss";
import Menu from "../top_menu/menu";
import { useEffect, useState } from "react";
import lib from '../../library/library'
const Header = () => {
  const [key, setKey] = useState('')
 useEffect(()=>{
    let lang = localStorage.getItem("lang");
    setKey(lang)
 }, [])
  return (
    <header>
      <Container>
        <div className={header.general}>
          <A href={"/"}>
            <Image
              src={logo}
              width={192}
              height={64}
              alt="Artkvitka logo"
            />
          </A>
          <div className={header.navbar}>
            <A
              href={"/catalog"}
              text={lib.header.nav.catalog[key]}
              className={link.navLink}
            ></A>
            <A
              href={"/search"}
              text={lib.header.nav.search[key]}
              className={link.navLink}
            ></A>
            <A
              href={"/about"}
              text={lib.header.nav.about[key]}
              className={link.navLink}
            ></A>
            <A
              href={"/blog"}
              text={lib.header.nav.blog[key]}
              className={link.navLink}
            ></A>
            <A
              href={"/contacts"}
              text={lib.header.nav.contacts[key]}
              className={link.navLink}
            ></A>
          </div>
          <div className={header.menu}>
            <Menu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
