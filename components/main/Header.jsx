import A from "../links/link";
import Image from "next/image";
import {logo} from "../../images/index";
import Container from "./Layout";
import header from "../../styles/header/header.module.scss";
import link from "../../styles/links/links.module.scss";
import Menu from "../top_menu/menu";
import { useEffect, useState } from "react";
import lib from '../../library/library'
import { useSelector } from "react-redux";
const Header = () => {
  const {lang} = useSelector(store => store.global)
  return (
    <header>
      <Container>
        <div className={header.general}>
          <A href={"/"}>
            <Image src={logo} width={192} height={64} alt="Artkvitka logo" />
          </A>
          <div className={header.navbar}>
            <A
              href={"/catalog"}
              text={lib.header.nav.catalog[lang]}
              className={link.navLink}
            ></A>
            <A
              href={"/search"}
              text={lib.header.nav.search[lang]}
              className={link.navLink}
            ></A>
            <A
              href={"/about"}
              text={lib.header.nav.about[lang]}
              className={link.navLink}
            ></A>
            <A
              href={"/blog"}
              text={lib.header.nav.blog[lang]}
              className={link.navLink}
            ></A>
            <A
              href={"/contacts"}
              text={lib.header.nav.contacts[lang]}
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
