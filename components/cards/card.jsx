import Image from 'next/image';
import styles from '../../styles/components/card.module.scss';
// import { useSelector } from 'react-redux/es/hooks/useSelector';

const Card = (props)=>{
    const { curencyImg, el, text } = props;
    // const {} = useSelector(store=>store)
    const onClickHandler = (e) => {
      const target = e.target;
      if (target.classList[1] === styles.active) {
        target.classList.remove(styles.active);
      } else {
        target.classList.add(styles.active);
      }
    };
    return (
      <div className={styles.card_wrapper}>
        <div className={styles.card}>
          <Image
            src={el.img}
            width={250}
            height={343}
            alt="image"
            className={styles.card_image}
          />
          <p className={styles.card_text}>{el.text}</p>
          <div className={styles.bottom}>
            <div className={styles.price_wrapper}>
              {curencyImg && (
                <Image
                  src={curencyImg}
                  width={30}
                  height={30}
                  alt={'currency'}
                  priority={true}
                />
              )}
              <span className={styles.price}>{el.price}</span>
            </div>
            <div className={styles.btns_wrapper}>
              <button
                className={styles.likeBtn}
                onClick={onClickHandler}
              ></button>
              <button className={styles.buyBtn}>{text}</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;