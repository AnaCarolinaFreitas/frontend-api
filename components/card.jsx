import styles from "../styles/card.module.css"

export default function Card(){
    return(
        <div className={styles.cards}>
        <div className={styles.topic}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        <div className={styles.topic}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.topic}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
    );
}