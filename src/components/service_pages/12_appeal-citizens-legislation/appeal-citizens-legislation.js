import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';


const AppealCitizensLegislation = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Законодательство о порядке рассмотрения обращений граждан</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text-10'>
                            <div className='service__page-content-title'>
                                <h3>Законодательство о порядке рассмотрения обращений граждан</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>подготовки обращений в органы исполнительной и представительной власти местного самоуправления, Кемеровской области, федеральные;</li>
                                    <li>объективного и всестороннего рассмотрения обращений, обжалований ответов и др.</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/R7SXCMY/12-appeal-citizens-legislation.webp' alt='картинка зала заседаний'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text-09'>
                    <div className='service__page-content-title'>
                        <h3>Законодательство о порядке рассмотрения обращений граждан</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>подготовки обращений в органы исполнительной и представительной власти местного самоуправления, Кемеровской области, федеральные;</li>
                            <li>объективного и всестороннего рассмотрения обращений, обжалований ответов и др.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AppealCitizensLegislation;
