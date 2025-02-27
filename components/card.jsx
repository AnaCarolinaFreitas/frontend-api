import styles from "../styles/card.module.css"

export default function Card({topic, text}){
    return(
        
        <div className={styles.topic}>
            <p className={styles.text}>{text}</p>
            </div>
        
    );
}