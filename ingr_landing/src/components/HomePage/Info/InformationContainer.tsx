import { useContext, type ReactNode } from "react";
import type { CompanyInformation } from "../../../types/HomePage/InfoTypes";
import SectionTitle from "../../Common/Section/SectionTitle";
import styles from "./information.module.css";
import DataContext from "../../../context/DataContext";
import ContactsReference from "../../Common/Contacts/ContactsReference";

interface ListElementProps {
    children: ReactNode;
}

function ListElement({children}: ListElementProps) {
    return (
        <li>
            <div className={styles.list_element}>
                <h1 className={styles.text}>{children}</h1>
            </div>
        </li>
    )
}

//{title, phrase, text, list, post_list_text}: CompanyInformation
function InformationContainer() {
    const context: CompanyInformation | undefined = useContext(DataContext).information;

    return (
        <>
            <div className={styles.container}>
                <SectionTitle title={context?.section_title.title || ""} phrase={context?.section_title.phrase || ""}/>
                <b className={styles.text}>{context?.text}</b>
                <h1 className={styles.title}>{context?.title}</h1>
                <ul>
                    {
                        context?.list.map(
                            (el) => (<ListElement>{el}</ListElement>)
                        )
                    }
                </ul>
                <ContactsReference text="Хотите работать с лучшими инженерами?" button_text="Свяжитесь с нами"/>
                <div className={styles.logo_container}>
                    <img src={context?.logo_src} className={styles.logo}/>
                </div>
            </div>
        </>
    )
}

export default InformationContainer;