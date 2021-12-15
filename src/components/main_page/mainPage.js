import React from 'react';
import {Helmet} from "react-helmet";
import Header from '../header/header';
import Title from '../title/title';
import Content from '../content/content';
import Footer from '../footer/footer';


const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Профессиональная юридическая помощь</title>
        <meta name="description" content="Профессиональная юридическая помощь в Кемерово.Разберемся в тонкостях сложившейся ситуации. Решаем проблемы любой сложности!" />
      </Helmet>
      <Header/>
      <Title/>
      <Content/>
      <Footer/>
    </>
  );
}

export default MainPage;