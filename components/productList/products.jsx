import Card from "../cards/card";
import styles from '../../styles/components/card.module.scss'

const Products = ({ products }) => {
  // console.log(products);
  return (
    <div className={styles.catalog_card_wrapper}>
      {products.map((el, i) => (
        <div className={styles.catalog_card} key={i}>
          {/* {console.log(i, el.price)} */}
          <Card el={el} />
        </div>
      ))}
      {/* {console.log("end")} */}
    </div>
  );
};

export default Products;
