import { useContext, useState } from "react";
import styles from "./header.module.css";
import DataContext from "../../../context/DataContext";
import HeaderLink from "./HeaderLink";

interface MobileHeaderMenu {
    onClick: () => void;
}

function MobileHeaderMenuButton() {
    const [isMenuOpened, setMenuOpened] = useState(false);
    
    const toggle_opened = () => {
        setMenuOpened(!isMenuOpened)
    };

    return (
        <>
            <img aria-label="Кнопка для открытия меню навигации в мобильной версии" src={"mobile_menu_button.png"} className={styles.mobile_menu_button} onClick={toggle_opened}/>    
            {isMenuOpened ? <MobileHeaderMenu onClick={toggle_opened}/> : null}
        </>
    )
}

function MobileHeaderMenu({onClick}: MobileHeaderMenu) {
    const links = useContext(DataContext).header.links;

    return (
        <div className={styles.mobile_header_menu}>
            {
                links.map(
                    (link, index) => (
                        <HeaderLink text={link.text} ref={`#${link.ref}`} key={index} onClick={onClick}/>
                    )
                )
            }    
        </div>
    )
}

export default MobileHeaderMenuButton;