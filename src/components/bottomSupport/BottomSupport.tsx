import { Col, Divider, Row } from 'antd';
import { Card } from 'antd';
import { Image } from 'antd';
import webImage from '../images/web2.jpg'
import graphicImage from '../images/graphics.jpg'
import aiImage from '../images/ai.jpg'


const { Meta } = Card;

const style: React.CSSProperties = { background: '#fff', padding: '8px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' };


function BottomSupport() {
    return (
        <>
            <Divider orientation="center">
                <div className='text-4xl mt-8 justify-center' >
                    Some Popular Courses
                </div>
            </Divider>
            <Row gutter={{ xs: 24, sm: 16, md: 24, lg: 32 }}>
                <Col span={8} xs={24} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<Image
                                src={webImage}
                            />}>
                            <Meta title="Web and Mobile Development Course" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={24} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<Image
                                src={graphicImage}
                            />}>
                            <Meta title="Graphics Designing Course" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={24} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<Image
                                src={aiImage}
                            />}>
                            <Meta title="AI Course" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default BottomSupport
