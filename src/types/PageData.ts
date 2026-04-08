import { type HeaderType } from "./Common/HeaderTypes";
import type { AboutType } from "./HomePage/AboutTypes";
import type { BannerType } from "./HomePage/BannerTypes";
import type { PersonSectionType } from "./HomePage/PersonTypes";
import type { SpecializationType } from "./HomePage/SpecTypes";
import type { CompanyInformation } from "./HomePage/InfoTypes";
import type { ProductSectionType } from "./HomePage/ProductTypes";
import type { ContactsType } from "./HomePage/ContactTypes";
import type { FooterType } from "./Common/FooterTypes";
import type { PolarInformationType } from "./ProductPages/PolarPage/InfoTypes";
import type { PolarAbout } from "./ProductPages/PolarPage/AboutTypes";
import type { ProjectSupportType as PolarProjectSupportType } from "./ProductPages/PolarPage/ProjectSupportTypes";
import type { PolarDescriptionType } from "./ProductPages/PolarPage/DescriptionTypes";
import type { PolarModuleContainerType } from "./ProductPages/PolarPage/ModuleTypes";
import type { PolarComponentTableType } from "./ProductPages/PolarPage/PolarComponentsTypes";

interface PageData {
    // Для всех страниц
    header: HeaderType;
    footer: FooterType;

    // Для домашней страницы
    banner?: BannerType;
    information?: CompanyInformation;
    about?: AboutType;
    person_section?: PersonSectionType;
    specialization_section?: SpecializationType;
    product_section?: ProductSectionType;
    contacts?: ContactsType;

    // Для Поляра
    polar_information?: PolarInformationType;
    polar_about?: PolarAbout;
    polar_support?: PolarProjectSupportType;
    polar_description?: PolarDescriptionType;
    polar_modules?: PolarModuleContainerType;
    polar_components?: PolarComponentTableType;
}

export type { PageData };