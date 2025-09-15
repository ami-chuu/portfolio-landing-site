import { useContext } from "react";
import DataContext from "../../../../context/DataContext";
import styles from "./polar_support.module.css"
import SectionTitle from "../../../Common/Section/SectionTitle";
import type { ProjectSupportType } from "../../../../types/ProductPages/PolarPage/ProjectSupportTypes";

function PolarSupport() {
    const context: ProjectSupportType | undefined = useContext(DataContext).polar_support;

    return (
        <div className={styles.support_container}>
            <SectionTitle {...context?.section_title}/>
        
            <div className={styles.content_container}>
                <p className={styles.text}>{context?.text.replaceAll("#", "\"")}</p>
                <a href={context?.logo.ref}>
                    <img className={styles.logo} src={context?.logo.image_src} alt={context?.logo.image_src}/>
                </a>
            </div>
        </div>
    )
}

export default PolarSupport