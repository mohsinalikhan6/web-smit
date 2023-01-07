import { Col, Divider, Row } from 'antd';
import { Card } from 'antd';
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
                            cover={<img alt="webCourse" src={webImage} />}>
                            <Meta title="SMIT Web & Mobile Course" />
                            <br />
                            <a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" rel="noopener noreferrer">
                                About Web Development
                            </a>
                            <br />
                            <a href="./form" target="_blank" rel="noopener noreferrer">
                                SMIT AdmissionForm
                            </a>
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={24} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="graphicCourse" src={graphicImage} />}>
                            <Meta title="SMIT Graphics Course" />
                            <br />
                            <a href="https://en.wikipedia.org/wiki/Graphic_design" target="_blank" rel="noopener noreferrer">
                                About Graphics Designing
                            </a>
                            <br />
                            <a href="./form" target="_blank" rel="noopener noreferrer">
                                SMIT AdmissionForm
                            </a>
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={24} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="aiCourse" src={aiImage} />}>
                            <Meta title="SMIT AI Course" />
                            <br />
                            <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer">
                                About AI
                            </a>
                            <br />
                            <a href="./form" target="_blank" rel="noopener noreferrer">
                                AdmissionForm
                            </a>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default BottomSupport
