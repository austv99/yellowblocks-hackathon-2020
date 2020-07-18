import * as React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Input, Button, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css';
import logo from '../assets/charifund.png';

const { Search } = Input;

export const HeaderBar = () => {
    return (
        <>
            <Row gutter={16} align="middle">
                <Col span={3} className="gutter-box" offset={1}>
                    <img src={logo} className="logo"/>
                </Col>

                <Col span={11} className="gutter-box">
                    <Search placeholder="search shops" onSearch={value => console.log(value)} enterButton />
                </Col>

                <Col span={6} className="gutter-box">
                    <Button type="link">All Shops</Button> | 
                    <Button type="link">All Charities</Button> |
                    <Button type="link">How it Works?</Button>
                </Col>

                <Col span={1} className="gutter-box" offset={1}> 
                    {/* need to convert to button */}
                    <Avatar size="large" icon={<UserOutlined />} src="https://toppng.com/uploads/preview/image-bill-gates-transparent-bill-gates-11563566568tr4jlrx3oe.png" />
                </Col>
            </Row>
        </>
    );
}

export default HeaderBar;