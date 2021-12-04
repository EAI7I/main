import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';
import './civil-legislation.css';

const CivilLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <div className='desktop-service__page-03'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Гражданское законодательство</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-03'>
                            <div className='service__page-content-title'>
                                <h3>Гражданское законодательство</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>взыскания долгов по договорам займа, распискам;</li>
                                    <li>взыскания задолженности по договорам, заключенным между юридическими лицами, между юридическим лицом и гражданином;</li>
                                    <li>возмещения вреда (ущерба), причиненного причиненного в результате ДТП и др.;</li>
                                    <li>признания гражданина недееспособным;</li>
                                    <li>признания гражданина безвестно отсутствующим;</li>
                                    <li>объявления гражданина умершим;</li>
                                    <li>взыскания с недропользователя (шахт), ущерба, причиненного имуществу гражданина (жилому дому, расположенного в зоне земель горного отвода и подработанных в результате ведения горных работ);</li>
                                    <li>взыскания компенсации за нарушение исключительных прав на товарные знаки;</li>
                                    <li>подготовки заявления о сносе самовольной постройки и др.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/b5rKQCT/03-civil-legislation.webp' alt='картинка зала суда'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-03'>
                    <div className='service__page-content-title'>
                        <h3>Гражданское законодательство</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>взыскания долгов по договорам займа, распискам;</li>
                            <li>взыскания задолженности по договорам, заключенным между юридическими лицами, между юридическим лицом и гражданином;</li>
                            <li>возмещения вреда (ущерба), причиненного причиненного в результате ДТП и др.;</li>
                            <li>признания гражданина недееспособным;</li>
                            <li>признания гражданина безвестно отсутствующим;</li>
                            <li>объявления гражданина умершим;</li>
                            <li>взыскания с недропользователя (шахт), ущерба, причиненного имуществу гражданина (жилому дому, расположенного в зоне земель горного отвода и подработанных в результате ведения горных работ);</li>
                            <li>взыскания компенсации за нарушение исключительных прав на товарные знаки;</li>
                            <li>подготовки заявления о сносе самовольной постройки и др.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CivilLegislation;
