import { Link } from "react-router-dom";
import type { Product } from "../../../types/HomePage/ProductTypes";
import styles from "./product.module.css";
import Logo from "../../Common/Logo/Logo";

function ProductCard({name, image_src, description, ref, logos, about_button_text}: Product) {
    return (
        <div className={styles.card}>
            <div className={styles.product_info}>
                <div className={styles.text_container}>
                    <h1 className={styles.name}>{name}</h1>
                    <b className={styles.description}>{description}</b>
                    <Link to={ref} onClick={() => {window.scrollTo(0, 0)}}><button className={styles.button}>{about_button_text}</button></Link>
                </div>
                <img src={image_src} className={styles.image}/>
            </div>
            { 
                logos ? (
                    <div className={styles.logo_container}>
                        {
                            logos.map(
                                (logo) => (<a href={logo.ref}><Logo {...logo}/></a>)
                            )
                        }
                    </div>
                ) : null
            }
        </div>
    );
}

export default ProductCard;