import React, {useState, useEffect} from 'react'
import { Layout } from 'antd';
import { Card } from './Blocks/Product';
import { MyLayout } from './style';

const data = [
    {
        id: 1,
        name: "повітряна кулька",
        price: 10,
        count: 1,
    },
    {
        id: 2,
        name: "футболка",
        price: 50, 
        count: 1,
    },
    {
        id: 3,
        name: "кулька 2",
        price: 15,
        count: 1,
    },
]

export const Cart = () => {
    const [cart, setCart] = useState([...data]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleClick = (type, id) => {
        if (type === "minus") {
          setCart(
            cart.map((item) => {
              if (item.id === id && item.count > 1) {
                item.count -= 1;
              }
              return item;
            })
          );
        }
        if (type === "plus") {
          setCart(
            cart.map((item) => {
              if (item.id === id && item.count < 200) {
                item.count += 1;
              }
              return item;
            })
          );
        }
        if (type === "del") {
          setCart(cart.filter((item) => item.id !== id));
        }
      };

      useEffect(() => {
        setTotalPrice(cart.reduce((acc, cv) => acc + cv.count * cv.price, 0));
      }, [cart]);
      return (
        <>
          {!cart.length ? (
            <div>Empty</div>
          ) : (
            <>
              <div>
                <div>
                  {cart.map((item) => (
                    <Card key={item.id} item={item} action={handleClick} />
                  ))}
                </div>
              </div>
                <p>Total Price: {totalPrice}</p>
            </>
          )}
        </>
      );
}