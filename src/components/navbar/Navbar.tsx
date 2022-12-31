import { Col, Row } from 'antd';
import Menubar from '../menu/Menu';
function Navbar() {
    return (
<>
    <Row>
        <Col span={6} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }}>
            <img src="./images/smitLogo.png" alt="" />
        </Col>
        <Col className='mt-6 '  span={18} xs={{ order: 4 }} sm={{ order: 4 }} md={{ order: 4 }} lg={{ order: 4 }}>
        <Menubar />
        </Col>
    </Row>
</>
    )
}

export default Navbar
