import Header from "./components/Common/Header/Header";
import DataContext from "./context/DataContext";
import PageDataJson from "./data/polar.json";
import type { PageData } from "./types/PageData";
import styles from "./Polar.module.css";
import Banner from "./components/Common/Banner/Banner";
import PolarInformation from "./components/ProductPages/PolarPage/Info/PolarInformation";
import SectionSplitter from "./components/Common/Section/SectionSplitter";
import PolarAboutContainer from "./components/ProductPages/PolarPage/About/PolarAbout"
import PolarSupport from "./components/ProductPages/PolarPage/Support/PolarSupport";
import PolarDescription from "./components/ProductPages/PolarPage/Description/PolarDescription";
import PolarModulesContainer from "./components/ProductPages/PolarPage/Modules/PolarModulesContainer";
import PolarComponentTable from "./components/ProductPages/PolarPage/Composition/PolarComponentsTable";
import Contacts from "./components/Common/Contacts/Contacts";
import Footer from "./components/Common/Footer/Footer";

function Polar() {
    return(
        <>
            <title>Поляр</title>
            <link rel="icon" type="image/svg+xml" href="/ingr_logo.svg" />
            <meta name="description" content="Поляр - образовательный набор для соревнований и обучения робототехнике, модульный набор для сборки универсальной робототехнической платформы, предназначенной для изучения механики, математики и алгоритмов"/>
            <DataContext.Provider value={PageDataJson as PageData}>
                <div className={styles.m}>
                        <title>Поляр</title>
                        <meta></meta>
                    <Header/>
                    <Banner>
                        <PolarInformation/>
                    </Banner>
                    <section id="about">
                        <SectionSplitter/>
                        <PolarAboutContainer/>
                    </section>
                    <section id="support">
                        <SectionSplitter/>
                        <PolarSupport/>
                    </section>
                    <section id="description">
                        <SectionSplitter/>
                        <PolarDescription/>
                    </section>
                    <section id="modules">
                        <SectionSplitter/>
                        <PolarModulesContainer/>
                    </section>
                    <section id="components">
                        <SectionSplitter/>
                        <PolarComponentTable/>
                    </section>
                    <section id="contacts">
                        <SectionSplitter/>
                        <Contacts/>
                    </section>
                    <Footer/>
                </div>
            </DataContext.Provider>
            
        </>
    )
}

export default Polar;