import { useContext, useEffect, useState } from "react";
import { filterBar } from "../../library/library";
import { MainCheckbox, ExpandedCheckbox } from "./checkbox";
import styles from "../../styles/components/product_list/filterMenu.module.scss";
import { useSelector } from "react-redux";

const FilterBar = () => {
  const {lang} = useSelector(state=> state.global)
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <MainCheckbox />
      {isOpen ? (
        <ExpandedCheckbox
        />
      ) : (
        <span onClick={onClickHandler} className={styles.more}>
          {filterBar.more[lang]}
        </span>
      )}
    </>
  );
};

export default FilterBar;
