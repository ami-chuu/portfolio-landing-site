import styles from "./spec.module.css";
import { type Specialization } from "../../../types/HomePage/SpecTypes";

function SpecializationCard({image_src, title, description}: Specialization) {
    return (
        <div className={styles.card}>
            {image_src !== undefined ? <img src={image_src} className={styles.image}/> : null}
            <div className={styles.text_container}>
                <h1 className={styles.title}>{title}</h1>
                {
                    description.map(
                        (line) => (
                            <p className={styles.normal_text}>{line}</p>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default SpecializationCard;