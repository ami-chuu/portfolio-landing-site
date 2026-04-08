import styles from './header.module.css';
//import logo from "../../assets/placeholderlogo.png";
import HeaderLink from './HeaderLink';
import DataContext from '../../../context/DataContext';
import { useContext } from 'react';
import MobileHeaderMenuButton from './MobileHeaderMenu';
import { Link } from 'react-router-dom';

function Header() {
    const context = useContext(DataContext).header;

    return (
        <header> 
            <div className={styles.header}>
                <div className={styles.logo_container}>
                    <Link to="/" onClick={() => {window.scrollTo(0, 0)}}>
                        <img src={context?.logo} className={styles.logo} alt="Логотип компании Ингриятех"/>
                    </Link>
                    <b>ИНГРИЯТЕХ</b>
                </div>
                <nav>
                    <ul className={styles.link_container}>
                        {
                            context?.links.map(
                                (link, index) => (
                                    <HeaderLink text={link.text} ref={`#${link.ref}`}  key={index}/>
                                )
                            )
                        }
                    </ul>
                    
                </nav>
                <MobileHeaderMenuButton/>
            </div>
        </header>
    )
     
}

export default Header; 