import * as React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { List, Card } from 'antd';
import HelloFresh from '../assets/hellofresh.svg';
import Jbhifi from '../assets/jbhifi.svg';
import Officeworks from '../assets/officeworks.jpg';
import ChatThai from '../assets/chatthai.png';
import Asos from '../assets/asos.svg';
import Nike from '../assets/nike.svg';
import Amazon from '../assets/amazon.svg';


import { Tabs } from 'antd';

const { TabPane } = Tabs;

const { Meta } = Card;

const grocery_data = [];

grocery_data.push({
    title:'Hello Fresh',
    image: HelloFresh,
})
grocery_data.push({
    title:'Amazon',
    image: Amazon,
})

const electronics_data = [];
electronics_data.push({
    title:'JB Hifi',
    image: Jbhifi,
})

electronics_data.push({
    title:'Amazon',
    image: Amazon,
})

const fashion_data = [];
fashion_data.push({
    title:'Nike',
    image: Nike,
})
const dining_data = [];
dining_data.push({
    title:'Chat Thai',
    image: ChatThai,
})

const healthy_beauty_data = [];
healthy_beauty_data.push({
    title:'ASOS',
    image: Asos,
})

const home_living_data = [];
home_living_data.push({
    title:'Office Works',
    image: Officeworks,
})

const sports_outdoors_data = [];
sports_outdoors_data.push({
    title:'Nike',
    image: Nike,
})

export const AllShopsPage = () => {
    function callback(key) {
        console.log(key);
    }

    return(
        <>
        <h1><b>
            All Shops
        </b></h1>

        <div className="ShopsContainer">
        <Tabs defaultActiveKey="6" onChange={callback}>
            <TabPane tab="Groceries" key="1">
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 6,
                    xl: 6,
                    }}
                    dataSource={grocery_data}
                    renderItem={item => (
                    <List.Item>
                        <div onClick={() => alert("Hello from here")}>
                        <Card
                            hoverable
                            style={{ width: 180, height: 280 }}
                            cover={
                            <img
                                alt={item.title}
                                src={item.image}
                                style={{
                                    width: 180,
                                }}
                            />
                            }
                        >
                            <Meta
                            title={item.title}
                            />
                        </Card>
                        </div>
                    </List.Item>
                    )}
                />
            </TabPane>
            <TabPane tab="Travel" key="2">
                No content so far
            </TabPane>
            <TabPane tab="Electronics" key="3">
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 6,
                    xl: 6,
                    }}
                    dataSource={electronics_data}
                    renderItem={item => (
                    <List.Item>
                        <div onClick={() => alert("Hello from here")}>
                        <Card
                            hoverable
                            style={{ width: 180, height: 280 }}
                            cover={
                            <img
                                alt={item.title}
                                src={item.image}
                                style={{
                                    width: 180,
                                }}
                            />
                            }
                        >
                            <Meta
                            title={item.title}
                            />
                        </Card>
                        </div>
                    </List.Item>
                    )}
                />
            </TabPane>
            <TabPane tab="Fashion" key="4">
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 6,
                    xl: 6,
                    }}
                    dataSource={fashion_data}
                    renderItem={item => (
                    <List.Item>
                        <div onClick={() => alert("Hello from here")}>
                        <Card
                            hoverable
                            style={{ width: 180, height: 280 }}
                            cover={
                            <img
                                alt={item.title}
                                src={item.image}
                                style={{
                                    width: 180,
                                }}
                            />
                            }
                        >
                            <Meta
                            title={item.title}
                            />
                        </Card>
                        </div>
                    </List.Item>
                    )}
                />
            </TabPane>
            <TabPane tab="Dining" key="5">
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 6,
                    xl: 6,
                    }}
                    dataSource={dining_data}
                    renderItem={item => (
                    <List.Item>
                        <div onClick={() => alert("Hello from here")}>
                        <Card
                            hoverable
                            style={{ width: 180, height: 280 }}
                            cover={
                            <img
                                alt={item.title}
                                src={item.image}
                                style={{
                                    width: 180,
                                }}
                            />
                            }
                        >
                            <Meta
                            title={item.title}
                            />
                        </Card>
                        </div>
                    </List.Item>
                    )}
                />
            </TabPane>
            <TabPane tab="Healthy & Beaulty" key="6">
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 6,
                    xl: 6,
                    }}
                    dataSource={healthy_beauty_data}
                    renderItem={item => (
                    <List.Item>
                        <div onClick={() => alert("Hello from here")}>
                        <Card
                            hoverable
                            style={{ width: 180, height: 280 }}
                            cover={
                            <img
                                alt={item.title}
                                src={item.image}
                                style={{
                                    width: 180,
                                }}
                            />
                            }
                        >
                            <Meta
                            title={item.title}
                            />
                        </Card>
                        </div>
                    </List.Item>
                    )}
                />
            </TabPane>
            <TabPane tab="Home & Living" key="7">
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 6,
                    xl: 6,
                    }}
                    dataSource={home_living_data}
                    renderItem={item => (
                    <List.Item>
                        <div onClick={() => alert("Hello from here")}>
                        <Card
                            hoverable
                            style={{ width: 180, height: 280 }}
                            cover={
                            <img
                                alt={item.title}
                                src={item.image}
                                style={{
                                    width: 180,
                                }}
                            />
                            }
                        >
                            <Meta
                            title={item.title}
                            />
                        </Card>
                        </div>
                    </List.Item>
                    )}
                />
            </TabPane>
            <TabPane tab="Sports & Outdoors" key="8">
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 6,
                    xl: 6,
                    }}
                    dataSource={sports_outdoors_data}
                    renderItem={item => (
                    <List.Item>
                        <div onClick={() => alert("Hello from here")}>
                        <Card
                            hoverable
                            style={{ width: 180, height: 280 }}
                            cover={
                            <img
                                alt={item.title}
                                src={item.image}
                                style={{
                                    width: 180,
                                }}
                            />
                            }
                        >
                            <Meta
                            title={item.title}
                            />
                        </Card>
                        </div>
                    </List.Item>
                    )}
                />
            </TabPane>
        </Tabs>
        </div>

        </>
    );
}