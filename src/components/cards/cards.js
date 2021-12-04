import {NavLink} from 'react-router-dom';
import './cards.css';

const Cards = () => {
    const data = [
        {img:'https://i.ibb.co/BwwrK4Y/Vector-1.png', service:'Участие в рассмотрении дел в Восьмомкассационном суде общей юрисдикции,Кемеровском областном суде', url: 'court'},
        {img:'https://i.ibb.co/tYR7y5V/labor-man-1.png', service:'Трудовое законодательство', url: 'labor-legislation' },
        {img:'https://i.ibb.co/n1hhDwW/group-1.png', service:'Гражданское законодательство', url: 'civil-legislation'},
        {img:'https://i.ibb.co/y0zhkkK/Group-4.png', service:'Семейное законодательство', url: 'family-legislation'},
        {img:'https://i.ibb.co/kKC4Wwd/Group-1.png', service:'Жилищное законодательство', url: 'housing-legislation'},
        {img:'https://i.ibb.co/7V811dH/Group-3.png', service:'Арбитражное законодательство', url: 'arbitration-legislation'},
        {img:'https://i.ibb.co/fqjSjCm/handcuffs-1.png', service:'Уголовное законодательство', url: 'criminal-legislation'},
        {img:'https://i.ibb.co/n1hhDwW/group-1.png', service:'Юридическая помощь лицам из числа детей-сирот и детей, оставшихся без попечения родителей', url: 'help-orphans'},
        {img:'https://i.ibb.co/2NrTjGZ/Group.png', service:'Законодательство об исполнительном производстве и судебных приставах', url: 'bailiffs-legislation'},
        {img:'https://i.ibb.co/xD3nttB/Group-2.png', service:'Законодательство о банках и банковской деятельности', url: 'banks-legislation'},
        {img:'https://i.ibb.co/n1hhDwW/group-1.png', service:'Законодательство о защите прав потребителей', url: 'consumers-legislation'},
        {img:'https://i.ibb.co/cbVzZwP/Group-6.png', service:'Законодательство о порядке рассмотрения обращений граждан', url: 'appeal-citizens-legislation'},
        {img:'https://i.ibb.co/rGnvL1p/XMLID-1619.png', service:'Законодательство о социальном и пенсионном обеспечении граждан', url: 'pension-legislation'},
        {img:'https://i.ibb.co/8xJbVhG/auction-1.png', service:'Административное законодательство', url: 'administrative-legislation'},
    ];

    const items = data.map(item => {
        return (
            <>
                <div className='content-services__container-data'>
                    <NavLink to={item.url} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='cards'>
                            <div className='cards-img'>
                                <img src={item.img} alt='суд'/>
                            </div>
                            <div className='cards-text'>
                                <p>{item.service}</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </>
        )
    })

    return items
    
}

export default Cards;