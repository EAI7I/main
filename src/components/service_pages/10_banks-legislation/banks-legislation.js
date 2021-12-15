import React from 'react';
import {Helmet} from "react-helmet";
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';
import './banks-legislation.css';


const BanksLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Helmet>
                <title>Законодательство о банках и банковской деятельности</title>
                <meta name="description" content="Законодательство о банках и банковской деятельности." />
            </Helmet>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Законодательство о банках и банковской деятельности</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-10'>
                            <div className='service__page-content-title'>
                                <h3>Законодательство о банках и банковской деятельности</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>признания недействительной сделки (кредитного договора, договора залога,купли-продажи закладной и др.);</li>
                                    <li>взыскания неосновательного обогащения, процентов за пользование чужими денежными средствами и др.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/nbkndn6/10-banks-legislation.webp' alt='картинка зала суда'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-09'>
                    <div className='service__page-content-title'>
                        <h3>Законодательство о банках и банковской деятельности</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>признания недействительной сделки (кредитного договора, договора залога,купли-продажи закладной и др.);</li>
                            <li>взыскания неосновательного обогащения, процентов за пользование чужими денежными средствами и др.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default BanksLegislation;
