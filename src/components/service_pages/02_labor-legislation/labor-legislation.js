import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';
import './labor-legislation.css';

const LaborLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Трудовое законодательство</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-02'>
                            <div className='service__page-content-title'>
                                <h3>Трудовое законодательство</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>восстановления на работе;</li>
                                    <li>внесения изменений в трудовую книжку;</li>
                                    <li>взыскания задолженности по зарплате, а также социальным выплатам;</li>
                                    <li>возмещения ущерба (работодателю, работнику), возникшего в результате трудовых отношений;</li>
                                    <li>взыскании морального вреда причинённого здоровью при при несчастном случае на производстве.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/sshRJhN/02-labor-legislation.png' alt='картинка рабочего'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-02'>
                    <div className='service__page-content-title'>
                        <h3>Трудовое законодательство</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>восстановления на работе;</li>
                            <li>внесения изменений в трудовую книжку;</li>
                            <li>взыскания задолженности по зарплате, а также социальным выплатам;</li>
                            <li>возмещения ущерба (работодателю, работнику), возникшего в результате трудовых отношений;</li>
                            <li>взыскании морального вреда причинённого здоровью при при несчастном случае на производстве.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LaborLegislation;
