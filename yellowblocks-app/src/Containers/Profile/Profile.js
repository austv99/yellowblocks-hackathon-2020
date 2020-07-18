import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Profile.css';
import { Row, Col, Statistic, Slider, Popover, Table  } from 'antd';
import { DollarCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import HeaderBar from '../../HeaderBar';

const marks = {
  0: '0%',
  100: {
    style: {
      color: '#0',
    },
    label: <strong>100%</strong>,
  },
};

const dataTransact = [
  {
    key: '1',
    date: '08/07/2020',
    transaction: 'Foot Locker',
    earned: '$30.00',
    donated: '$70.00',
    charity: 'UNICEF',
  },
  {
    key: '2',
    date: '06/07/2020',
    transaction: 'JB Hi-Fi',
    earned: '$2.45',
    donated: '$20.95',
    charity: 'Red Cross',
  },
  {
    key: '3',
    date: '03/07/2020',
    transaction: 'ASOS',
    earned: '$50.44',
    donated: '$30.65',
    charity: 'Red Cross',
  },
  {
    key: '4',
    date: '25/06/2020',
    transaction: 'The ICONIC',
    earned: '$30.44',
    donated: '$15.37',
    charity: 'The Pyjama Foundation',
  },
  {
    key: '5',
    date: '20/06/2020',
    transaction: 'JB Hi-Fi',
    earned: '$140.65',
    donated: '$103.77',
    charity: 'St Vincent de Paul',
  },
  {
    key: '6',
    date: '19/06/2020',
    transaction: 'Nike',
    earned: '$80.32',
    donated: '$110.68',
    charity: 'UNICEF',
  },
  {
    key: '7',
    date: '20/06/2020',
    transaction: 'Woolworths',
    earned: '$14.85',
    donated: '$33.02',
    charity: "Women's Health West",
  },

  {
    key: '8',
    date: '20/06/2020',
    transaction: 'Coles',
    earned: '$2.50',
    donated: '$5.53',
    charity: 'Foodbank Australia',
  },
  
]
const colTransact = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Transaction',
    dataIndex: 'transaction',
    key: 'transaction'
  },
  {
    title: 'Amount Earned',
    dataIndex: 'earned',
    key: 'earned'
  },
  {
    title: 'Amount Donated',
    dataIndex: 'donated',
    key: 'donated'
  },
  {
    title: 'Donated To',
    dataIndex: 'charity',
    key: 'charity'
  },
];

export default function Profile () {
    return (
      <>
      <HeaderBar />
      <div style={{paddingLeft: '5rem'}}>
      <Row gutter={50}>
        <Col style={{width: '55%'}}>
          <Statistic align="left" title="You've donated a total of" value={389.97} prefix={<DollarCircleOutlined />} />
        </Col>
        <Col style={{width: '40%'}}>
          <div className="flex-center-container">
          <div>
          <h3>Your Charity Split</h3>
          <Popover content={<p>Charity split is the percentage of cashback received from a transaction that will be donated to charity.</p>} >
            <QuestionCircleOutlined style={{marginRight:"10px"}}/>
          </Popover>
          </div>
          <Slider style={{width: '15rem'}} marks={marks} valueLabelDisplay="on"/>
          </div>
        </Col>
      </Row>
      
      <Row gutter={50}>
        <Col style={{width: '55%'}}>
          <br/>
          <h3>Your Transactions</h3>
          <Table dataSource={dataTransact} columns={colTransact} />
        </Col>
        <Col style={{width: '40%'}}>
          <br/>
          <div className="">
            <h3>Your Top Donations</h3>
            <div className="display-container-space">
              <div>UNICEF</div>
              <div>$180.68</div>
            </div>
            <div className="display-container-space">
              <div>St Vincent de Paul</div>
              <div>$103.77</div>
            </div>
            <div className="display-container-space">
              <div>Red Cross</div>
              <div>$51.60</div>
            </div>
            <div className="display-container-space">
              <div>Women's Health West</div>
              <div>$33.02</div>
            </div>
            <div className="display-container-space">
              <div>The Pyjama Foundation</div>
              <div>$15.37</div>
            </div>
            <div className="display-container-space">
              <div>Foodbank Australia</div>
              <div>$5.53</div>
            </div>
          </div>
        </Col>
      </Row>
      </div>
      </>  
    );
  }
