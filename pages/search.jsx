import { useEffect, useState } from "react";
import Template from "../components/main/Template";
import { serachPage } from "../library/library";
import EmptySearch from "../components/search/emptySearch";
import ProductsList from "../components/productList/productsList";
import Container from "../components/main/Layout";
import styles from "../styles/pages/pages.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDataToShow } from "../store/redusers/dataSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.global);
  const {toShow} = useSelector(state=> state.data)
  const [items, setItems] = useState(false);
  const [isSearched, setIsSearched] = useState(false)
  const [input, setInput] = useState('')

  const getEmpty = (isSearched) => {
    if (!isSearched) {
      return <EmptySearch title={serachPage.noResult.started.title[lang]} />;
    } else
      return (
        <EmptySearch
          title={serachPage.noResult.seached.title[lang]}
          text={serachPage.noResult.seached.text[lang]}
        />
      );
  };
  const onInputChangeHandler = (e)=>{
    setInput(e.target.value)
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    setItems(true);
  }
  useEffect(() => {
    dispatch(setDataToShow());
    return()=>{}
  }, []);
  return (
    <Template>
      <div className={styles.main}>
        <Container>
          <h1 className={styles.title}>{serachPage.title[lang]}</h1>
          <span className={styles.path}>{serachPage.path[lang]}</span>
          <div className={styles.main_inner}>
            <form className={styles.form} onSubmit={onSubmitHandler}>
              <input
                className={styles.input}
                name="search"
                type="text"
                value={input}
                onChange={onInputChangeHandler}
                placeholder={serachPage.form.placeholder[lang]}
              />
              <button className={styles.btn} type="submit">
                {serachPage.form.searchBtn[lang]}
              </button>
            </form>
            {items ? <ProductsList data={toShow} /> : getEmpty(isSearched)}
          </div>
        </Container>
      </div>
    </Template>
  );
};

export default Search;
