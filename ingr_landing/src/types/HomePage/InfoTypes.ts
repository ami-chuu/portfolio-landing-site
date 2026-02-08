import type { SectionTitleType } from "../Common/SectionTypes";

interface CompanyInformation {
    logo_src: string;
    section_title: SectionTitleType;
    text: string;
    title: string;
    list: string[];
}

export type {CompanyInformation};