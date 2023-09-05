import { useEffect, useState } from "react";
import Image from "next/image";
import Template from "../components/main/Template";
import { mainPage } from "../library/library";
import styles from "../styles/mainPage/mainPage.module.scss";
import categories from "../styles/mainPage/categories.module.scss";
import cards from "../js/cards";
import Container from "../components/main/Layout";

import {paint, poster, postcard, cup, shirt, bag, nft, digital, artist, paintIcon, qualityIcon, deliveryIcon} from '../images/index'

import A from "../components/links/link";
import Carousel from "../components/slider/slider";
import { useSelector } from "react-redux";

const Index = () => {
  const {lang} = useSelector(state => state.global)
  const {data} = useSelector(state=> state.data)
  // const [input, setInput] = useState("");
  return (
    <Template>
      <div className={styles.search}>
      </div>
      <div className={styles.categories_wrapper}>
        <Container>
          <h2 className={styles.categories_title}>
            {mainPage.categories.title[lang]}
          </h2>
        </Container>
        <Container>
          <div className={styles.categories}>
            <A href="/catalog/paintings" className={categories.card}>
              <Image src={paint} width={24} height={24} alt="Paintings" />
              <span className={categories.text}>
                {mainPage.categories.paintins[lang]}
              </span>
            </A>
            <A href="/catalog/posters" className={categories.card}>
              <Image src={poster} width={24} height={24} alt="posters" />
              <span className={categories.text}>
                {mainPage.categories.posters[lang]}
              </span>
            </A>
            <A href="/catalog/postcards" className={categories.card}>
              <Image src={postcard} width={24} height={24} alt="postcards" />
              <span className={categories.text}>
                {mainPage.categories.postcards[lang]}
              </span>
            </A>
            <A href="/catalog/cups" className={categories.card}>
              <Image src={cup} width={24} height={24} alt="cups" />
              <span className={categories.text}>
                {mainPage.categories.cups[lang]}
              </span>
            </A>
          </div>
          <div className={styles.categories}>
            <A href="/catalog/shirts" className={categories.card}>
              <Image src={shirt} width={24} height={24} alt="shirts" />
              <span className={categories.text}>
                {mainPage.categories.tShorts[lang]}
              </span>
            </A>
            <A href="/catalog/bags" className={categories.card}>
              <Image src={bag} width={24} height={24} alt="bags" />
              <span className={categories.text}>
                {mainPage.categories.bags[lang]}
              </span>
            </A>
            <A href="/catalog/nft" className={categories.card}>
              <Image src={nft} width={24} height={24} alt="NFT" />
              <span className={categories.text}>NFT</span>
            </A>
            <A href="/catalog/digital_goods" className={categories.card}>
              <Image src={digital} width={24} height={24} alt="digital" />
              <span className={categories.text}>
                {mainPage.categories.digital[lang]}
              </span>
            </A>
          </div>
        </Container>
      </div>
      <div className={styles.novelity_wrapper}>
        <Container>
          <h2 className={styles.novelity_title}>{mainPage.novelties[lang]}</h2>
          <Carousel array={data} />
        </Container>
      </div>
      <div className={styles.popular_wrapper}>
        <Container>
          <h2 className={styles.popular_title}>{mainPage.popular[lang]}</h2>
          <Carousel array={cards} />
        </Container>
      </div>
      <div className={styles.about}>
        <div className={styles.about_title_wrapper}>
          <Container>
            <h2 className={styles.about_title}>{mainPage.about[lang]}</h2>
          </Container>
        </div>
        <Container>
          <div className={styles.about_inner}>
            <div className={styles.about_frame}>
              <Image
                src={artist}
                width={450}
                height={450}
                className={styles.about_photo}
                alt="Artist"
              />
            </div>
            <div className={styles.about_text_wrapper}>
              <p className={styles.about_text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                dolor possimus harum nam reprehenderit, molestiae, iste
                doloremque eligendi inventore, praesentium ex debitis quam
                veritatis ad enim velit perspiciatis sapiente. Quis.
              </p>
              <A href="/about" className={styles.about_btn}>
                {mainPage.about.btn[lang]}
              </A>
            </div>
          </div>
        </Container>

        <Container>
          <h2 className={styles.whyWe}>{mainPage.whyWe[lang]}</h2>
          <div className={styles.whyWe_inner}>
            <div className={styles.whyWe_card}>
              <Image
                src={paintIcon}
                width={100}
                height={100}
                alt="Paintings icon"
                className={styles.whyWe_card_img}
              />
              <h3 className={styles.whyWe_card_title}>
                {mainPage.whyWe.paintin.title[lang]}
              </h3>
              <p className={styles.whyWe_card_text}>
                {mainPage.whyWe.paintin.text[lang]}
              </p>
            </div>
            <div className={styles.whyWe_card}>
              <Image
                src={qualityIcon}
                width={100}
                height={100}
                alt="Paintings icon"
                className={styles.whyWe_card_img}
              />

              <h3 className={styles.whyWe_card_title}>
                {mainPage.whyWe.quality.title[lang]}
              </h3>
              <p className={styles.whyWe_card_text}>
                {mainPage.whyWe.quality.text[lang]}
              </p>
            </div>
            <div className={styles.whyWe_card}>
              <Image
                src={deliveryIcon}
                width={100}
                height={100}
                alt="Paintings icon"
                className={styles.whyWe_card_img}
              />

              <h3 className={styles.whyWe_card_title}>
                {mainPage.whyWe.delivery.title[lang]}
              </h3>
              <p className={styles.whyWe_card_text}>
                {mainPage.whyWe.delivery.text[lang]}
              </p>
            </div>
          </div>
          <div className={styles.updates}>
            <h2 className={styles.updates_title}>{mainPage.updates[lang]}</h2>
          </div>
        </Container>
      </div>
      <div className={styles.updates}>
        <div className={styles.updates_title_wrapper}>
          <Container>
            <h2 className={styles.updates_title}>
              {mainPage.updates.title[lang]}
            </h2>
          </Container>
        </div>
        <Container>
          <div className={styles.updates_content}>
            <span className={styles.updates_text}>
              {mainPage.updates.text[lang]}
            </span>
            <form action="">
              <input
                type="email"
                className={styles.updates_input}
                name="updates"
                placeholder={mainPage.updates.placeholder[lang]}
              />
              <button type="submit" className={styles.updates_btn}>
                {mainPage.updates.btn[lang]}
              </button>
            </form>
          </div>
        </Container>
      </div>
    </Template>
  );
};

export default Index;
