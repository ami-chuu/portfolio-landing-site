import type { LogoType } from "../../../types/Common/LogoType";
import styles from "./logo.module.css"

function Logo({image_src, ref, image_alt, text, is_vertical}: LogoType) {
    return (
        <div className={is_vertical ? styles.container_vertical : styles.container_horizontal}>
            <a href={ref} style={{margin:0}}><img src={image_src} alt={image_alt} className={styles.logo}/></a>
            {
                text ? (<b className={styles.text}>{text}</b>) : null
            }
        </div>
    )
}

export default Logo;