import indent from './indent.png';
import mobile_indent from './mobile_indent.png';
import './title.css';

const Title = () => {
    return (
        <>
            <div className='desktop__title'>
                <div className='title__container'>
                    <div className='title__container-named'>
                        <h5>Профессиональная юридическая помощь в Кемерово</h5>
                    </div>
                    <div className='title__container-indent'>
                        <img src={indent} alt='линия отступа'/>
                    </div>
                    <div className='title__container-description'>
                        <h4>Имеем стаж в юридической деятельности более 20 лет.</h4> 
                        <p>Обеспечим участие самых высококвалифицированных специалистов в необходимой области права! </p>
                    </div>
                </div>
            </div>

            <div className='mobile__title-container'>
                <div className='title__container-named'>
                    <h5>Профессиональная юридическая помощь в Кемерово</h5>
                </div>
                <div className='title__container-indent'>
                    <img src={mobile_indent} alt='линия отступа'/>
                </div>
                <div className='title__container-description'>
                    <p>Обеспечим участие самых высококвалифицированных специалистов в необходимой области права! </p>
                </div>
            </div>
        </>
    )
}

export default Title;