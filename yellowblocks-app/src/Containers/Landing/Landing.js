import React from 'react';
import { Input } from 'antd';
import { Carousel } from 'antd';
// import 'antd/dist/antd.css';
import { Card } from 'antd';
import './Landing.css';
import Asos from '../../assets/asos.svg';
const { Search } = Input;

export default function Landing () {
    return(
        <>
        <div className='body'>

        <Carousel className="carousel" autoplay>
            <div>
            <h3>Charity 1</h3>
            </div>
            <div>
            <h3>Charity 2</h3>
            </div>
            <div>
            <h3>Charity 3</h3>
            </div>
            <div>
            <h3>Charity 4</h3>
            </div>
        </Carousel>
        
        </div>
        <div className="partnered">
        <h1>Partnered Businesses</h1>
        </div>
        <div className="business">
        <Card style={{ width: 250, margin: '6px' }}>
            <img src={Asos} style={{height: '150px', width: '150px'}}/>
            <h1>Asos</h1>
            <h2>Cashaback Rate 6%</h2>
            <h3>3% for you, 3% for charity</h3>
        </Card>
        <Card style={{ width: 250, margin: '6px' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Card style={{ width: 250, margin: '6px' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Card style={{ width: 250, margin: '6px' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Card style={{ width: 250, margin: '6px' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Card style={{ width: 250, margin: '6px' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>

        </div>
        </>
    );
}

