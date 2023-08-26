import { useContext, useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { itemListL } from "../../library/library";
import styles from "../../styles/components/itemList.module.scss";
import sort from "../../js/sortItems";
import Pagination from "./pagination";
import Products from "./products";
import { SearchContext } from "../../pages/search";



const ItemList = ({data}) => {
  const { key } = useContext(SearchContext);
  const [sortedBy, setSortedBy] = useState("recomended");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const selectSortBy = (e) => {
    const value = e.value;
    switch (value) {
      case "recomended":
        setSortedBy("recomended");
        break;
      case "oldFirst":
        setSortedBy("oldFirst");
        break;
      case "newFirst":
        setSortedBy("newFirst");
        break;
      case "cheapFirst":
        setSortedBy("cheapFirst");
        break;
      case "expenciveFirst":
        setSortedBy("expenciveFirst");
      default:
        break;
    }
  };
  const getOption = (key, options) => {
    const option = options.find((el) => el.value === key);
    return option;
  };
  const sortOptions = [
    {
      value: "recomended",
      label: `${itemListL.sort.recomended[key]}`,
    },
    {
      value: "oldFirst",
      label: `${itemListL.sort.old[key]}`,
    },
    {
      value: "newFirst",
      label: `${itemListL.sort.new[key]}`,
    },
    {
      value: "cheapFirst",
      label: `${itemListL.sort.cheap[key]}`,
    },
    {
      value: "expenciveFirst",
      label: `${itemListL.sort.expencive[key]}`,
    },
  ];

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex)

  const navigate = (number) => setCurrentPage(number);

  useEffect(() => {
    setProducts(data);
  }, [data]);
  useEffect(() => {
    const sorted = sort(data, sortedBy);
    setProducts(sorted);
    setCurrentPage(1)
  }, [sortedBy]);
  return (
    <div>
      <div className={styles.dropMenu_wrapper}>
        <Dropdown
          controlClassName={styles.dropMenu}
          options={sortOptions}
          value={getOption(sortedBy, sortOptions)}
          onChange={selectSortBy}
        />
      </div>
      <div className={styles.list}>
        <Products products={currentProduct} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          navigate={navigate}
        />
      </div>
    </div>
  );
};

export default ItemList;
