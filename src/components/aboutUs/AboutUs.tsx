import { Button, Col, Divider } from 'antd';
import { Layout } from 'antd';
import saylaniPic2 from '../images/30.jpg'
import SMITLogo from '../images/31.jpg'


const style: React.CSSProperties = { background: '#fff', padding: '8px 0', display: 'flex', justifyContent: 'space-around', alignItems: 'center' };

const { Header, Footer, Content } = Layout;


const contentStyle: React.CSSProperties = {
  height: '500px',
  background: '#fff',
  display: 'flex',
  justifyContent: 'center',
  color: '#0066b3'
};

function AboutUs() {
  return (
    <>
      <Layout>
        <Header style={style}>
          <Divider orientation="center">
            <div className='text-4xl'>
              About Us
            </div>
          </Divider>
        </Header>
        <Content style={contentStyle}>
          <Col >
            <div>
              <img src={saylaniPic2} alt="aboutImage" />
            </div>
          </Col>
          <Col >
            <div>
              <img src={SMITLogo} alt="aboutImage" />
            </div>
          </Col>
        </Content>
        <Footer>
          Saylani Welfare International Trust is a non-government organization (NGO) focusing primarily on feeding the poor and homeless. It was established in May 1999 and is headquartered at Bahdurabad, Karachi, Pakistan.It was founded and headed by spiritual and religious scholar Maulana Bashir Farooq Qadri. With an estimated monthly expenditure of Pakistani Rupees above 30 million, Saylani Trust, provides food twice a day to more than 30,000 poor people through its 100 centers (generally known as Dastar-Khawan), most of them are serving in Karachi. The organization distributed CNG rickshaws among the jobless citizens of Karachi in April 2011 with the help of members of the Karachi business community.
        </Footer>
      </Layout>
      <Layout>
        <Content style={contentStyle}>
          <Col >
            <div style={contentStyle}>
              <img src={saylaniPic2} alt="aboutImage" />
            </div>
            <div>
              <p className='text-center text-black'>
                Saylani Welfare International Trust is a non-government organization (NGO) focusing primarily on feeding the poor and homeless. It was established in May 1999 and is headquartered at Bahdurabad, Karachi, Pakistan.It was founded and headed by spiritual and religious scholar Maulana Bashir Farooq Qadri. With an estimated monthly expenditure of Pakistani Rupees above 30 million, Saylani Trust, provides food twice a day to more than 30,000 poor people through its 100 centers (generally known as Dastar-Khawan), most of them are serving in Karachi. The organization distributed CNG rickshaws among the jobless citizens of Karachi in April 2011 with the help of members of the Karachi business community.
              </p>
            </div>
          </Col>
        </Content>
      </Layout>
      <Button type="primary" className='bg-sky-800'>
        <a href="/" rel="noopener noreferrer">
          Back to Home
        </a>
      </Button>
    </>
  )
}

export default AboutUs