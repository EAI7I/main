import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';


const ConsumersLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Законодательство о защите прав потребителей</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-10'>
                            <div className='service__page-content-title'>
                                <h3>Законодательство о защите прав потребителей</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>подготовки претензии и заявлений в суд по качеству и безопасности оказанных услуг потребителю и др.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/gJRtPxr/11-consumers-legislation.png' alt='картинка офиса с работниками'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-09'>
                    <div className='service__page-content-title'>
                        <h3>Законодательство о защите прав потребителей</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>подготовки претензии и заявлений в суд по качеству и безопасности оказанных услуг потребителю и др.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ConsumersLegislation;
