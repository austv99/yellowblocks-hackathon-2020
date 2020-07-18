import React from 'react';
import 'antd/dist/antd.css';
import './../index.css';
import { Card } from 'antd';

export default function Card () {
    return(
    <Card style={{ width: 300 }}>
        <p>Cashback Rate: 6%</p>
        <p>3% for you, 3% for charity</p>
    </Card>
    );
}