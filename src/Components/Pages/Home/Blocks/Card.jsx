import React, {useState} from 'react'
import { Card as AntdCard } from 'antd';
import ReactCardFlip from 'react-card-flip';

const { Meta } = AntdCard;

export const Card = ({item}) => {
    /*const addToCart = (event) => {

        const target = event.target;
        const buttonAddToCart = target.closest('.button-add-cart');
    
        if (buttonAddToCart) {
            const card = target.closest('.card');
            const title = card.querySelector('.card-title-reg').textContent;
            const cost = card.querySelector('.card-price-bold').textContent;
            const id = buttonAddToCart.id;
    
    
            const food = cart.find(function (item) {
                return item.id === id;
            });
    
            if (food) {
                food.count += 1;
                sessionStorage.setItem(title, JSON.stringify([(parseFloat(cost) * food.count) + '₽', food.count]));
            } else {
                cart.push({
                    id,
                    title,
                    cost,
                    count: 1,
                });
                sessionStorage.setItem(title, JSON.stringify([cost, 1]));
            }
    
        }
    
    }
*/
    const [isFlipped, changeFlipped] = useState(false);
    const clickCard = () => {
        changeFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <AntdCard
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={item.img} />}
            onClick={clickCard}
        >
            <Meta title={item.name}/>
        </AntdCard>
 
        <AntdCard
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={item.img} />}
            onClick={clickCard}
        >
            <Meta title={item.price}/>
        </AntdCard>
      </ReactCardFlip>
    )
}