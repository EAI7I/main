import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';


const ArbitrationLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Арбитражное законодательство</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-03'>
                            <div className='service__page-content-title'>
                                <h3>Арбитражное законодательство</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>в судебном и досудебном разрешении споров между юридическими лицами;</li>
                                    <li>подготовки в арбитражный суд заявления о признании физического лица банкротом;</li>
                                    <li>сопровождении процедуры банкротства юридических и физических лиц;</li>
                                    <li>в судебном и внесудебном взыскании долгов по договорам;</li>
                                    <li>признания сделок недействительными и др.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/hg7dFRq/06-arbitration-legislation.webp' alt='картинка зала суда'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-03'>
                    <div className='service__page-content-title'>
                        <h3>Арбитражное законодательство</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>в судебном и досудебном разрешении споров между юридическими лицами;</li>
                            <li>подготовки в арбитражный суд заявления о признании физического лица банкротом;</li>
                            <li>сопровождении процедуры банкротства юридических и физических лиц;</li>
                            <li>в судебном и внесудебном взыскании долгов по договорам;</li>
                            <li>признания сделок недействительными и др.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ArbitrationLegislation;
