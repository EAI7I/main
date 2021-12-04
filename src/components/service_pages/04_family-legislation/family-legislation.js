import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';


const FamilyLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Семейное законодательство</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-03'>
                            <div className='service__page-content-title'>
                                <h3>Семейное законодательство</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>разрешения в судебном и внесудебном порядке споров по семейным делам;</li>
                                    <li>подготовке и сопровождении соглашений и разделе имущества супругов;</li>
                                    <li>представления интересов в суде по вопросам наследования;</li>
                                    <li>вынесения судебных приказов по взысканию алиментов;</li>
                                    <li>разрешения в судебном и внесудебном порядке споровмеждусупругам о месте проживания детей, порядке встреч с детьми и др.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/6DMtTmL/04-family-legislation-1.webp' alt='картинка рабочего'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-03'>
                    <div className='service__page-content-title'>
                        <h3>Семейное законодательство</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>разрешения в судебном и внесудебном порядке споров по семейным делам;</li>
                                <li>подготовке и сопровождении соглашений и разделе имущества супругов;</li>
                                <li>представления интересов в суде по вопросам наследования;</li>
                                <li>вынесения судебных приказов по взысканию алиментов;</li>
                                <li>разрешения в судебном и внесудебном порядке споровмеждусупругам о месте проживания детей, порядке встреч с детьми и др.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default FamilyLegislation;
