import { useSelector } from "react-redux";
import styles from "../../styles/components/product_list/productList.module.scss";
import FilterBar from "./filterBar";
import ItemList from "./itemList";
import { useEffect, useState } from "react";


const ProductsList= () => {
  
  const { toShow } = useSelector((store) => store.data);
  
  const [products, setProducts] = useState(toShow);
  useEffect(()=>{
    setProducts(toShow)
    // console.log(products);
  }, [toShow])
  return (
    <div className={styles.finded}>
      <div className={styles.finded_filterbar}>
        <FilterBar />
      </div>
      <div className={styles.finded_list}>
        <ItemList data={products} />
      </div>
    </div>
  );
};

export default ProductsList;
