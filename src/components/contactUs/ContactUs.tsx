import { Col, Divider, Row } from 'antd';
import { Layout } from 'antd';
import { Button, Form, Input, Descriptions } from 'antd';

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const onFinish = (values: any) => {
  console.log(values);
}

// const contentStyle: React.CSSProperties = {
//   height: '500px',
//   background: '#fff',
//   display: 'flex',
//   justifyContent: 'center',
//   color: '#0066b3'
// };


const styling: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '25px'

}

function ContactUs() {
  return (
    <>
      <Layout>
        <Divider orientation="center">
          <div className='text-4xl'>
            Contact Us
          </div>
        </Divider>
        <Row>
          <Col className='text-4xl' style={styling}>
            <img src="./images/contact.jpg" alt="contactImage" />
          </Col>
        </Row>
        <Col>
          <Row>
            <Col span={18}>
              <Form {...layout} name="nest-messages" onFinish={onFinish}>
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Phone" rules={[{ type: 'number', min: 0, max: 99 }]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'message']} label="Message">
                  <Input.TextArea />
                </Form.Item>
              </Form>
              <Button type="primary" className='bg-sky-800 absolute bottom-0 right-0'>
                Submit
              </Button>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col span={12}>
            <Descriptions title="Contact Details" layout="vertical">
              <Descriptions.Item label="Telephone">34900009</Descriptions.Item>
              <Descriptions.Item label="email">info@smit.com</Descriptions.Item>
              <Descriptions.Item label="Address" span={2}>
                No. 00 SMIT Building, Mumtaz Mobile Mall, Gulshan-e-Iqbal, Karachi
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Content>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={24}>
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe title='iframe' className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=saylani mass training&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a target="_blank" rel="noopener noreferrer" href="https://saylaniwelfare.com/en/">www.saylaniWelfare.com</a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Content>
          </Col>
        </Row>
      </Layout>
      <Button type="primary" className='bg-sky-800'>
        <a href="/" rel="noopener noreferrer">
          Back to Home
        </a>
      </Button>
    </>
  )
}

export default ContactUs
