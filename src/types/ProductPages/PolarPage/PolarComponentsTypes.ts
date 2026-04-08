import type { SectionTitleType } from "../../Common/SectionTypes";

interface PolarComponentType {
    index?: number;
    amount: number;
    name: string;
    description: string;
}

interface PolarComponentTableType {
    section_title: SectionTitleType;
    components: PolarComponentType[];
}

export type { PolarComponentType };
export type { PolarComponentTableType };