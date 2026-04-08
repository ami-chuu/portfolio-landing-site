import type { SectionTitleType } from "../Common/SectionTypes";

interface Specialization {
    image_src?: string;
    title: string;
    description: string[];
}

interface SpecializationType {
    section_title: SectionTitleType;
    specs: Specialization[]; 
}

export type { Specialization };
export type { SpecializationType };