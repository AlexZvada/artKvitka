import { useContext, useEffect, useState } from "react";
import styles from "../../styles/searchPage/search.module.scss";
import FilterBar from "./filterBar";
import ItemList from "./itemList";
import { SearchContext } from "../../pages/search";


const ProductsList= () => {
  const {data} = useContext(SearchContext)
  const [items, setItems]= useState([])
  useEffect(()=>{
    setItems(data)
    console.log(items);
  },[])
  return <div className={styles.finded}>
    <div className={styles.finded_filterbar}>
        <FilterBar
        items={items}
        />
    </div>
    <div className={styles.finded_list}>
      <ItemList
        items={items}
      />
    </div>
  </div>;
};

export default ProductsList;
