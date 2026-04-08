import type { SectionTitleType } from "../../Common/SectionTypes";

interface PolarAboutCardType {
    image_src?: string;
    image_alt?: string;
    text: string;
}

interface PolarAbout {
    section_title: SectionTitleType;
    description: string;
    image_src: string;
    image_alt: string;
    cards: PolarAboutCardType[];
}

export type { PolarAboutCardType };
export type { PolarAbout };