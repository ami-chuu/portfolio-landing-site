import type { LogoType } from "../Common/LogoType";
import type { SectionTitleType } from "../Common/SectionTypes";

interface CompanyInformation {
    logo: LogoType;
    section_title: SectionTitleType;
    text: string;
    title: string;
    list: string[];
}

export type {CompanyInformation};