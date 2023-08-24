import Card from "../cards/card";
import { dollar } from "../../images/index";
import styles from '../../styles/components/card.module.scss'

const Products = ({ products }) => {
  return (
    <div className={styles.catalog_card_wrapper}>
      {products.map((el, i) => (
        <div className={styles.catalog_card}>
          <Card curencyImg={dollar} el={el} text={"buy"} />
        </div>
      ))}
    </div>
  );
};

export default Products;
