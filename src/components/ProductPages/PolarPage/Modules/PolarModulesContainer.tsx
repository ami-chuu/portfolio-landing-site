import { useContext } from "react";
import styles from "./polar_modules.module.css";
import DataContext from "../../../../context/DataContext";
import SectionTitle from "../../../Common/Section/SectionTitle";
import type { PolarModuleContainerType } from "../../../../types/ProductPages/PolarPage/ModuleTypes";
import PolarModule from "./PolarModule";

function PolarModulesContainer() {
    const context: PolarModuleContainerType | undefined = useContext(DataContext).polar_modules;

    return (
        <div className={styles.modules_container}>
            <SectionTitle {...context?.section_title}/>
            <div className={styles.container}>
                {
                    context?.modules.map(
                        (_module, index) => (
                            <PolarModule key={index} {..._module}/>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default PolarModulesContainer