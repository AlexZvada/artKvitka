import { useEffect, useState } from "react";
import Image from "next/image";
import Template from "../components/main/Template";
import { mainPage } from "../library/library";
import styles from "../styles/mainPage/mainPage.module.scss";
import categories from "../styles/mainPage/categories.module.scss";
import cards from "../js/cards";
import Container from "../components/main/Layout";

import paint from "../images/main_page/categories/paint.png";
import poster from "../images/main_page/categories/poster.png";
import postcard from "../images/main_page/categories/postcard.png";
import cup from "../images/main_page/categories/cup.png";
import shirt from "../images/main_page/categories/shirt.png";
import bag from "../images/main_page/categories/bag.png";
import nft from "../images/main_page/categories/nft.png";
import digital from "../images/main_page/categories/digital.png";
import artist from "../images/main_page/artist.jpg";
import paintIcon from "../images/main_page/whywe/paintings_icon.jpg";
import qualityIcon from "../images/main_page/whywe/quality_icon.jpg";
import deliveryIcon from "../images/main_page/whywe/delivery_icon.jpg";

import A from "../components/links/link";
import Carousel from "../components/slider/slider";
import { useRouter } from "next/router";

const Index = () => {
  const [key, setKey] = useState("");
  const [input, setInput] = useState("");
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (!data.search) {
      router.push("/search");
    }else{
      router.replace(`/search/?${data.search}`)
    }
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    let lang = localStorage.getItem("lang");
    let currency = localStorage.getItem('cur');
    if (!lang) {
      lang = 'ua'
      localStorage.setItem('lang', lang)
    }
    if(!currency){
      currency = 'hryvna';
      localStorage.setItem('cur', currency)
    }
    setKey(lang);
  }, []);
  return (
    <Template>
      <div className={styles.search}>
        <Container>
          <form className={styles.form} onSubmit={submitHandler}>
            <input
              className={styles.input}
              name="search"
              type="text"
              value={input}
              onChange={onInputChange}
              placeholder={mainPage.search.placeholder[key]}
            />
            <button className={styles.btn} type="submit">
              {mainPage.search.searchBtn[key]}
            </button>
          </form>
        </Container>
      </div>
      <div className={styles.categories_wrapper}>
        <Container>
          <h2 className={styles.categories_title}>
            {mainPage.categories.title[key]}
          </h2>
        </Container>
        <Container>
          <div className={styles.categories}>
            <A href="/catalog/paintings" className={categories.card}>
              <Image src={paint} width={24} height={24} alt="Paintings" />
              <span className={categories.text}>
                {mainPage.categories.paintins[key]}
              </span>
            </A>
            <A href="/catalog/posters" className={categories.card}>
              <Image src={poster} width={24} height={24} alt="posters" />
              <span className={categories.text}>
                {mainPage.categories.posters[key]}
              </span>
            </A>
            <A href="/catalog/postcards" className={categories.card}>
              <Image src={postcard} width={24} height={24} alt="postcards" />
              <span className={categories.text}>
                {mainPage.categories.postcards[key]}
              </span>
            </A>
            <A href="/catalog/cups" className={categories.card}>
              <Image src={cup} width={24} height={24} alt="cups" />
              <span className={categories.text}>
                {mainPage.categories.cups[key]}
              </span>
            </A>
          </div>
          <div className={styles.categories}>
            <A href="/catalog/shirts" className={categories.card}>
              <Image src={shirt} width={24} height={24} alt="shirts" />
              <span className={categories.text}>
                {mainPage.categories.tShorts[key]}
              </span>
            </A>
            <A href="/catalog/bags" className={categories.card}>
              <Image src={bag} width={24} height={24} alt="bags" />
              <span className={categories.text}>
                {mainPage.categories.bags[key]}
              </span>
            </A>
            <A href="/catalog/nft" className={categories.card}>
              <Image src={nft} width={24} height={24} alt="NFT" />
              <span className={categories.text}>NFT</span>
            </A>
            <A href="/catalog/digital_goods" className={categories.card}>
              <Image src={digital} width={24} height={24} alt="digital" />
              <span className={categories.text}>
                {mainPage.categories.digital[key]}
              </span>
            </A>
          </div>
        </Container>
      </div>
      <div className={styles.novelity_wrapper}>
        <Container>
          <h2 className={styles.novelity_title}>{mainPage.novelties[key]}</h2>
          <Carousel array={cards} />
        </Container>
      </div>
      <div className={styles.popular_wrapper}>
        <Container>
          <h2 className={styles.popular_title}>{mainPage.popular[key]}</h2>
          <Carousel array={cards} />
        </Container>
      </div>
      <div className={styles.about}>
        <div className={styles.about_title_wrapper}>
          <Container>
            <h2 className={styles.about_title}>{mainPage.about[key]}</h2>
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
                {mainPage.about.btn[key]}
              </A>
            </div>
          </div>
        </Container>

        <Container>
          <h2 className={styles.whyWe}>{mainPage.whyWe[key]}</h2>
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
                {mainPage.whyWe.paintin.title[key]}
              </h3>
              <p className={styles.whyWe_card_text}>
                {mainPage.whyWe.paintin.text[key]}
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
                {mainPage.whyWe.quality.title[key]}
              </h3>
              <p className={styles.whyWe_card_text}>
                {mainPage.whyWe.quality.text[key]}
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
                {mainPage.whyWe.delivery.title[key]}
              </h3>
              <p className={styles.whyWe_card_text}>
                {mainPage.whyWe.delivery.text[key]}
              </p>
            </div>
          </div>
          <div className={styles.updates}>
            <h2 className={styles.updates_title}>{mainPage.updates[key]}</h2>
          </div>
        </Container>
      </div>
      <div className={styles.updates}>
        <div className={styles.updates_title_wrapper}>
          <Container>
            <h2 className={styles.updates_title}>
              {mainPage.updates.title[key]}
            </h2>
          </Container>
        </div>
        <Container>
          <div className={styles.updates_content}>
            <span className={styles.updates_text}>
              {mainPage.updates.text[key]}
            </span>
            <form action="">
              <input
                type="email"
                className={styles.updates_input}
                name="updates"
                placeholder={mainPage.updates.placeholder[key]}
              />
              <button type="submit" className={styles.updates_btn}>
                {mainPage.updates.btn[key]}
              </button>
            </form>
          </div>
        </Container>
      </div>
    </Template>
  );
};

export default Index;
