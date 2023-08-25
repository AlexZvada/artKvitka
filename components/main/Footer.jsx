import Container from "./Layout";
import A from "../links/link";
import styles from "../../styles/footer/footer.module.scss";
import links from "../../styles/links/links.module.scss";
import lib from "../../library/library";
import {  useState, useEffect } from "react";
import Image from "next/image";
import {
  logo,
  visa,
  mastercard,
  binance,
  apay,
  gpay,
} from "../../images/index";
import { MainOptions } from "./Template";

const Footer = () => {
   const [key, setKey] = useState("");
   useEffect(() => {
     let lang = localStorage.getItem("lang");
     setKey(lang);
   }, []);
  return (
    <footer className={styles.bg}>
      <Container>
        <div className={styles.wrapper}>
          <Image src={logo} width={192} height={64} alt="Artkvitka logo" />
          <div className={styles.right_side}>
            <div className={styles.right_side_top}>
              <div className={styles.about}>
                <h3 className={styles.title}>{lib.footer.about.title[key]}</h3>
                <A
                  href={"/about"}
                  text={lib.footer.about.artist[key]}
                  className={links.footerLink}
                ></A>
                <A
                  href={"/blog"}
                  text={lib.footer.about.blog[key]}
                  className={links.footerLink}
                ></A>
              </div>
              <div className={styles.info}>
                <h3 className={styles.title}>{lib.footer.info.title[key]}</h3>
                <A
                  href={"/payment"}
                  text={lib.footer.info.payment[key]}
                  className={links.footerLink}
                ></A>
                <A
                  href={"/delivery"}
                  text={lib.footer.info.delivety[key]}
                  className={links.footerLink}
                ></A>
                <A
                  href={"/contacts"}
                  text={lib.footer.info.contacts[key]}
                  className={links.footerLink}
                ></A>
              </div>
              <div className={styles.accept}>
                <h3 className={styles.title}>{lib.footer.paymentWays[key]}</h3>
                <div className={styles.accept_inner}>
                  <Image
                    className={styles.accept_img}
                    src={visa}
                    width={48}
                    height={"auto"}
                    alt="Visa logo"
                  />
                  <Image
                    className={styles.accept_img}
                    src={mastercard}
                    width={24}
                    height={"auto"}
                    alt="Mastercsrd logo"
                  />
                  <Image
                    className={styles.accept_img}
                    src={binance}
                    width={19}
                    height={"auto"}
                    alt="Binance logo"
                  />
                  <Image
                    className={styles.accept_img}
                    src={apay}
                    width={48}
                    height={"auto"}
                    alt="Apple pay logo"
                  />
                  <Image
                    className={styles.accept_img}
                    src={gpay}
                    width={47}
                    height={"auto"}
                    alt="Google pay logo"
                  />
                </div>
              </div>
              <div className={styles.sotial}>
                <h3 className={styles.title}>{lib.footer.sotial[key]}</h3>
                <div className={styles.sotial_inner}>
                  <A
                    href={"https://www.saatchiart.com/artnadi"}
                    target={"_blank"}
                    className={`${styles.sotial_link} ${styles.sotial_link_saatchi}`}
                  />
                  <A
                    href={"https://opensea.io/NJwatercolorArt"}
                    target={"_blank"}
                    className={`${styles.sotial_link} ${styles.sotial_link_opensea}`}
                  />
                  <A
                    href={"https://rarible.com/njart/owned"}
                    target={"_blank"}
                    className={`${styles.sotial_link} ${styles.sotial_link_rarible}`}
                  />
                  <A
                    href={""}
                    // target={"_blank"}
                    className={`${styles.sotial_link} ${styles.sotial_link_instagram}`}
                  />
                </div>
              </div>
            </div>
            <div className={styles.right_side_bottom}>
              <span>{lib.footer.confid[key]}</span>
              <span>©2023 ArtKvitka {lib.footer.rights[key]}</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
