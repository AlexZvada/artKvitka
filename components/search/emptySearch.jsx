import styles from '../../styles/pages/pages.module.scss'
const EmptySearch = ({title, text}) => {
  return (
    <div className={styles.noresult}>
      <h1 className={styles.noresult_title}>{title}</h1>
       {text ? <p className={styles.noresult_text}>{text}</p> : null}
    </div>
  );
};

export default EmptySearch;
