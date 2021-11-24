import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';
import './criminal-legislation.css';


const CriminalLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <div className='desktop-service__page-07'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Уголовное законодательство</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-03'>
                            <div className='service__page-content-title'>
                                <h3>Уголовное законодательство</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь:</p>
                                <ul>
                                    <li>по материалам доследственных проверок (по заявлениям и сообщениям о преступлениях), проводимых правоохранительными органами;</li>
                                    <li>по обжалованию постановлений, вынесенных дознователями, следователями;</li>
                                    <li>по взысканию морального и материального вреда, причиненного в результате преступления или противоправного деяния;</li>
                                    <li>в судебном и внесудебном взыскании долгов по договорам;</li>
                                    <li>в организации и сопровождении процедуры возмещения материального ущерба при необоснованном привлечении к уголовной ответственности (прекращении следователем или дознавателем уголовного дела по реабилитирующим основаниям, вынесении судом оправдательного приговора).</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/JFBdS3F/07-criminal-legislation.png' alt='картинка зала суда'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-03'>
                    <div className='service__page-content-title'>
                        <h3>Уголовное законодательство</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь:</p>
                        <ul>
                            <li>по материалам доследственных проверок (по заявлениям и сообщениям о преступлениях), проводимых правоохранительными органами;</li>
                            <li>по обжалованию постановлений, вынесенных дознователями, следователями;</li>
                            <li>по взысканию морального и материального вреда, причиненного в результате преступления или противоправного деяния;</li>
                            <li>в судебном и внесудебном взыскании долгов по договорам;</li>
                            <li>в организации и сопровождении процедуры возмещения материального ущерба при необоснованном привлечении к уголовной ответственности (прекращении следователем или дознавателем уголовного дела по реабилитирующим основаниям, вынесении судом оправдательного приговора).</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CriminalLegislation;
