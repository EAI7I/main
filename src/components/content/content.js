import lawyer_1 from './lawyer_1.png';
import lawyer_2 from './lawyer_2.png';
// import administrative from './img/administrative.png';
// import arbitration from './img/arbitration.png';
// import bailiff from './img/bailiff.png';
// import bank from './img/bank.png';
// import conversation from './img/conversation.png';
// import employee from './img/employee.png';
// import family from './img/family.png';
// import group from './img/group.png';
// import housing from './img/housing.png';
// import labor from './img/labor.png';
// import orphan from './img/orphan.png';
// import retirement from './img/retirement.png';
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae habitant phasellus sed commodo euismod tempus libero quam.</p>
                    </div>
                    <div className='content-workers__container-lawyer'>
                        <div className='content-workers__container-lawyer-1'>
                            <div><img src={lawyer_1} alt='фото сотрудника' className='lawyer-photo'/></div>
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
                        <div><img src={lawyer_2} alt='фото сотрудника' className='lawyer-photo'/></div>
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