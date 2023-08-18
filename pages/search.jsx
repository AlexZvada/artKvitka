import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Template from "../components/main/Template";
import { serachPage } from "../library/library";
import EmptySearch from "../components/search/emptySearch";
import Container from "../components/main/Layout";
import styles from '../styles/searchPage/search.module.scss'

const Search = () => {
  const [key, setKey] = useState("");
  const [item, setItem] = useState(null);
  const [searched, setSearched] = useState(false);
  const router = useRouter();

  const getEmpty = (param)=>{
    if (!param) {
      return (<EmptySearch title={serachPage.noResult.started.title[key]} />);
    }
    else return (
      <EmptySearch
        title={serachPage.noResult.seached.title[key]}
        text={serachPage.noResult.seached.text[key]}
      />
    );
  }
  useEffect(() => {
    let lang = localStorage.getItem("lang");
    setKey(lang);
    if (router.asPath.split("?")[1]) {
      setSearched(true);
      // console.log();
      // const fetchData = await fetch('...', {

      //   body: JSON.stringify(query.Search)
      // })
      // const data = await fetchData.json()
      // let data;
      // if (data) {
      //   setItem(data);
      // }
    } else return;
  }, []);
  return (
    <Template>
      <div className={styles.main}>
        <Container>
          <h1 className={styles.title}>{serachPage.title[key]}</h1>
          <span className={styles.path}>{serachPage.path[key]}</span>
          <div className={styles.main_inner}>
            <form className={styles.form} onSubmit={"submitHandler"}>
              <input
                className={styles.input}
                name="search"
                type="text"
                // value={input}
                // onChange={onInputChange}
                placeholder={serachPage.form.placeholder[key]}
              />
              <button className={styles.btn} type="submit">
                {serachPage.form.searchBtn[key]}
              </button>
            </form>
            {item
              ? item.map((el) => {
                  return el;
                })
              : getEmpty(searched)}
          </div>
        </Container>
      </div>
    </Template>
  );
};

export default Search;
