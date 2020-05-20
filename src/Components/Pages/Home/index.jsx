import React, {useState} from 'react'
import { Layout } from 'antd';
import { Card } from './Blocks/Card';
import { MyLayout } from './style';

const { Header, Footer, Sider, Content } = Layout;

const data = [
    {
        id: 1,
        name: "повітряна кулька",
        image: "",
        price: 10,
    },
    {
        id: 2,
        name: "футболка",
        image: "",
        price: 50, 
    },
    {
        id: 3,
        name: "кулька 2",
        image: "",
        price: 10,
    },
]

export const Home = () => {
    const [title, changeTitle] = useState('hello')

    const renderCards = () => {
        return data.map(el => {
            return (
                <Card item={ el }/>
            )
        })
    }

    return (<Layout>
        <Header>Header</Header>
        <MyLayout>
          <Sider>Sider</Sider>
          <Content>
            {
              renderCards()
            }
          </Content>
        </MyLayout>
        <Footer>Footer</Footer>
      </Layout>)
}