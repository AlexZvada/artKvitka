import { useContext, useState } from "react";
import { filterBar } from "../../library/library";
import { MainCheckbox, ExpandedCheckbox } from "./checkbox";
import styles from "../../styles/searchPage/filterMenu.module.scss";
import { SearchContext } from "../../pages/search";

const FilterBar = ({items}) => {
  const { key } = useContext(SearchContext);
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MainCheckbox lang={key} data={items}/>
      {isOpen ? (
        <ExpandedCheckbox
          lang={key}
          onClick={onClickHandler}
          data={items}
          filterData={filterData}
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
