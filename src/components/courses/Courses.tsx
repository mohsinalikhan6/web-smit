import { Button, Col, Divider, Row } from 'antd';
import { Card } from 'antd';
import webImage from '../images/web2.jpg'
import graphicImage from '../images/graphics.jpg'
import aiImage from '../images/ai.jpg'
import ciscoImage from '../images/cisco.jpg'
import ccnaImage from '../images/ccna.jpg'
import class3 from '../images/25.jpg'

const { Meta } = Card;


const style: React.CSSProperties = { background: '#fff', padding: '8px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'};



function Courses() {
    return (
        <>
            <Divider orientation="center">
                <div className='text-4xl'>
                    Courses
                </div>
            </Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="justify-center">
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="webCourse" src={webImage}/>}>
                            <Meta title="SMIT Web & Mobile Course"/>
                            <br />
                            <a href="https://en.wikipedia.org/wiki/Web_development" target="_blank" rel="noopener noreferrer">
                               About Web Development
                            </a>
                            <br/>
                            <a href="./form" target="_blank" rel="noopener noreferrer">
                                SMIT AdmissionForm
                            </a>
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="graphicCourse" src={graphicImage}/>}>
                            <Meta title="SMIT Graphics Course" />
                            <br />
                            <a href="https://en.wikipedia.org/wiki/Graphic_design" target="_blank" rel="noopener noreferrer">
                               About Graphics Designing
                            </a>
                            <br/>
                            <a href="./form" target="_blank" rel="noopener noreferrer">
                               SMIT AdmissionForm
                            </a>
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="ciscoCourse" src={ciscoImage}/>}>
                            <Meta title="SMIT CISCO Course"/>
                            <br />
                            <a href="https://en.wikipedia.org/wiki/Cisco_certifications" target="_blank" rel="noopener noreferrer">
                               About CISCO Course
                            </a>
                            <br/>
                            <a href="./form" target="_blank" rel="noopener noreferrer">
                                AdmissionForm
                            </a>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }} className="justify-center">
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="ccnaCourse" src={ccnaImage}/>}>
                            <Meta title="SMIT CCNA Course"/>
                            <br />
                            <a href="https://en.wikipedia.org/wiki/Ccna" target="_blank" rel="noopener noreferrer">
                               About CCNA
                            </a>
                            <br/>
                            <a href="./form" target="_blank" rel="noopener noreferrer">
                               SMIT AdmissionForm
                            </a>
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="aiCourse" src={aiImage}/>}>
                            <Meta title="SMIT AI Course"/>
                            <br />
                            <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer">
                               About AI
                            </a>
                            <br/>
                            <a href="./form" target="_blank" rel="noopener noreferrer">
                                AdmissionForm
                            </a>
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="Class" src={class3}/>}>
                            <Meta title="SAYLANI MASS INSTITUTE TRANING" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
            </Row>
            <Button type="primary" className='bg-sky-800'>
                <a href="/" rel="noopener noreferrer">
                    Back to Home
                </a>
            </Button>
        </>
    )
}

export default Courses
