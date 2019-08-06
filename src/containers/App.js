import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import HeroHome from '../components/Hero';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Portfolios from '../components/Portfolio';
import Subscription from '../components/Subscription';
import Footer from '../components/Footer';



function App() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <HeroHome />
        <Services />
        <Skills />
        <Portfolios />
        <Subscription />
      </Main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
