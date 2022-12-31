import { Button, Col, Divider, Row } from 'antd';
import { Card } from 'antd';
import { Image } from 'antd';
const { Meta } = Card;


const style: React.CSSProperties = { background: '#fff', padding: '8px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' };

function Courses() {
    return (
        <>
            <Divider orientation="center">
                <div className='text-4xl'>
                    Courses
                </div>
            </Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<Image
                                src="./images/web2.jpg"
                            />}>
                            <Meta title="SMIT Web & Mobile Course" description="www.websmit.com.pk" />
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
                            cover={<Image
                                src="./images/Graphics.jpg"
                            />}>
                            <Meta title="SMIT Graphics Course" description="www.websmit.com.pk" />
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
                            cover={<Image
                                src="./images/cisco.jpg"
                            />}>
                            <Meta title="SMIT CISCO Course" description="www.websmit.com.pk" />
                            <a href="./form" target="_blank" rel="noopener noreferrer">
                                AdmissionForm
                            </a>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row gutter={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<Image
                                src="./images/CCNA.jpg"
                            />}>
                            <Meta title="SMIT CCNA Course" description="www.websmit.com.pk" />
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
                            cover={<Image
                                src="./images/ai.jpg"
                            />}>
                            <Meta title="SMIT AI Course" description="www.websmit.com.pk" />
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
                            cover={<Image
                                src="./images/25.jpg"
                            />}>
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
