import type { LogoType } from "../../Common/LogoType";

interface PolarInformationType {
    title: string;
    description: string;
    image_src: string;
    image_alt: string;
    product_text: string;
    main_logo: LogoType;
    logos: LogoType[];
}

export type { PolarInformationType };