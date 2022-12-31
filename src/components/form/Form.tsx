import { Button, Divider, DatePicker, Checkbox, Col, Form, Input, Row, Select } from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AddmisionForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      +92
    </Form.Item>
  );

  return (
    <>
      <Divider orientation="center">
        <div className='text-4xl'>
          Admision Form
        </div>
      </Divider>
      <Form
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="fullname"
          label="Full Name"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your fullname!', whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="fathername"
          label="Father Name"
          tooltip="What is your father name"
          rules={[{ required: true, message: 'Please input your fathername!', whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          tooltip="What is Your Address?"
          rules={[{ required: true, message: 'Please input your Address!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name='DOB'
          label="Date of Birth">
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please select gender!' }]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: 'Please select City!' }]}
        >
          <Select placeholder="select your gender">
            <Option value="karachi">Karachi</Option>
            <Option value="lahore">Lahore</Option>
            <Option value="islamabad">Islamabad</Option>
            <Option value="faisalabad">Faisalabad</Option>
            <Option value="hyderabad">Hyderabad</Option>
            <Option value="multan">Multan</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="courses"
          label="Courses"
          rules={[{ required: true, message: 'Please select Course!' }]}
        >
          <Select placeholder="select your course">
            <Option value="web&mobile">Web & Mobile</Option>
            <Option value="graphicsdesigning">Graphics Designing</Option>
            <Option value="ccna">CCNA</Option>
            <Option value="cisco">Cisco</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="aboutYourself"
          label="About Yourself"
          rules={[{ required: true, message: 'Please input About Yourself' }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[{ required: true, message: 'Please input the captcha you got!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="/">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" className='bg-sky-800'>
            Register
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" className='bg-sky-800'>
        <a href="/" rel="noopener noreferrer">
          Back to Home
        </a>
      </Button>
    </>
  );
};

export default AddmisionForm;