import styles from "./banner.module.css";
import type { BannerType } from "../../../types/HomePage/BannerTypes";
import { useContext, type ReactNode } from "react";
import DataContext from "../../../context/DataContext";

interface BannerProps {
    children?: ReactNode;
}

function Banner({children}: BannerProps) {
    const context: BannerType | undefined = useContext(DataContext).banner;
    
    return (
        <>
            <div className={styles.banner} style={{backgroundImage: `url(${context?.image_src})`}}>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Banner;