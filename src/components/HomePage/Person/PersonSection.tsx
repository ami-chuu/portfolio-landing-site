import styles from "./person.module.css"
import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import PersonCard from "./PersonCard";
import SectionTitle from "../../Common/Section/SectionTitle";
import type { Person, PersonSectionType } from "../../../types/HomePage/PersonTypes";

function PersonContainer() {
    const context: PersonSectionType | undefined = useContext(DataContext).person_section;

    return (
        <div className={styles.person_container}>
            <SectionTitle title={context?.section_title.title || ""}/>
            <div className={styles.container}>
                { 
                    context?.people.map(
                        (person: Person) => (
                            <PersonCard {...person}/>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default PersonContainer;