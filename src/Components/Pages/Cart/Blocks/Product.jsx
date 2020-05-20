import React, {useState} from 'react'
import { Card as AntdCard } from 'antd';

export const Card = ({item, action}) => {
    const {id, name, price, count} = item;
    
    return (
        <AntdCard title={name} bordered style={{ width: 300 ,marginBottom: 5}}>
            <span>Price: {price}</span>
            <button onClick={() => action("plus", id)} style={{marginLeft: 5}}>+</button>
            <span style={{marginLeft: 5}}>{count}</span>
            <button onClick={() => action("minus", id)} style={{marginLeft: 5}}>-</button>
            <button onClick={() => action("del", id)} style={{marginLeft: 10}}>Delete</button>
        </AntdCard>
    )
}