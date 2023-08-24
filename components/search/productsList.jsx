import { useEffect, useState } from "react";
import styles from "../../styles/searchPage/search.module.scss";
import cardList from "../../js/cards";
import FilterBar from "./filterBar";
import ItemList from "./itemList"
// import {se} from '../../library/library'
const Items= ({lang, data}) => {
  const [list, setList] = useState();
  useEffect(() => {
    setList(cardList);
  }, []);
  return <div className={styles.finded}>
    <div className={styles.finded_filterbar}>
        <FilterBar lang={lang}/>
    </div>
    <div className={styles.finded_list}>
      <ItemList lang={lang} data={data}></ItemList>
    </div>
  </div>;
};

export default Items;
