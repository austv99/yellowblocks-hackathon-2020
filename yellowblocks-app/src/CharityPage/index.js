import * as React from 'react';
import 'antd/dist/antd.css';
import {Row, Col, Button, Typography, Avatar, Statistic, List, Divider} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.css';
import {HeaderBar} from '../HeaderBar';

const { Title, Paragraph } = Typography;

const listData = [];
listData.push({
    href: 'https://www.itnews.com.au/news/australian-red-cross-unifies-digital-experience-for-270000-stakeholders-549849',
    title: 'Australian Red Cross unifies digital experience for 270,000 stakeholders',
    image: 'https://i.nextmedia.com.au/Utils/ImageResizer.ashx?n=https%3a%2f%2fi.nextmedia.com.au%2fNews%2fAustralian_Red_Cross.jpg&w=480&c=0&s=1',
    description:
        'Prepares to launch self-service portal.',
    content:
        'The Australian Red Cross has automated administrative tasks and provided a unified experience to 270,000 clients, donors, members and volunteers using Dell Boomi’s integration platform.'
});

listData.push({
    href: 'https://www.centralwesterndaily.com.au/story/6822311/red-cross-retail-store-opens-in-time-for-winter-winds/',
    title: "Orange's Red Cross retail store opens to the public with precautions in place",
    image: 'https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/EV5mvKE9uRngSfCJC8f9sf/c894064a-6603-4a2c-9b56-bf12c86e2b3c.JPG/r580_712_4928_3264_w1200_h678_fmax.jpg',
    description:
        'As the winter winds settles into Orange, the Australian Red Cross retail store has opened its doors to op shoppers.',
    content:
        'Red Cross retail store manager Judy Webber said volunteer staff are taking are precautionary measures to keep the store and products safe.'
});

listData.push({
    href: 'https://itbrief.com.au/story/australian-red-cross-completes-significant-dx-milestone-with-boomi',
    title: "Australian Red Cross completes significant DX milestone with Boomi",
    image: 'https://itbrief.com.au/uploads/story/2020/06/30/GettyImages-1172966600.jpg',
    description:
        'Boomi, a Dell Technologies business, has successfully provided a unified experience for the Australian Red Cross and helped the organisation achieve a significant milestone on its digital transformation journey.',
    content:
        'More specifically, Boomi has provided a platform that automates administrative tasks and reduces manual attention required, freeing up time and resources for other business operations.'
});

listData.push({
    href: 'https://media.ifrc.org/ifrc/press-release/red-cross-red-crescent-braces-covid-spike-south-asia/',
    title: "Red Cross Red Crescent braces for COVID spike in South Asia",
    image: 'https://media.ifrc.org/ifrc/wp-content/uploads/sites/5/2020/07/m8.jpg',
    description:
        'Kuala Lumpur/Delhi/Islamabad/Dhaka/Geneva, 16 July 2020 – South Asia is fast becoming the next COVID-19 epicentre as cases soar in India, Pakistan and Bangladesh.',
    content:
        'John Fleming, Asia Pacific Head of Health, International Federation of Red Cross and Red Crescent Societies (IFRC) said: “COVID-19 is spreading at an alarming rate in South Asia, home to a quarter of humanity.'
});

const amountRaised = 1004.25;

export const CharityPage = () => {
    return(
        <>
            <HeaderBar />
            <Row gutter={30} className="topRow">
                <Col span={7} offset={1}>
                    <Row className="borderbox">
                        <img alt="charity" className="picture" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Australian_Red_Cross_full_logo.svg/1200px-Australian_Red_Cross_full_logo.svg.png"/>
                    </Row>

                    <Row className="borderbox" justify="center">
                        <Statistic title="Amount Raised" value={amountRaised} precision={2} prefix="$"/>
                    </Row>

                </Col>

                <Col span={15}>
                    <Row className="borderbox">
                        <Col span={24}>
                            <Title>Red Cross</Title>
                        </Col>
                    </Row>

                    <Row className="indentbox">
                        <Paragraph>The Australian Red Cross, formally the Australian Red Cross Society, is a humanitarian aid and community services charity in Australia and an auxiliary to government.</Paragraph>
                    </Row>

                    <Row className="borderbox" justify="center">
                        <Button type="primary" href="https://www.redcross.org.au/">Link to Website</Button>
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
                              src={item.image}
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
                    <Avatar shape="square" size={64} icon={<UserOutlined />} src="data:image/png;base64,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"/>
                </Col>

                <Col span={2} offset={1}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} src="https://probonoaustralia.com.au/wp-content/uploads/2019/08/St-Vincent-de-Paul-Society-2-300x300.jpg"/>
                </Col>

                <Col span={2} offset={1}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} src="https://image.freepik.com/free-vector/charity-life-abstract-logo_1043-47.jpg"/>
                </Col>

                <Col span={2} offset={1}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} src="https://w7.pngwing.com/pngs/423/846/png-transparent-synprodo-b-v-company-business-logo-charity-company-text-globe.png"/>
                </Col>

                <Col span={2} offset={1}>
                    <Avatar shape="square" size={64} icon={<UserOutlined />} src="data:image/png;base64,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"/>
                </Col>
            </Row>

            <br/>
            <br/>
        </>
    );
}