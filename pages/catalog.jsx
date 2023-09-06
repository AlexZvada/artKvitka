import { useSelector } from "react-redux";
import Template from "../components/main/Template";
import Container from "../components/main/Layout";
import ProductsList from "../components/productList/productsList";
import { catalog } from "../library/library";
import styles from "../styles/pages/pages.module.scss";
const Catalog = () => {
  const {lang} = useSelector(state=> state.global)
  const {toShow} = useSelector(state=> state.data)
  return (
    <Template>
      <div className={styles.main}>
        <Container>
          <h1 className={styles.title}>{catalog.title[lang]}</h1>
          <span className={styles.path}>{catalog.path[lang]}</span>
          <div className={styles.main_inner}>
            <ProductsList data={toShow} />
          </div>
        </Container>
      </div>
    </Template>
  );
};

export default Catalog;
