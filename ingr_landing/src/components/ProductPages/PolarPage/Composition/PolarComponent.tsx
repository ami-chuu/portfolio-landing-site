import type { PolarComponentType } from "../../../../types/ProductPages/PolarPage/PolarComponentsTypes";
import styles from "./polar_components.module.css";

function PolarComponent({index, amount, name, description}: PolarComponentType) {
    return (
        <tr className={index ? (index % 2 != 0 ? styles.tr_gray : "") : ""}>
            <td>{index}</td>
            <td style={{textAlign: "center"}}>{amount}</td>
            <td>{name}</td>
            <td>{description}</td>
        </tr>
    )
}

export default PolarComponent;