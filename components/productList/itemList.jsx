import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { itemListL } from "../../library/library";
import styles from "../../styles/components/product_list/itemList.module.scss";
import Pagination from "./pagination";
import Products from "./products";
import { useSelector } from "react-redux";



const ItemList = ({data}) => {
  const {lang} = useSelector(store=>store.global)
  const [sortedBy, setSortedBy] = useState("recomended");
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
      label: `${itemListL.sort.recomended[lang]}`,
    },
    {
      value: "oldFirst",
      label: `${itemListL.sort.old[lang]}`,
    },
    {
      value: "newFirst",
      label: `${itemListL.sort.new[lang]}`,
    },
    {
      value: "cheapFirst",
      label: `${itemListL.sort.cheap[lang]}`,
    },
    {
      value: "expenciveFirst",
      label: `${itemListL.sort.expencive[lang]}`,
    },
  ];

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = data.slice(firstProductIndex, lastProductIndex);

  const navigate = (number) => setCurrentPage(number);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);
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
          totalProducts={data.length}
          navigate={navigate}
        />
      </div>
    </div>
  );
};

export default ItemList;
