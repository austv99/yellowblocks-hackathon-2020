import React from 'react';
import 'antd/dist/antd.css';
import './StorePage.css';
import { Layout, Card, Button, Progress, Popover } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import HeaderBar from "../../HeaderBar";

const { Header, Content, Footer } = Layout;

export default function StorePage () {
    
    return(
    // <Layout className="layout">
    <>
        <HeaderBar />
        {/* <Content style={{ padding: '20px 50px' }}> */}
        <h1>ASOS Cashback</h1>
        <div style={{marginTop:'30px'}}>
            <div class='flex-container'>
                <div style={{marginLeft:'30px', marginRight:'30px'}}>
                <Card style={{ width: '300px' }}>
                    <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
                    <img class="center" style={{height: '85px', width: '150px'}} src="https://diginomica.com/sites/default/files/images/2020-04/Screenshot%202020-04-14%20at%2013.43.39.png"></img>
                    <p class="cardp"><strong>Cashback Rate:</strong> 6%</p>
                    <p class="cardp">3% for you, 3% for charity</p>
                    <div class="center"> 
                        <Button href="https://www.asos.com/au/" type="primary">SHOP NOW</Button>
                    </div>
                    </div>
                </Card>
                <br/>
                <p><strong>Estimated Approval:</strong> 30-75 days</p>
                </div>
                <div>
                <div class='flex-container half-container'>
                    <p style={{fontSize:"12px", fontStyle:"bold", marginRight:"10px"}}><strong>Charity split:</strong></p>
                    <Progress class='third-container' style={{marginRight:"10px"}} percent={50} size="small" status="active" />
                    <Popover content={<p>Charity split is the percentage of cashback received from a transaction that will be donated to charity.</p>} >
                        <QuestionCircleOutlined style={{marginRight:"10px"}}/>
                    </Popover>
                    <Button type="secondary">CHANGE</Button>
                </div>
                <h2>ASOS Terms and Conditions:</h2>
                <p class='pleft'>- Cashback will not be paid on purchases made through the ASOS App.</p>
                <p class='pleft'>- Cashback will not be paid when a student code and/or discount is used.</p>
                <p class='pleft'>- Free* returns for Australian orders is a trial only. ASOS reserves the right to withdraw or amend the offer at any time.</p>
                </div>
            </div>
        </div>
        {/* </Content> */}
        <Footer style={{ textAlign: 'center' }}>Yellowblocks ©2020</Footer>
    </>
    // </Layout>
    );
}

