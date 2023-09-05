
import styles from "../../styles/components/product_list/itemList.module.scss";
const Pagination = ({ productsPerPage, totalProducts, navigate }) => {
  const pageNumbers = [];
  const navigateHandler = (e) => {
    const parrent = e.target.closest("ul");
    const target = e.target;
    parrent.childNodes.forEach(el => {
      el.classList.remove(`${styles.active}`);
    });
    navigate(target.innerText);
    target.classList.add(`${styles.active}`);
    window.scrollTo(0, 300);
  };

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className={styles.nav}>
        {pageNumbers.length>1 ? pageNumbers.map((number) => (
          <li
            key={number}
            onClick={navigateHandler}
            className={`${styles.nav_btn} ${number === 1 ? styles.active : ""}`}
          >
            {number}
          </li>
        )):''}
      </ul>
    </div>
  );
};

export default Pagination;
