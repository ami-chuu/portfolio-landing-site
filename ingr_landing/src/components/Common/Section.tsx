import { useEffect, type ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface SectionProps {
    id: string;
    children?: ReactNode;
    setActiveSection: (id: string) => void;
}

function Section({id, children, setActiveSection}: SectionProps) {
    const { ref, inView } = useInView(
        {
            threshold: 0.5
        }
    );

    useEffect(() => {
        if (inView) {
            setActiveSection(id);
        }
    }, [inView, id, setActiveSection]);

    return (
        <section id={id}>
            {children}
        </section>
    )
}

export default Section;