import type { PolarModuleType } from "../../../../types/ProductPages/PolarPage/ModuleTypes";
import styles from "./polar_modules.module.css"

function PolarModule({title, description, is_basic}: PolarModuleType) {
    return (
        <div className={styles.module}>
            <div className={styles.title_container}>
                <h2 className={styles.title_text}>{title}</h2>
                <p className={is_basic ? styles.basic_title : styles.advanced_title}>
                    {is_basic ? "basic" : "advanced"}
                </p>
            </div>
            <p className={styles.text}>{description}</p>
        </div>
    );
}

export default PolarModule;