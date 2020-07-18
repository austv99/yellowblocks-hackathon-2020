import * as React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Input, Button, Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css';

const { Search } = Input;

export const HeaderBar = () => {
    return (
        <>
            <Row gutter={16} align="middle">
                <Col span={3} className="gutter-box" offset={1}>
                    <div className="logo">
                        Logo
                    </div>
                </Col>

                <Col span={11} className="gutter-box">
                    <Search placeholder="search shops" onSearch={value => console.log(value)} enterButton />
                </Col>

                <Col span={4} className="gutter-box">
                    <Button type="link">All Shops</Button> | 
                    <Button type="link">All Charities</Button>
                </Col>

                <Col span={1} className="gutter-box" offset={3}> 
                    {/* need to convert to button */}
                    <Avatar size="large" icon={<UserOutlined />} src="https://toppng.com/uploads/preview/image-bill-gates-transparent-bill-gates-11563566568tr4jlrx3oe.png" />
                </Col>
            </Row>
        </>
    );
}

export default HeaderBar;