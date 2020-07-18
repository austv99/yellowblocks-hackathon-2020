import * as React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Input, Button, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css';
import logo from '../assets/charifund.png';
import { Link } from 'react-router-dom';

const { Search } = Input;

export const HeaderBar = () => {
    return (
        <>
            <Row gutter={16} align="middle">
                <Col span={3} className="gutter-box" offset={1}>
                    <Link to="/">
                    <img src={logo} className="logo" alt="logo"/>
                    </Link>
                </Col>

                <Col span={11} className="gutter-box">
                    <Search placeholder="search shops" onSearch={value => console.log(value)} enterButton />
                </Col>

                <Col span={6} className="gutter-box">
                    <Link to="/shops">
                    <Button type="link">All Shops</Button> | 
                    </Link>
                    <Link to="/charities">
                    <Button type="link">All Charities</Button> |
                    </Link>
                    <Button type="link">Suggest a Charity</Button>
                </Col>

                <Col span={1} className="gutter-box" offset={1}> 
                    {/* need to convert to button */}
                    <Link to="/profile">
                    <Avatar size="large" icon={<UserOutlined />} src="https://toppng.com/uploads/preview/image-bill-gates-transparent-bill-gates-11563566568tr4jlrx3oe.png" />
                    </Link>
                </Col>
            </Row>
        </>
    );
}

export default HeaderBar;