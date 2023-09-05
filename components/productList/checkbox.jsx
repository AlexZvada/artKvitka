import { useEffect, useState } from "react";
import { filterBar } from "../../library/library";
import styles from "../../styles/components/product_list/filterMenu.module.scss";
import {
  filter,
  addDependency,
  removeDependency,
} from "../../store/redusers/dataSlice";
import { useDispatch, useSelector } from "react-redux";


export const MainCheckbox = () => {
  const {lang} = useSelector(state=> state.global)
  const { arrayOfDependencies} = useSelector(state=> state.data);
  const dispatch = useDispatch()

  const onChange = (e) => {
    if (e.target.checked) {
      dispatch(addDependency(e.target.value));
    }
    if (!e.target.checked) {
      dispatch(removeDependency(e.target.value))
    }
  };
  useEffect(() => {
    dispatch(filter())
  }, [arrayOfDependencies]);
  return (
    <div>
      <h2 className={styles.title}>{filterBar.title[lang]}</h2>
      <div className={styles.subtitle_wrapper}>
        <h3 className={styles.subtitle}>{filterBar.price.title[lang]}</h3>
        <span className={styles.price_from}>{filterBar.price.from[lang]}</span>
        <span className={styles.price_to}>{filterBar.price.to[lang]}</span>
      </div>
      <div className={styles.price_wrapper}>
        <input
          type="number"
          name="priceFrom"
          placeholder="0"
          className={styles.price_input}
        />
        <span>-</span>
        <input
          type="number"
          name="priceTo"
          placeholder="10 000"
          className={styles.price_input}
        />
      </div>
      <form className={styles.form} onChange={onChange}>
        <h3 className={styles.subtitle}>{filterBar.categories.title[lang]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="categories" value="paintings" />
          {filterBar.categories.paintins[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="categories" value="posters" />
          {filterBar.categories.posters[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="categories" value="postcards" />
          {filterBar.categories.postcards[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="categories" value="caps" />
          {filterBar.categories.cups[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="categories" value="t-shorts" />
          {filterBar.categories.tShorts[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="categories" value="bags" />
          {filterBar.categories.bags[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="categories" value="nft" />
          NFT
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="categories" value="digital" />
          {filterBar.categories.digital[lang]}
        </label>
      </form>
    </div>
  );
};
export const ExpandedCheckbox = () => {
  const {lang} = useSelector(state=> state.global)
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.style.title[lang]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="abstract" />
          {filterBar.style.abstract[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="minimalism" />
          {filterBar.style.minimalism[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="surrealism" />
          {filterBar.style.surrealism[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="stillLife" />
          {filterBar.style.stillLife[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="realism" />
          {filterBar.style.realism[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="illustration" />
          {filterBar.style.illustration[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="modern" />
          {filterBar.style.modern[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="figurative" />
          {filterBar.style.figurative[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="portrets" />
          {filterBar.style.portrets[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="popart" />
          {filterBar.style.popArt[lang]}
        </label>
      </form>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.paints.title[lang]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="akvarel" />
          {filterBar.paints.akvarel[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="acrilic" />
          {filterBar.paints.acrilic[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="oil" />
          {filterBar.paints.oil[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="ink" />
          {filterBar.paints.ink[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="gouashe" />
          {filterBar.paints.gouashe[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="graphite" />
          {filterBar.paints.graphite[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="coal" />
          {filterBar.paints.coal[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="enamel" />
          {filterBar.paints.enamel[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="airbrush" />
          {filterBar.paints.airbrush[lang]}
        </label>
      </form>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.material.title[lang]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="canvas" />
          {filterBar.material.canvas[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="paper" />
          {filterBar.material.paper[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="linenCanvas" />
          {filterBar.material.canvas.linen[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="cotonCanvas" />
          {filterBar.material.canvas.coton[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="silkCanvas" />
          {filterBar.material.canvas.silk[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="paintingCanvas" />
          {filterBar.material.canvas.painting[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="stadyCanvas" />
          {filterBar.material.canvas.stady[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="akvarelPaper" />
          {filterBar.material.paper.akvarel[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="ricePaper" />
          {filterBar.material.paper.rice[lang]}
        </label>
      </form>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.orientation.title[lang]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="orientation" value="suare" />
          {filterBar.orientation.square[lang]}{" "}
          <span className={`${styles.orientation_img} ${styles.square}`}></span>
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="orientation" value="vertical" />
          {filterBar.orientation.vertical[lang]}
          <span
            className={`${styles.orientation_img} ${styles.vertical}`}
          ></span>
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="orientation" value="horisontal" />
          {filterBar.orientation.horisontal[lang]}{" "}
          <span
            className={`${styles.orientation_img} ${styles.horisontal}`}
          ></span>
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="orientation" value="panoram" />
          {filterBar.orientation.panoram[lang]}{" "}
          <span
            className={`${styles.orientation_img} ${styles.panoram}`}
          ></span>
        </label>
      </form>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.size.title[lang]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="size" value="small" />
          {filterBar.size.small[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="size" value="medium" />
          {filterBar.size.medium[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="size" value="large" />
          {filterBar.size.large[lang]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="size" value="oversize" />
          {filterBar.size.extraLarge[lang]}
        </label>
      </form>
      <span className={styles.more} onClick={onClick}>
        {filterBar.less[lang]}
      </span>
    </div>
  );
};
