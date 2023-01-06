import { Col, Descriptions, Divider, Row } from "antd"
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

import smitLogo from '../images/31.jpg'

function Footnote() {
  return (
    <>
      <Row className="text-center">
        <Col flex={2} span={6}>
          <div>
            <img src={smitLogo} alt="Logo" />
          </div>
        </Col>
        <Col flex={3} span={18}>
          <div className="bg-blue-100">
            <Divider orientation="center">
              <div className="text-lg">
                Our Contact Details
              </div>
            </Divider>
            <Descriptions layout="vertical" className="justify-center">
              <Descriptions.Item label="Telephone">34900009</Descriptions.Item>
              <Descriptions.Item label="email">info@smit.com</Descriptions.Item>
              <Descriptions.Item label="Address" span={2}>
                No. 00 SMIT Building, Mumtaz Mobile Mall, Gulshan-e-Iqbal, Karachi
              </Descriptions.Item>
            </Descriptions>
            <Divider orientation="center">
              <div className="text-lg">
                Our Social Media Links
              </div>
            </Divider>
            <Descriptions layout="vertical" className="justify-center">
              <Descriptions.Item>
                <a href="https://www.facebook.com">
                <FacebookOutlined style={{ fontSize: '50px', color: '#08c' }} />
                </a>
                </Descriptions.Item>
              <Descriptions.Item>
                <a href="https://www.twitter.com">
                <TwitterOutlined style={{ fontSize: '50px', color: '#08c' }} />
                </a>
                </Descriptions.Item>
              <Descriptions.Item>
                <a href="https://www.youtube.com">
                <YoutubeOutlined style={{ fontSize: '50px', color: '#F00' }} />
                </a>
              </Descriptions.Item>
            </Descriptions>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Footnote
