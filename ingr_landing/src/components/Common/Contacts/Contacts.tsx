import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import type { ContactsType } from "../../../types/HomePage/ContactTypes";
import styles from "./contacts.module.css";
import SectionTitle from "../Section/SectionTitle";

function Contacts() {
    const context: ContactsType | undefined = useContext(DataContext).contacts;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.text_container}>
                    { context ? <SectionTitle {...context?.section_title}/> : null }
                    <h1 className={styles.normal_text}>
                        Номер телефона: <span className={styles.text}>{context?.phone_number}</span> </h1>
                    <h1 className={styles.normal_text}>
                       E-mail: <span className={styles.text}>{context?.email}</span>
                    </h1>
                    <h1 className={styles.normal_text}>
                        Адрес: <span className={styles.text}>{context?.address}</span>
                    </h1>
                    <a href={`mailto:${context?.email}`}>
                        <button className={styles.button}>Связаться с нами</button>
                    </a>
                </div>
                <iframe src={context?.map_ref} width="692" height="499"/>
            </div>
        </div>
    )
}

export default Contacts;