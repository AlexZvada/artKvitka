import Template from "../components/main/Template";
import Container from "../components/main/Layout";
import { contacts } from "../library/library";
import { useSelector } from "react-redux";
import styles from "../styles/pages/pages.module.scss";
import A from "../components/links/link";
import Image from "next/image";
import saatchi from '../images/footer/Saatchi.svg'
import opensea from '../images/footer/opensea.svg'
import rarible from '../images/footer/rerible.svg'
import insta from '../images/footer/instagram.svg'
import { useState } from "react";


const Contacts = () => {
  const {lang} = useSelector(state=>state.global)
  const [input, setInput] = useState({
    name:'',
    email:'',
    theme:'',
    text:'',
  })
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmitHandler = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    //do some logic with data

    setInput({
      name: "",
      email: "",
      theme: "",
      text: "",
    });
  }
  return (
    <Template>
      <Container>
        <h1 className={styles.title}>{contacts.title[lang]}</h1>
        <span className={styles.path}>{contacts.path[lang]}</span>
        <div className={styles.contacts}>
          <div className={styles.contacts_description}>
            <h2 className={styles.contacts_title}>
              {contacts.descTitle[lang]}
            </h2>
            <p className={styles.contacts_text}>{contacts.descPhone[lang]}</p>
            <p className={styles.contacts_text}>(+380)-xx-xxx-xx-xx</p>
            <p className={styles.contacts_text}>{contacts.descrText[lang]}</p>
            <h3 className={styles.contacts_subtitle}>
              {contacts.descrPlatforms[lang]}
            </h3>
            <div className={styles.contacts_sotial_inner}>
              <A
                href={""}
                // target={"_blank"}
                className={`${styles.contacts_sotial}`}
              >
                <Image src={insta} width={20} height={20} alt="" />
                <span className={styles.contacts_sotial_descr}>Instagram</span>
              </A>
              <A
                href={"https://www.saatchiart.com/artnadi"}
                target={"_blank"}
                className={`${styles.contacts_sotial} `}
              >
                <Image src={saatchi} width={20} height={20} alt="" />
                <span className={styles.contacts_sotial_descr}>Saatchi</span>
              </A>
              <A
                href={"https://opensea.io/NJwatercolorArt"}
                target={"_blank"}
                className={`${styles.contacts_sotial}`}
              >
                <Image src={opensea} width={20} height={20} alt="" />
                <span className={styles.contacts_sotial_descr}>OpenSea</span>
              </A>
              <A
                href={"https://rarible.com/njart/owned"}
                target={"_blank"}
                className={`${styles.contacts_sotial}`}
              >
                <Image src={rarible} width={20} height={20} alt="" />
                <span className={styles.contacts_sotial_descr}>Rarible</span>
              </A>
            </div>
          </div>

          <form className={styles.contacts_form} onSubmit={onSubmitHandler}>
            <label>
              <h2 className={styles.contacts_label}>
                {contacts.form.name.lable[lang]}
              </h2>
              <input
                type="text"
                name="name"
                value={input.name}
                placeholder={contacts.form.name.placeholder[lang]}
                required
                className={styles.contacts_input}
                onChange={onChangeHandler}
              />
            </label>
            <label>
              <h2 className={styles.contacts_label}>
                {contacts.form.email.lable[lang]}
              </h2>
              <input
                type="email"
                name="email"
                value={input.email}
                placeholder={contacts.form.email.placeholder[lang]}
                required
                className={styles.contacts_input}
                onChange={onChangeHandler}
              />
            </label>
            <label>
              <h2 className={styles.contacts_label}>
                {contacts.form.theme.lable[lang]}
              </h2>
              <input
                type="text"
                name="theme"
                value={input.theme}
                placeholder={contacts.form.theme.placeholder[lang]}
                className={styles.contacts_input}
                onChange={onChangeHandler}
              />
            </label>
            <label>
              <h2 className={styles.contacts_label}>
                {contacts.form.text.lable[lang]}
              </h2>
              <input
                type="text"
                name="text"
                value={input.text}
                placeholder={contacts.form.text.placeholder[lang]}
                className={styles.contacts_input}
                onChange={onChangeHandler}
              />
            </label>
            <button type="submit" className={styles.contacts_btn}>
              {contacts.form.btn[lang]}
            </button>
          </form>
        </div>
      </Container>
    </Template>
  );
};

export default Contacts;
