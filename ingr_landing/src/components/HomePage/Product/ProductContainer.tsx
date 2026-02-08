import { useContext } from "react";
import styles from "./product.module.css";
import DataContext from "../../../context/DataContext";
import type { ProductSectionType } from "../../../types/HomePage/ProductTypes";
import SectionTitle from "../../Common/Section/SectionTitle";
import ProductCard from "./ProductCard";

function ProductContainer() {
    const context: ProductSectionType | undefined = useContext(DataContext).product_section;
    
    return (
        <div className={styles.container}>
            <SectionTitle title={context?.section_title.title || ""}/>
            {
                context?.products.map(
                    (product) => (
                        <ProductCard {...product}/>
                    )
                )
            }
        </div>
    );
}

export default ProductContainer;