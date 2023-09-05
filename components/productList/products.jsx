import Card from "../cards/card";
import styles from '../../styles/components/card.module.scss'

const Products = ({ products }) => {
  return (
    <div className={styles.catalog_card_wrapper}>
      {products.map((el, i) => (
        <div className={styles.catalog_card} key={i}>
          <Card el={el} />
        </div>
      ))}
    </div>
  );
};

export default Products;
