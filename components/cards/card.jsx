import Image from "next/image";
import styles from "../../styles/components/card.module.scss";
import { itemCard } from "../../library/library";
import {
  addLike,
  removeLike,
  addToBucket,
} from "../../store/redusers/cardSlice";
import { toglleLike } from "../../store/redusers/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";

const Card = ({ el }) => {
  const dispatch = useDispatch();
  const { curImg, lang, courentCource } = useSelector((state) => state.global);
  const [card, setCatd] = useState(el)
  const addLikekHandler = (e) => {
    const target = e.target;
    if (target.classList[1] === styles.active) {
      dispatch(toglleLike(el.id));
      dispatch(removeLike(el.id));
      target.classList.remove(styles.active);
      // console.log('remove', el);
    } else {
      dispatch(toglleLike(el.id));
      dispatch(addLike(el));
      target.classList.add(styles.active);
      // console.log("add", el);
    }
  };
  const addtoBucketHandler = () => {
    dispatch(addToBucket(el));
  };
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <Image
          src={card.img}
          width={250}
          height={343}
          alt="image"
          className={styles.card_image}
        />
        <p className={styles.card_text}>{card.text}</p>
        <div className={styles.bottom}>
          <div className={styles.price_wrapper}>
            {curImg && (
              <Image
                src={curImg}
                width={30}
                height={30}
                alt={"currency"}
                priority={true}
              />
            )}
            <span className={styles.price}>{+card.price * courentCource}</span>
          </div>
          <div className={styles.btns_wrapper}>
            <button
              className={`${styles.likeBtn} ${card.like ? styles.active : ""}`}
              onClick={addLikekHandler}
            ></button>
            <button className={styles.buyBtn} onClick={addtoBucketHandler}>
              {itemCard.btn[lang]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
