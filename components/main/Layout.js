import styles from "../../styles/layout.module.scss";

const Container = ({children}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default Container;