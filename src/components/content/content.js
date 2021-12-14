import Cards from '../cards/cards';
import './content-workers.css';
import './content-services.css';



const Content = () => {
    return (
        <>
            <div className='content'>
                <div className='content-workers__container'>
                    <div className='content-workers__container-title'>
                        <h4>Наши специалисты</h4>
                        <p>В нашей юридической консультации работают юристы с большим профессиональным опытом правовой деятельности по защите прав и интересов граждан, индивидуальных предпринимателей и юридических лиц.</p>
                    </div>
                    <div className='content-workers__container-lawyer'>
                        <div className='content-workers__container-lawyer-1'>
                            <div><img src="https://i.ibb.co/yWCXPYk/lawyer-1.webp" alt='фото сотрудника' className='lawyer-photo'/></div>
                            <div className='lawyer-1__post'>
                                <h5>Гутов Алексей Николаевич</h5>
                                <p>Юрист</p>
                            </div>
                            <div className='lawyer-1__experience'>
                                <p>Стаж юридической деятельности более 15 лет</p>
                            </div>
                        </div>
                        <div></div>
                        <div className='content-workers__container-lawyer-1'>
                        <div><img src="https://i.ibb.co/x18qnw4/lawyer-2.webp" alt='фото сотрудника' className='lawyer-photo'/></div>
                            <div className='lawyer-2__post'>
                                <h5>Нуртдинов Дамир Мухаметгадиевич</h5>
                                <p>Юрист</p>
                            </div>
                            <div className='lawyer-2__experience'>
                                <p>Стаж юридической деятельности более 25 лет</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='content-services__container'>
                    <div className='content-services__container-title'>
                        <h4>Предоставляем широкий спект юридических услуг</h4>
                    </div>
                    <div className='content-services__container-list'>
                        <Cards/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;