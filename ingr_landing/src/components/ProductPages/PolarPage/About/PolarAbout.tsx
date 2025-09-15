import { useContext } from "react";
import type { PolarAbout } from "../../../../types/ProductPages/PolarPage/AboutTypes";
import SectionTitle from "../../../Common/Section/SectionTitle";
import styles from "./polar_about.module.css";
import DataContext from "../../../../context/DataContext";
import ColorText from "../../../Common/ColorText";
import PolarAboutCard from "./PolarAboutCard";

function PolarAboutContainer() {
    const context: PolarAbout | undefined = useContext(DataContext).polar_about;
    
    return (
        <div className={styles.about_container}>
            <SectionTitle {...context?.section_title}/>
            <div className={styles.container}>
                <ColorText className={styles.description}>{context?.description}</ColorText>
                <div className={styles.content_container}>
                    <div className={styles.card_container}>
                        {
                            context?.cards.map(
                                (card, index) => (
                                    <PolarAboutCard key={index} {...card}/>
                                )
                            )
                        }
                    </div>
                    <img src={context?.image_src} alt={context?.image_alt} className={styles.image}/>
                </div>
            </div>
        </div>
    )
}

export default PolarAboutContainer;