import type { ReactNode } from "react";

interface ColorTextProps {
    children?: ReactNode;
    className?: string;
}

function ColorText({children, className}: ColorTextProps) {
    const fragments: string[] | undefined = children?.toString().split('@');
    return (
        <p className={className}>
            {
                fragments?.map(
                    (line) => {
                        switch(line.at(0)) {
                            case '1':
                                return <span style={{color: "var(--brand-color)"}}>{line.slice(1)}</span>
                            case '2':
                                return <span style={{color: "var(--accent-color)"}}>{line.slice(1)}</span>
                            default:
                                return <>{line.slice(1)}</>;
                        }
                    }
                )
            }
        </p>
    )
}


export default ColorText;