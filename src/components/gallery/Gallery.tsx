import { Button, Col, Divider, Row } from 'antd';
import { Card } from 'antd';
import bashirFarooqi from '../images/20.jpg'
import bashirFarooqi2 from '../images/22.jpg'
import sirZia from '../images/27.jpg'
import class1 from '../images/26.jpg'
import class2 from '../images/24.jpg'
import class3 from '../images/25.jpg'
import groupPhoto from '../images/21.jpg'
import webImage from '../images/web2.jpg'
import aiImage from '../images/ai.jpg'
const { Meta } = Card;


const style: React.CSSProperties = { background: '#fff', padding: '8px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' };

function Gallery() {
    return (
        <>
            <Divider orientation="center">
                <div className='text-4xl'>
                    Gallery
                </div>
            </Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="justify-center">
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="Bashir-Farooqi" src={bashirFarooqi}/>}>
                            <Meta title="SAYLANI MASS INSTITUTE TRANING" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="Sir-Zia" src={sirZia}/>}>
                            <Meta title="SAYLANI MASS INSTITUTE TRANING" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="Bashir-Farooqi" src={bashirFarooqi2}/>}>
                            <Meta title="SAYLANI MASS INSTITUTE TRANING" description="www.websmit.com.pk" />
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
                            cover={<img alt="Class-1" src={class1}/>}>
                            <Meta title="SAYLANI MASS INSTITUTE TRANING" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="Class-2" src={class2}/>}>
                            <Meta title="SAYLANI MASS INSTITUTE TRANING" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="Class-3" src={class3}/>}>
                            <Meta title="SAYLANI MASS INSTITUTE TRANING" description="www.websmit.com.pk" />
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
                            cover={<img alt="Group" src={groupPhoto}/>}>
                            <Meta title="SAYLANI MASS INSTITUTE TRANING" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="Web Development Course" src={webImage}/>}>
                            <Meta title="SAYLANI MASS INSTITUTE TRANING" description="www.websmit.com.pk" />
                        </Card>
                    </div>
                </Col>
                <Col span={8} xs={14} md={10} lg={8}>
                    <div style={style}>
                        <Card
                            hoverable
                            style={{ width: 320 }}
                            cover={<img alt="AI Course" src={aiImage}/>}>
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

export default Gallery
