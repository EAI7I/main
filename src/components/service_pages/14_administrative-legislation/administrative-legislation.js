import React from 'react';
import {Helmet} from "react-helmet";
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';
import '../09_bailiffs-legislation/bailiffs-legislation.css';


const AdministrativeLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Helmet>
                <title>Административное законодательство</title>
                <meta name="description" content="Профессиональная юридическая помощь в Кемерово по административному законодательству." />
            </Helmet>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Административное законодательство</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-03'>
                            <div className='service__page-content-title'>
                                <h3>Административное законодательство</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>возбуждения административных производств;</li>
                                    <li>обжалования постановлений о привлечении к административной ответственности и др.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/brTrYkS/14-administrative-legislation.webp' alt='картинка зала заседаний'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-10'>
                    <div className='service__page-content-title'>
                        <h3>Административное законодательство</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>возбуждения административных производств;</li>
                            <li>обжалования постановлений о привлечении к административной ответственности и др.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AdministrativeLegislation;
