interface HeaderLinkType {
    text: string;
    ref: string;
    onClick?: () => void;
}

interface HeaderType {
    logo: string,
    links: HeaderLinkType[]
} 

export type { HeaderLinkType };
export type { HeaderType };