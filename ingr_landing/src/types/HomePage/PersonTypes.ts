import type { SectionTitleType } from "../Common/SectionTypes";

interface Person {
    avatar_src: string;
    alt_text?: string;
    name: string;
    role: string
}


interface PersonSectionType {
    section_title: SectionTitleType;
    people: Person[];
}

export type { Person };
export type { PersonSectionType };