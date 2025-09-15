import styles from "./contacts.module.css";
import type { ContactsRef } from "../../../types/HomePage/ContactTypes";

function ContactsReference({text, button_text}: ContactsRef) {
    return (
        <div className={styles.ref_container}>
            <h1 className={styles.text}>{text}</h1>
            <a href="#contacts"><button className={styles.button}>{button_text}</button></a>
        </div>
    )
}

export default ContactsReference;