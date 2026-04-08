import type { SectionTitleType } from "../../Common/SectionTypes";

interface PolarModuleType {
    title: string;
    description: string;
    is_basic?: boolean;
}

interface PolarModuleContainerType {
    section_title: SectionTitleType;
    modules: PolarModuleType[];
}

export type { PolarModuleType };
export type { PolarModuleContainerType };