import styles from "./person.module.css";
import type { Person } from "../../../types/HomePage/PersonTypes";

function PersonCard({avatar_src, alt_text, name, role}: Person) {
    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={avatar_src} width={300} height={300} alt={alt_text}/>
            <div className={styles.text_container}>
                <h1 className={styles.name}>{name}</h1>
                <p>{role}</p>
            </div>
        </div>
    );
}

export default PersonCard;