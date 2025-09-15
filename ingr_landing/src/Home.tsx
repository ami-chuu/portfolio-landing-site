import './App.css'
import Header from './components/Common/Header/Header.tsx'
import Banner from './components/Common/Banner/Banner.tsx';
import PersonContainer from './components/HomePage/Person/PersonSection.tsx';
import SpecializationContainer from './components/HomePage/Specialization/SpecContainer.tsx';
import InformationContainer from './components/HomePage/Info/InformationContainer.tsx';
import SectionSplitter from './components/Common/Section/SectionSplitter.tsx';
import ProductContainer from './components/HomePage/Product/ProductContainer.tsx';
import Contacts from './components/Common/Contacts/Contacts.tsx';
import Footer from './components/Common/Footer/Footer.tsx';

function Home() {
  return (
    <>
      <title>ИНГРИЯТЕХ - главная страница</title>
      <meta name="description" content="ИНГРИЯТЕХ - Мы превращаем сложные задачи в продуманные и эффективные решения
Наша миссия — помогать бизнесу создавать технологичные продукты, которые опережают рынок. Мы специализируемся на полном цикле инженерно-конструкторских работ: от глубокого анализа и проектирования до внедрения в производство. Наши решения работают, обеспечивая клиентам реальное конкурентное преимущество."></meta>
      <div>
        <Header/>
        <main>
          <section id="about">
            <Banner>
              <InformationContainer/>
            </Banner>
            <SectionSplitter/>
            <PersonContainer/>
          </section>
          <section id="specialization">
            <SectionSplitter/>
            <SpecializationContainer/>
          </section>
          <section id="products">
            <ProductContainer/>
            <SectionSplitter/>
          </section>
          <section id="contacts">
            <Contacts/>
          </section>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Home;
