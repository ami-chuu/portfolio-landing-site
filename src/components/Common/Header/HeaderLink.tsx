import styles from './header.module.css';
import type { HeaderLinkType } from '../../../types/Common/HeaderTypes';

function HeaderLink({ text, ref, onClick}: HeaderLinkType) {
    return (
        <li className={styles.header_li}>
            <a href={ ref } className={styles.header_link} onClick={onClick}>
                { text }
            </a>
        </li>
    )
}

export default HeaderLink;