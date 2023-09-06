import { useSelector } from "react-redux";
import styles from "../../styles/components/product_list/productList.module.scss";
import FilterBar from "./filterBar";
import ItemList from "./itemList";


const ProductsList= ({data}) => {
  return (
    <div className={styles.finded}>
      <div className={styles.finded_filterbar}>
        <FilterBar />
      </div>
      <div className={styles.finded_list}>
        <ItemList data={data} />
      </div>
    </div>
  );
};

export default ProductsList;
