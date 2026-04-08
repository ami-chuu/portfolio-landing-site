import { useContext } from "react"
import styles from "./polar_components.module.css"
import DataContext from "../../../../context/DataContext"
import type { PolarComponentTableType } from "../../../../types/ProductPages/PolarPage/PolarComponentsTypes";
import SectionTitle from "../../../Common/Section/SectionTitle";
import PolarComponent from "./PolarComponent";

function PolarComponentTable() {
    const context: PolarComponentTableType | undefined = useContext(DataContext)?.polar_components;

    return (
        <div className={styles.container}>
            <SectionTitle {...context?.section_title}/>
            <table>
                <thead>
                    <th scope="col">№</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Компонент</th>
                    <th scope="col">Описание</th>
                </thead>
                <tbody>
                    {
                        context?.components.map(
                            (component, index) => (
                                <PolarComponent key={index} index={index+1} {...component}/> 
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PolarComponentTable;