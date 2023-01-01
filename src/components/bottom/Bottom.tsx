import { Col, Divider, Row } from 'antd';
import { Card } from 'antd';
import { Image } from 'antd';

const { Meta } = Card;


const style: React.CSSProperties = { background: '#fff', padding: '8px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' };

const bottomStyle = {
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const marginTop = {
  marginTop: '20rem'
}


function Bottom() {
  return (
    // <>
    // <div style={bottomStyle} className='text-slate-500'>
    // &copy; copyright 2022. All Rights Reserved
    // </div>
    // </>
    <>
      <Divider orientation="center">
        <div className='text-4xl'>
          Related Saylani Video
        </div>
      </Divider>
      <div style={bottomStyle}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UySmic4Lw3I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <Divider orientation="center" style={marginTop}>
        <div className='text-4xl mt-8'>
          About Some Popular Courses
        </div>
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {/* <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }}> */}
        <Col span={8} xs={14} md={10} lg={8}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 320 }}
              // cover={<img alt="example" src="./images/20.jpg" />}>
              cover={<Image
                src="./images/web2.jpg"
              />}>
              <Meta title="Web and Mobile Development Course" description="www.websmit.com.pk" />
            </Card>
          </div>
        </Col>
        <Col span={8} xs={14} md={10} lg={8}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<Image
                src="./images/Graphics.jpg"
              />}>
              <Meta title="Graphics Designing Course" description="www.websmit.com.pk" />
            </Card>
          </div>
        </Col>
        <Col span={8} xs={14} md={10} lg={8}>
          <div style={style}>
            <Card
              hoverable
              style={{ width: 320 }}
              cover={<Image
                src="./images/ai.jpg"
              />}>
              <Meta title="AI Course" description="www.websmit.com.pk" />
            </Card>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Bottom
