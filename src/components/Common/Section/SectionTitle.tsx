import styles from "./section.module.css"
import type { SectionTitleType } from "../../../types/Common/SectionTypes";
/*
function SectionTitle({children}: SectionTitleProps) {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{children}</h1>
        </div>
    )
}
*/

function SectionTitle({title, phrase}: SectionTitleType) {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <h1 className={styles.phrase}>{phrase}</h1>
            </div>
        </>
    )
}

export default SectionTitle;