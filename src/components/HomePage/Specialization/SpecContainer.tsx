import { useContext } from "react";
import styles from "./spec.module.css";
import DataContext from "../../../context/DataContext";
import SpecializationCard from "./SpecCard";
import SectionTitle from "../../Common/Section/SectionTitle";
import SectionSplitter from "../../Common/Section/SectionSplitter";
import type { Specialization, SpecializationType } from "../../../types/HomePage/SpecTypes";
import ContactsReference from "../../Common/Contacts/ContactsReference";


function SpecializationContainer() {
    const context: SpecializationType | undefined = useContext(DataContext).specialization_section;
    
    return (
        <>
            <div className={styles.container}>
                <SectionTitle title={context?.section_title.title || ""} phrase={context?.section_title.phrase || ""}/>
                <img src="scheme.svg" className={styles.scheme}/>
                {
                    context?.specs.map(
                        (spec: Specialization, index) => (
                            <SpecializationCard key={index} image_src={spec.image_src} title={spec.title} description={spec.description}/>
                        )
                    )
                }
                <ContactsReference text="Готовы обсудить ваш проект?" button_text="Получите бесплатную консультацию"/>
            </div>
            <SectionSplitter/>
        </>
    );
}

export default SpecializationContainer;