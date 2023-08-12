import Container from "./Layout";
import A from "../links/link";
import styles from '../../styles/footer/footer.module.scss';
import links from '../../styles/links/links.module.scss'
import lib from "../../library/library";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../images/main_logo.jpg";

const Footer = () => {
  const [key, setKey] = useState("");
  useEffect(() => {
    let lang = localStorage.getItem("lang");

    setKey(lang);
  }, []);
  return (
    <footer className={styles.bg}>
      <Container>
        <div className={styles.footer}>
          <Image
            src={logo}
            width={192}
            height={64}
            alt="Artkvitka logo"
            className=""
          />
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
              </div>
              <div className={styles.sotial}>
                <h3 className={styles.title}>{lib.footer.sotial[key]}</h3>
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
