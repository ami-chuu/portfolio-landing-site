import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import styles from "./footer.module.css";
import type { FooterType } from "../../../types/Common/FooterTypes";

function Footer() {
    const context: FooterType | undefined = useContext(DataContext)?.footer;

    return (
        <footer className={styles.footer}>
            <div className={styles.text_container}>
                {
                    context.text.map(
                        (line) => (
                            <p className={styles.text}>{line.replaceAll('#', "\"")}</p>
                        )
                    )
                }
                <p className={styles.copyright}>{context.copyright}</p>
            </div>
        </footer>
    )
}

export default Footer;