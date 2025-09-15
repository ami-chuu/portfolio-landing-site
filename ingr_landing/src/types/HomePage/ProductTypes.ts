import type { SectionTitleType } from "../Common/SectionTypes";
import type { Logo } from "../Common/LogoType";


interface Product {
    name: string;
    image_src: string;
    description: string;
    ref: string;
    logos?: Logo[];
    about_button_text: string;
}

interface ProductSectionType {
    section_title: SectionTitleType;
    products: Product[];
}

export type { Product };
export type { ProductSectionType };