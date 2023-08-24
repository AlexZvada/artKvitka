import {filterBar} from '../../library/library'
import styles from '../../styles/searchPage/filterMenu.module.scss'
export const MainCheckbox = ({lang})=>{
    const key = lang;
    return (
      <div>
        <h2 className={styles.title}>{filterBar.title[key]}</h2>
        <div className={styles.subtitle_wrapper}>
          <h3 className={styles.subtitle}>{filterBar.price.title[key]}</h3>
          <span className={styles.price_from}>{filterBar.price.from[key]}</span>
          <span className={styles.price_to}>{filterBar.price.to[key]}</span>
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
        <form className={styles.form}>
          <h3 className={styles.subtitle}>{filterBar.categories.title[key]}</h3>
          <label className={styles.checkbox}>
            <input type="checkbox" name="categories" value="paintings" />
            {filterBar.categories.paintins[key]}
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" name="categories" value="posters" />
            {filterBar.categories.posters[key]}
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" name="categories" value="postcards" />
            {filterBar.categories.postcards[key]}
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" name="categories" value="caps" />
            {filterBar.categories.cups[key]}
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" name="categories" value="t-shords" />
            {filterBar.categories.tShorts[key]}
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" name="categories" value="bags" />
            {filterBar.categories.bags[key]}
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" name="categories" value="paintings" />
            {filterBar.categories.title[key]}
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" name="categories" value="nft" />
            NFT
          </label>
          <label className={styles.checkbox}>
            <input type="checkbox" name="categories" value="digital" />
            {filterBar.categories.digital[key]}
          </label>
        </form>
      </div>
    );
}
export const ExpandedCheckbox = ({lang, onClick}) => {
    const key = lang;
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.style.title[key]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="abstract" />
          {filterBar.style.abstract[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="minimalism" />
          {filterBar.style.minimalism[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="surrealism" />
          {filterBar.style.surrealism[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="stillLife" />
          {filterBar.style.stillLife[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="realism" />
          {filterBar.style.realism[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="illustration" />
          {filterBar.style.illustration[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="modern" />
          {filterBar.style.modern[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="figurative" />
          {filterBar.style.figurative[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="portrets" />
          {filterBar.style.portrets[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="styles" value="popart" />
          {filterBar.style.popArt[key]}
        </label>
      </form>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.paints.title[key]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="akvarel" />
          {filterBar.paints.akvarel[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="acrilic" />
          {filterBar.paints.acrilic[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="oil" />
          {filterBar.paints.oil[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="ink" />
          {filterBar.paints.ink[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="gouashe" />
          {filterBar.paints.gouashe[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="graphite" />
          {filterBar.paints.graphite[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="coal" />
          {filterBar.paints.coal[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="enamel" />
          {filterBar.paints.enamel[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="paints" value="airbrush" />
          {filterBar.paints.airbrush[key]}
        </label>
      </form>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.material.title[key]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="canvas" />
          {filterBar.material.canvas[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="paper" />
          {filterBar.material.paper[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="linenCanvas" />
          {filterBar.material.canvas.linen[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="cotonCanvas" />
          {filterBar.material.canvas.coton[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="silkCanvas" />
          {filterBar.material.canvas.silk[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="paintingCanvas" />
          {filterBar.material.canvas.painting[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="stadyCanvas" />
          {filterBar.material.canvas.stady[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="akvarelPaper" />
          {filterBar.material.paper.akvarel[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="material" value="ricePaper" />
          {filterBar.material.paper.rice[key]}
        </label>
      </form>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.orientation.title[key]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="orientation" value="suare" />
          {filterBar.orientation.square[key]}{" "}
          <span className={`${styles.orientation_img} ${styles.square}`}></span>
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="orientation" value="vertical" />
          {filterBar.orientation.vertical[key]}
          <span className={`${styles.orientation_img} ${styles.vertical}`}></span>
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="orientation" value="horisontal" />
          {filterBar.orientation.horisontal[key]}{" "}
          <span className={`${styles.orientation_img} ${styles.horisontal}`}></span>
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="orientation" value="panoram" />
          {filterBar.orientation.panoram[key]}{" "}
          <span className={`${styles.orientation_img} ${styles.panoram}`}></span>
        </label>
      </form>
      <form className={styles.form}>
        <h3 className={styles.subtitle}>{filterBar.size.title[key]}</h3>
        <label className={styles.checkbox}>
          <input type="checkbox" name="size" value="small" />
          {filterBar.size.small[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="size" value="medium" />
          {filterBar.size.medium[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="size" value="large" />
          {filterBar.size.large[key]}
        </label>
        <label className={styles.checkbox}>
          <input type="checkbox" name="size" value="oversize" />
          {filterBar.size.extraLarge[key]}
        </label>
      </form>
      <span className={styles.more} onClick={onClick}>{filterBar.less[key]}</span>
    </div>
  );
};