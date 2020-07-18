import * as React from 'react';
import 'antd/dist/antd.css';
import {Row, Col, Button, Typography, Avatar, Statistic, List, Divider} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css';

const { Title, Paragraph } = Typography;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const amountRaised = 1004.25;

export const CharityPage = () => {
    return(
        <>
            <Row gutter={30} className="topRow">
                <Col span={7} offset={1}>
                    <Row className="borderbox">
                        <div className="picture">
                            Picture
                        </div>
                    </Row>

                    <Row className="borderbox" justify="center">
                        <Statistic title="Amount Raised" value={amountRaised} precision={2} />
                    </Row>

                </Col>

                <Col span={15}>
                    <Row className="borderbox">
                        <Title level={2}>Charity Name</Title>
                    </Row>

                    <Row className="indentbox">
                        <Paragraph>charity description</Paragraph>
                    </Row>

                    <Row className="borderbox" justify="center">
                        <Button type="primary">Link to Website</Button>
                    </Row>
                </Col>
            </Row>

            <br />
            <br />

            <Row>
                <Col span={5} offset={1}>
                    <Title level={2}>Recent Developments</Title>
                </Col>
            </Row>

            <Row justify="center">
            <div className="newsContainer">
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <a href={item.href}>View Article</a>,
                        ]}
                        extra={
                            <img
                              width={272}
                              alt="logo"
                              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
                />
            </div>
            </Row>

            <br />
            <Divider dashed/>
            <br />


            <Row align="middle">
                <Col span={4} offset={1}>
                    <Title level={2}>Related Charities</Title>
                </Col>

                <Col span={2} offset={3}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                </Col>

                <Col span={2} offset={1}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                </Col>

                <Col span={2} offset={1}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                </Col>

                <Col span={2} offset={1}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                </Col>

                <Col span={2} offset={1}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} />
                </Col>
            </Row>

            <br/>
            <br/>
        </>
    );
}