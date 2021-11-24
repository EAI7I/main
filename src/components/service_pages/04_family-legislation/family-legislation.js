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
                            <img src='https://i.ibb.co/9bymk51/04-family-legislation.png' alt='картинка рабочего'/>
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

// услуги
// https://i.ibb.co/WWhjDJM/09-bailiffs-legislation.png
// https://i.ibb.co/RNjdJFG/08-help-orphans.png
// https://i.ibb.co/n6rv2mh/10-banks-legislation.png
// https://i.ibb.co/gJRtPxr/11-consumers-legislation.png
// https://i.ibb.co/kH3nzFt/12-appeal-citizens-legislation.png
// https://i.ibb.co/tmYSCKP/13-pension-legislation.png
// https://i.ibb.co/Jz2yT7J/14-administrative-legislation.png
// https://i.ibb.co/pKdK3F0/01-court.png
// https://i.ibb.co/sshRJhN/02-labor-legislation.png
// https://i.ibb.co/WtsByMD/03-civil-legislation.png
// https://i.ibb.co/9bymk51/04-family-legislation.png
// https://i.ibb.co/Svppq6r/05-housing-legislation.png
// https://i.ibb.co/5xBP0pZ/06-arbitration-legislation.png
// https://i.ibb.co/JFBdS3F/07-criminal-legislation.png

