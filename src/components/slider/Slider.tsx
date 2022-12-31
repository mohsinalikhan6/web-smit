import React from 'react';
import { Carousel } from 'antd';

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
      <h3 style={contentStyle}><img src="./images/4.png" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="./images/1.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="./images/12.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="./images/14.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="./images/5.jpg" alt="" /></h3>
    </div>
  </Carousel>
);

export default Slider;