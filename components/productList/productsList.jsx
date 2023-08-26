import { useEffect, useState } from "react";
import styles from "../../styles/components/product_list/productList.module.scss";
import FilterBar from "./filterBar";
import ItemList from "./itemList";


const ProductsList= ({data}) => {
  const [items, setItems] = useState([]);
 function setDataHandler(a){
    setItems(a)
  }
  useEffect(() => {
    setItems(data);
  }, []);
  return (
    <div className={styles.finded}>
      <div className={styles.finded_filterbar}>
        <FilterBar data={data} changeData={setDataHandler} />
      </div>
      <div className={styles.finded_list}>
        <ItemList data={items} />
      </div>
    </div>
  );
};

export default ProductsList;
