import type { SectionTitleType } from "../Common/SectionTypes";

interface ContactsRef {
    text: string;
    button_text: string;
}

interface ContactsType {
    section_title?: SectionTitleType;
    phone_number: string;
    email: string;
    address: string;
    map_ref: string;
}

export type {ContactsType, ContactsRef};