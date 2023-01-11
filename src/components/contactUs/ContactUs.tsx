import { Col, Divider, Row } from 'antd';
import { Layout } from 'antd';
import { Button, Form, Input, Descriptions } from 'antd';
import contact from '../images/contact.jpg'
import { useState } from 'react'


function ContactUs() {

  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const PostData = async (e: any) => {
    e.preventDefault()

    const { name, email, phone, message} = details;

    const res = await fetch("https://web-smit-default-rtdb.firebaseio.com/contact.json",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        })
      })

  }


const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const onFinish = (values: any) => {
  console.log(values);
}

const styling: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '25px'

}


  return (
    <>
      <Layout>
        <Divider orientation="center">
          <div className='text-4xl'>
            Contact Us
          </div>
        </Divider>
        <Row >
          <Col className='text-4xl' style={styling}>
            <img src={contact} alt="contactImage" />
          </Col>
        </Row>
        <Col>
          <Row>
            <Col span={18}>
              <Form {...layout} name="nest-messages" onFinish={onFinish}>
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                  <Input 
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })}
                  />
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                  <Input 
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })}
                  />
                </Form.Item>
                <Form.Item label="Phone" rules={[{ type: 'number', min: 0, max: 99 }]}>
                  <Input 
                  onChange={(e) =>
                    setDetails({ ...details, phone: e.target.value })}
                  />
                </Form.Item>
                <Form.Item name={['user', 'message']} label="Message">
                  <Input.TextArea 
                  onChange={(e) =>
                    setDetails({ ...details, message: e.target.value })}
                  />
                </Form.Item>
              </Form>
              <Button type="primary" className='bg-sky-800 absolute bottom-0 right-0'
              onClick={PostData}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Col>
        <Row>
          <Col span={8} className='bg-blue-100'>
            <Descriptions title="Contact Details" layout="vertical">
              <Descriptions.Item label="Telephone">34900009</Descriptions.Item>
              <Descriptions.Item label="email">info@smit.com</Descriptions.Item>
              <Descriptions.Item label="Address" span={2}>
                No. 00 SMIT Building, Mumtaz Mobile Mall, Gulshan-e-Iqbal, Karachi
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={16}>
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
