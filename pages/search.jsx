import { useEffect, useState, createContext } from "react";
import { useRouter } from "next/router";
import Template from "../components/main/Template";
import { serachPage } from "../library/library";
import EmptySearch from "../components/search/emptySearch";
import ProductsList from "../components/search/ProductsList";
import Container from "../components/main/Layout";
import styles from "../styles/searchPage/search.module.scss";
import cards from "../js/cards";

export const SearchContext = createContext(null);

const Search = () => {
  const [key, setKey] = useState("");
  const [items, setItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const router = useRouter();

  const getEmpty = (param) => {
    if (!param) {
      return <EmptySearch title={serachPage.noResult.started.title[key]} />;
    } else
      return (
        <EmptySearch
          title={serachPage.noResult.seached.title[key]}
          text={serachPage.noResult.seached.text[key]}
        />
      );
  };
  useEffect(() => {
    let lang = localStorage.getItem("lang");
    setKey(lang);
    setItems(cards);
    if (router.asPath.split("?")[1]) {
      setIsSearched(true);
      setItems(cards);

      // setItems(cards);
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
  }, [items]);
  return (
    <Template>
      <div className={styles.main}>
        <Container>
          <h1 className={styles.title}>{serachPage.title[key]}</h1>
          <span className={styles.path}>{serachPage.path[key]}</span>
          <div className={styles.main_inner}>
            <form className={styles.form} onSubmit={() => {}}>
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

            {items ? (
              <SearchContext.Provider
                value={{ key: key, data: items, filterData: setItems }}
              >
                <ProductsList />
              </SearchContext.Provider>
            ) : (
              getEmpty(isSearched)
            )}
          </div>
        </Container>
      </div>
    </Template>
  );
};

export default Search;
