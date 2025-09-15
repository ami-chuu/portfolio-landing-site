interface AboutCardType {
    image_src?: string;
    alt_text?: string
    title: string;
    description: string;
}

interface AboutType {
    cards: AboutCardType[];
}

export type { AboutCardType };
export type { AboutType }