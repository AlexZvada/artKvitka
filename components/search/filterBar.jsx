import {useState } from "react";
import { filterBar } from "../../library/library";
import { MainCheckbox, ExpandedCheckbox } from "./checkbox";
import styles from '../../styles/searchPage/filterMenu.module.scss'
const FilterBar = ({lang}) => {
  const key = lang;
  const [isOpen, setIsOpen] = useState(false);
  // const [cur, setCur] = useState()

  const onClickHandler= ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <MainCheckbox lang={key} />
      {isOpen ? (
        <ExpandedCheckbox lang={key} onClick={onClickHandler} />
      ) : (
        <span onClick={onClickHandler} className={styles.more}>
          {filterBar.more[key]}
        </span>
      )}
    </>
  );
};

export default FilterBar;
