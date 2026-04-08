import { useContext } from "react";
import DataContext from "../../../../context/DataContext";
import styles from "./polar_information.module.css";
import type { PolarInformationType } from "../../../../types/ProductPages/PolarPage/InfoTypes";
import ColorText from "../../../Common/ColorText";
import Logo from "../../../Common/Logo/Logo";

function PolarInformation() {
    const context: PolarInformationType | undefined = useContext(DataContext)?.polar_information;
    console.log(context?.logos);
    console.log(context?.logos.slice(1));

    return (
        <div className={styles.container}>
            <div className={styles.content_container}>
                <div className={styles.text_container}>
                    <h1 className={styles.title}>{context?.title}</h1>
                    <b><ColorText className={styles.text}>{context?.description}</ColorText></b>
                </div>
                <img className={styles.image} src={context?.image_src} alt={context?.image_alt}/>

            </div>
            <div className={styles.logo_container}>
                <div className={styles.main_logo_container}>
                    <p className={styles.text}>{context?.product_text}</p>
                    <div className={styles.splitter}/>
                    <Logo {...context?.main_logo}/>
                </div>
                    {
                        context?.logos.map(
                            (logo, index) => (<Logo key={index} {...logo}/>)
                        )
                    }
                
            </div>
        </div>
    );
}

export default PolarInformation;