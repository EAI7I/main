import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <>
            <div className='desktop__header'>
                <div className='header__container'>
                    <div className='header__container-logo'>
                        <NavLink to='/main' style={{cursor: 'pointer'}}><img src="https://i.ibb.co/S0t0jVC/logo.png" alt='logo'/></NavLink>
                    </div>
                    <NavLink to='/main' style={{cursor: 'pointer', color: 'black', textDecoration: 'none'}}><div className='header__container-title'>
                            <h5>Профессиональная</h5>
                            <h5>Юридическая</h5>
                            <h5>Помощь</h5>
                    </div></NavLink>
                    <div className='header__container-address'>
                        <p>г. Кемерово, ул. 50 лет Октября, дом 35, офис 711 </p>
                    </div>
                    <div className='header__container-contact'>
                        <div className='header__container-contact-data'>
                            <h5>Гутов Алексей Николаевич</h5>
                            <p>8 999 999 00 00</p>
                            <p>yeppahoujuke-2723@yopmail.com</p>
                        </div>
                    </div>
                    <div className='header__container-contact'>
                        <div className='header__container-contact-data'>
                            <h5>Гутов Алексей Николаевич</h5>
                            <p>8 999 999 00 00</p>
                            <p>yeppahoujuke-2723@yopmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='mobile__header'>
                <div className='mobile__header-title'>
                    <div className='mobile__header-title-name'>
                        <div className='mobile-logo'>
                            <NavLink to='/main' style={{cursor: 'pointer'}}><img src="https://i.ibb.co/S0t0jVC/logo.png" alt='logo'/></NavLink>
                        </div>
                        <div></div>
                        <NavLink to='/main' style={{cursor: 'pointer', color: 'black', textDecoration: 'none'}}><div className='mobile-name'>
                            <h6>Профессиональная</h6>
                            <h6>Юридическая</h6>
                            <h6>Помощь</h6>
                        </div></NavLink>
                    </div>
                    <div></div>
                    <div className='mobile__header-title-address'>
                        <p>г. Кемерово, ул. 50 лет Октября, дом 35, офис 571 </p>
                    </div>
                </div>
                <div className='mobile__header-contact'>
                    <div className='mobile__header-contact-data'>
                        <h5>Гутов Алексей Николаевич</h5>
                        <a href='tel:89999990000'>8 999 999 00 00</a>
                        <p>yeppahoujuke-2723@yopmail.com</p>
                    </div>
                    <div className='mobile__header-contact-data'>
                        <h5>Гутов Алексей Николаевич</h5>
                        <a href='tel:89999990000'>8 999 999 00 00</a>
                        <p>yeppahoujuke-2723@yopmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;