import React from 'react';
import {Helmet} from "react-helmet";
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';
import './housing-legislation.css';


const HousingLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Helmet>
                <title>Жилищное законодательство</title>
                <meta name="description" content="Профессиональная юридическая помощь в Кемерово в области жилищного законодательства." />
            </Helmet>
            <Header/>
            <div className='desktop-service__page-05'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Жилищное законодательство</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-05'>
                            <div className='service__page-content-title'>
                                <h3>Жилищное законодательство</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>признания в судебном порядке права собственности на недвижимое имущество;</li>
                                    <li>определения порядка пользования жилым помещением;</li>
                                    <li>вселения (выселения) проживающих в квартиру (дом);</li>
                                    <li>признания недействительным договоров дарения, содержания, купли-продажи недвижимого имущества;</li>
                                    <li>изъятия жилого помещения для муниципальных нужд при признании дома аварийным и подлежащим сносу;</li>
                                    <li>признания утратившим право пользования жилым помещением (если в квартире зарегистрированы бывшие собственники и другие неизвестные лица);</li>
                                    <li>отмены судебных приказов о взыскании задолженности по коммунальным услугам;</li>
                                    <li>возмещения ущерба, причиненного затоплением квартиры из-за протечки крыши, при проведении региональным оператором капитального ремонта общего имущества многоквартирного дома – крыши дома и др.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img className='service__page-content-img-05' src='https://i.ibb.co/1fxMpn3/05-housing-legislation.webp' alt='картинка рабочего'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-05'>
                    <div className='service__page-content-title'>
                        <h3>Жилищное законодательство</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>признания в судебном порядке права собственности на недвижимое имущество;</li>
                            <li>определения порядка пользования жилым помещением;</li>
                            <li>вселения (выселения) проживающих в квартиру (дом);</li>
                            <li>признания недействительным договоров дарения, содержания, купли-продажи недвижимого имущества;</li>
                            <li>изъятия жилого помещения для муниципальных нужд при признании дома аварийным и подлежащим сносу;</li>
                            <li>признания утратившим право пользования жилым помещением (если в квартире зарегистрированы бывшие собственники и другие неизвестные лица);</li>
                            <li>отмены судебных приказов о взыскании задолженности по коммунальным услугам;</li>
                            <li>возмещения ущерба, причиненного затоплением квартиры из-за протечки крыши, при проведении региональным оператором капитального ремонта общего имущества многоквартирного дома – крыши дома и др.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HousingLegislation;
