import React from 'react';
import {Helmet} from "react-helmet";
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';


const PensionLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Helmet>
                <title>Законодательство о социальном и пенсионном обеспечении граждан</title>
                <meta name="description" content="Законодательство о социальном и пенсионном обеспечении граждан." />
            </Helmet>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Законодательство о социальном и пенсионном обеспечении граждан</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-10'>
                            <div className='service__page-content-title'>
                                <h3>Законодательство о социальном и пенсионном обеспечении граждан</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>признания права на досрочное получение пенсии;</li>
                                    <li>оспаривания решения об отказе в назначении досрочной страховой пенсии (шахтерам).</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/4PX5gZb/13-pension-legislation.webp' alt='картинка документов'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-09'>
                    <div className='service__page-content-title'>
                        <h3>Законодательство о социальном и пенсионном обеспечении граждан</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>признания права на досрочное получение пенсии;</li>
                            <li>оспаривания решения об отказе в назначении досрочной страховой пенсии (шахтерам).</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default PensionLegislation;
