import Template from "../components/main/Template";
import Container from "../components/main/Layout";
import Image from "next/image";
import artist from "../images/about/artist.jpg";
import artist2 from "../images/about/artist2.jpg";
import eagle from "../images/about/eagle.jpg";
import owl from "../images/about/owl.jpg";

import { about } from "../library/library";
import styles from "../styles/pages/pages.module.scss";
import { useSelector } from "react-redux";
const About = () => {
  const { lang } = useSelector((state) => state.global);
  return (
    <Template>
      <div className={styles.main}>
        <Container>
          <h1 className={styles.title}>{about.title[lang]}</h1>
          <span className={styles.path}>{about.path[lang]}</span>
          <div className={styles.about}>
            <div className={styles.about_img_wrapper}>
              <Image src={artist} width={580} height={600} alt="" />
              <Image src={artist2} width={580} height={600} alt="" />
              <span className={styles.about_artist_name}>
                {about.artist[lang]}
              </span>
            </div>
            <div className={styles.about_text}>
              <p>
                Согласно испанской традиции, Пикассо получил две фамилии по
                первым фамилиям родителей: отца — Руис и матери — Пикассо.
                Полное имя, которое будущий художник получил при крещении —
                Пабло Диего Хосе Франсиско де Паула Хуан Непомусено Мария де лос
                Ремедиос Сиприано де ла Сантисима Тринидад Мартир Патрисио Руис
                и Пикассо. Фамилия Пикассо по матери, под которой художник
                получил известность, имеет итальянское происхождение: прадед
                матери Пикассо Томмасо переехал в Испанию в начале XIX века из
                местечка Сори в провинции Генуя. В доме на малагской площади
                Мерсед, где родился Пикассо, ныне размещаются дом-музей
                художника и фонд, носящий его имя.
              </p>
              <p>
                Пикассо начал рисовать с самого детства, первые уроки
                художественного мастерства он получил у своего отца — учителя
                рисования Хосе Руиса Бласко, и вскоре сильно в этом преуспел. В
                8 лет он написал свою первую серьёзную картину маслом —
                «Пикадор», — которую очень любил и с которой не расставался в
                течение всей жизни.
              </p>
              <p>
                В 1891 году дон Хосе получил должность преподавателя рисования в
                Ла-Корунье, и юный Пабло вместе с семьёй переехал на север
                Испании, где обучался в местной школе искусств (1894—1895).
              </p>
            </div>
            <div className={styles.about_img_wrapper}>
              <Image src={eagle} width={580} height={600} alt="" />
              <Image src={owl} width={580} height={600} alt="" />
            </div>
            <div className={styles.about_text}>
              <p>
                Впоследствии семья перебралась в Барселону, и в 1895 году
                Пикассо поступил в школу изящных искусств Ла-Лонха. Пабло
                исполнилось только четырнадцать, поэтому он был слишком молод
                для поступления в Ла-Лонху. Тем не менее по настоянию отца он
                был допущен к сдаче вступительных экзаменов на конкурсной
                основе. Пикассо с блеском сдал все экзамены и поступил в
                Ла-Лонху. Сначала он подписывался своим именем по отцу Ruiz
                Blasco, но затем выбрал фамилию матери — Picasso.
              </p>
              <p>
                В начале октября 1897 года Пикассо уехал в Мадрид, где поступил
                в Королевскую академию изящных искусств Сан-Фернандо. Своё
                пребывание в Мадриде Пикассо использовал в основном для
                подробного изучения коллекции музея Прадо, а не для учёбы в
                академии с её классическими традициями, где Пикассо было тесно и
                скучно. В Барселону Пикассо вернулся в июне 1898 года, там он
                вступил в художественное общество Els Quatre Gats, по названию
                богемного кафе с круглыми столами. В этом кафе в 1900 году
                прошли его две первые персональные выставки.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Template>
  );
};

export default About;
