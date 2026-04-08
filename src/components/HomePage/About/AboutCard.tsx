import styles from "./about.module.css";
import type { AboutCardType } from "../../../types/HomePage/AboutTypes";

function AboutCard({ image_src, alt_text, title, description: text }: AboutCardType) {
    return (
        <div className={styles.card}>
            { typeof image_src !== 'undefined' && <img src={image_src} alt={alt_text} className={styles.image}/>}
            <div className={styles.text_container}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.normal_text}>{text}</p>
            </div>
        </div>
    );
}

export default AboutCard;