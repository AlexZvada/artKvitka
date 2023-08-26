import { useContext, useEffect, useState } from "react";
import { filterBar } from "../../library/library";
import { MainCheckbox, ExpandedCheckbox } from "./checkbox";
import styles from "../../styles/components/product_list/filterMenu.module.scss";
import { SearchContext } from "../../pages/search";

const FilterBar = (props) => {
  const { data, changeData } = props;
  const { key } = useContext(SearchContext);
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  // useEffect(() => {
  // }, []);
  return (
    <>
      <MainCheckbox lang={key} data={data} setData={changeData} />
      {isOpen ? (
        <ExpandedCheckbox
          lang={key}
          onClick={onClickHandler}
          data={data}
          setData={changeData}
        />
      ) : (
        <span onClick={onClickHandler} className={styles.more}>
          {filterBar.more[key]}
        </span>
      )}
    </>
  );
};

export default FilterBar;
