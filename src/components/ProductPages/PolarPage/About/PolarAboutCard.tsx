import styles from "./polar_about.module.css";
import type { PolarAboutCardType } from "../../../../types/ProductPages/PolarPage/AboutTypes";
import ColorText from "../../../Common/ColorText";

function PolarAboutCard({image_src, image_alt, text}: PolarAboutCardType) {
    return (
        <div className={styles.card}>
            {image_src ? <img src={image_src} alt={image_alt} width={"100px"}/> : null}
            <ColorText className={styles.card_text}>{text}</ColorText>
        </div>
    );
}

export default PolarAboutCard;