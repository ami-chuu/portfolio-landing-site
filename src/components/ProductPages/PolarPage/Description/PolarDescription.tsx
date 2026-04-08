import { useContext } from "react";
import type { PolarDescriptionType } from "../../../../types/ProductPages/PolarPage/DescriptionTypes";
import DataContext from "../../../../context/DataContext";
import styles from "./description.module.css";
import ColorText from "../../../Common/ColorText";
import SectionTitle from "../../../Common/Section/SectionTitle";

function PolarDescription() {
    const context: PolarDescriptionType | undefined = useContext(DataContext)?.polar_description;

    return (
        <div className={styles.description_container}>
            <SectionTitle {...context?.section_title}/>
            <div className={styles.container}>
                <img className={styles.image} src={context?.image_src} alt={context?.image_alt}/>
                <ul className={styles.list}>
                    {
                        context?.text.map(
                            (line, index) => (
                                <li key={index}>
                                    <ColorText className={styles.text}>{line}</ColorText>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default PolarDescription;
