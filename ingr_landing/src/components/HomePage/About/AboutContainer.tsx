import { useContext } from "react";
import HomeDataContext from "../../../context/DataContext";
import styles from "./about.module.css";
import AboutCard from "./AboutCard";

function AboutContainer() {
    const context = useContext(HomeDataContext);

    return (
        <div className={styles.container}>
            {
                context?.about?.cards.map(
                    (card) => (
                        <AboutCard image_src={card.image_src} title={card.title} description={card.description}/>
                    )
                )
            }
        </div>
    );
}

export default AboutContainer;