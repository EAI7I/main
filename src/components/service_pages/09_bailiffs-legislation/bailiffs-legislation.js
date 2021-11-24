import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';
import './bailiffs-legislation.css';


const BailiffsLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Законодательство об исполнительном производстве и судебных приставах</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-09'>
                            <div className='service__page-content-title'>
                                <h3>Законодательство об исполнительном производстве и судебных приставах</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>соблюдения законодательства в деятельности судебных приставов при возбуждении, исполнении, приостановлении, окончании исполнительного производства;</li>
                                    <li>поворота исполнения решения суда; замены стороны в исполнительном производстве;</li>
                                    <li>возврата излишне взысканных сумм по исполнительному производству;</li>
                                    <li>признания незаконным постановления судебного пристава и др.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/WWhjDJM/09-bailiffs-legislation.png' alt='картинка зала суда'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-09'>
                    <div className='service__page-content-title'>
                        <h3>Законодательство об исполнительном производстве и судебных приставах</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>соблюдения законодательства в деятельности судебных приставов при возбуждении, исполнении, приостановлении, окончании исполнительного производства;</li>
                                <li>поворота исполнения решения суда; замены стороны в исполнительном производстве;</li>
                                <li>возврата излишне взысканных сумм по исполнительному производству;</li>
                                <li>признания незаконным постановления судебного пристава и др.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default BailiffsLegislation;
