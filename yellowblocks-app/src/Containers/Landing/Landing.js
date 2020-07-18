import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './Landing.css';
import Asos from '../../assets/asos.svg';
import Nike from '../../assets/nike.svg';
import {HeaderBar} from '../../HeaderBar';
import HelloFresh from '../../assets/hellofresh.svg';
import Jbhifi from '../../assets/jbhifi.svg';
import Officeworks from '../../assets/officeworks.jpg';
import ChatThai from '../../assets/chatthai.png';
import RedCross from '../../assets/redcross.png';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import MSFCarousel from '../../assets/msfcarousel.jpg';
import Amazon from '../../assets/amazon.svg';
import { Steps, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;
const { Step } = Steps;

export default function Landing () {
    return(
        <>
        <HeaderBar />
        <div style={{paddingBottom: '5rem'}}>
        <div className='body'>
        <h1>Charity Spotlight of the Week</h1>
        <Link to="/redcross">
        <img src={RedCross} style={{width: '1000px'}}/>
        </Link>
        </div>
        <h1>How does it work?</h1>

        <div className ="steps-padding">
        <Steps current={0}>
          <Step title="Click your desired store" description="Visit one of our participating retailers online stores" />
          <Step title="Shop and get cashback" description="Finish a purchase at one of our partnering shops" />
          <Step title="That's it!" description="Proceeds are automatically donated to your desired charity and money is deposited into your account" />
        </Steps>
        </div>
        <Divider />

        {/* <div className="partnered"> */}
        <h1>Partnered Businesses</h1>
        {/* </div> */}
        <div className="business">
        <Link to="/asos">
        <Card hoverable style={{ height: 500, width: 250, margin: '6px' }}>
            <div style={{height:'200px', width:'200px'}}>
            
            <img src={Asos} style={{height: '150px', width: '150px'}}/>
            
            </div>
            <h1 style={{fontWeight:'700'}}>Asos</h1>
            <h2>Cashback Rate 6%</h2>
            <h3>3% for you, 3% for charity</h3>
        </Card>
        </Link>
        <Card hoverable style={{ height: 500, width: 250, margin: '6px' }}>
            <div style={{height:'200px', width:'200px'}}>
            <img src={Nike} style={{height: '150px', width: '150px'}}/>
            </div>
            <h1 style={{fontWeight:'700'}}>Nike</h1>
            <h2>Cashback Rate 4%</h2>
            <h3>2% for you, 2% for charity</h3>
        </Card>
        <Card hoverable style={{ height: 500, width: 250, margin: '6px' }}>
            <div style={{height:'200px', width:'200px'}}>
            <img src={HelloFresh} style={{height: '150px', width: '150px'}}/>
            </div>
            <h1 style={{fontWeight:'700'}}>HelloFresh</h1>
            <h2>Cashback Rate 5%</h2>
            <h3>2.5% for you, 2.5% for charity</h3>
            <h4 style={{color: '#ff0000'}}>Limited Offer!</h4>
        </Card>
        <Card hoverable style={{ height: 500, width: 250, margin: '6px' }}>
        <div style={{height:'200px', width:'200px'}}>
            <img src={Jbhifi} style={{height: '150px', width: '150px'}}/>
        </div>
            <h1 style={{fontWeight:'700'}}>JB HI-FI</h1>
            <h2>Cashback Rate 3%</h2>
            <h3>1.5% for you, 1.5% for charity</h3>
            {/* <h4 style={{color: '#ff0000'}}>Limited Offer!</h4> */}
        </Card>
        <Card hoverable style={{ height: 500, width: 250, margin: '6px' }}>
        <div style={{height:'200px', width:'200px'}}>
        <img src={Officeworks} style={{height: '100px', width: '200px'}}/>
        </div>
            <h1 style={{fontWeight:'700'}}>Officeworks</h1>
            <h2>Cashback Rate 4%</h2>
            <h3>2% for you, 2% for charity</h3>
        </Card>
        <Card hoverable style={{ height: 400, width: 250, margin: '6px' }}>
        <div style={{height:'200px', width:'200px'}}>
        <img src={ChatThai} style={{height: '150px', width: '100px'}}/>
            <h1 style={{fontWeight:'700'}}>Chat Thai</h1>
            <h2>Cashback Rate 4%</h2>
            <h3>2% for you, 2% for charity</h3>
        </div>
        </Card>
        <Card hoverable style={{ height: 400, width: 250, margin: '6px' }}>
        <div style={{height:'200px', width:'200px'}}>
        <img src={Amazon} style={{height: '150px', width: '200px'}}/>
            <h1 style={{fontWeight:'700'}}>Amazon</h1>
            <h2>Cashback Rate 4%</h2>
            <h3>2% for you, 2% for charity</h3>
        </div>
        </Card>


        </div>
        </div>
        </>
    );
}

