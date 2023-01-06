import React from 'react';
import { Carousel } from 'antd';
import saylaniPic from '../images/4.jpg'
import test from '../images/1.jpg'
import pc from '../images/14.jpg'
import course2 from '../images/12.jpg'
import pc2 from '../images/5.jpg'

const contentStyle: React.CSSProperties = {
  height: '500px',
  background: '#fff',
  display:'flex',
  justifyContent:'center',
  color:'#0066b3'
};

const Slider: React.FC = () => (
  <Carousel autoplay effect="fade">
    <div>
      <h3 style={contentStyle}><img src={saylaniPic} alt="saylaniPic" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={test} alt="test" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={pc} alt="pc" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={course2} alt="aicourse" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={pc2} alt="pc2" /></h3>
    </div>
  </Carousel>
);

export default Slider;