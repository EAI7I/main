import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import '../01_court/court.css';


const HelpOrphans = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <div className='desktop-service__page'>
                <div className='service__page-container'>
                    <div className='service__page-nav'>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black'}}><p>Главная</p></NavLink> / <p>Юридическая помощь лицам из числа детей-сирот и детей, оставшихся без попечения родителей</p>
                    </div>
                    <div className='service__page-content'>
                        <div className='service__page-content-text'>
                            <div className='service__page-content-title'>
                                <h3>Юридическая помощь лицам из числа детей-сирот и детей, оставшихся без попечения родителей</h3>
                            </div>
                            <div className='service__page-content-info'>
                                <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                                <ul>
                                    <li>постановки лиц из числа детей-сирот и детей, оставшихся без попечения родителей, на учет в органах местного самоуправления в качестве нуждающихся в предоставлении жилых помещений;</li>
                                    <li>предоставления органами местного самоуправлениялицам из числа детей-сирот и детей, оставшихся без попечения родителей, жилых помещений;</li>
                                </ul>
                            </div>
                        </div>
                        <div></div>
                        <div className='service__page-content-img'>
                            <img src='https://i.ibb.co/RNjdJFG/08-help-orphans.png' alt='картинка зала суда'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-service__page'>
                <div className='service__page-content-text'>
                    <div className='service__page-content-title'>
                        <h3>Юридическая помощь лицам из числа детей-сирот и детей, оставшихся без попечения родителей</h3>
                    </div>
                    <div className='service__page-content-info'>
                        <p className='service__page-content-info-paragraph'>Оказываем юридическую помощь по вопросам:</p>
                        <ul>
                            <li>постановки лиц из числа детей-сирот и детей, оставшихся без попечения родителей, на учет в органах местного самоуправления в качестве нуждающихся в предоставлении жилых помещений;</li>
                            <li>предоставления органами местного самоуправлениялицам из числа детей-сирот и детей, оставшихся без попечения родителей, жилых помещений;</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HelpOrphans;
