import { Col, Divider, Row } from 'antd';
import { Card } from 'antd';
import BottomSupport from '../bottomSupport/BottomSupport';
import Footnote from '../footnote/Footnote';


const style: React.CSSProperties = { background: '#fff', padding: '8px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' };

const bottomStyle = {
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
};


function Bottom() {
  return (
    <>
      <Divider orientation="center">
        <div className='text-4xl'>
          Related Saylani Video
        </div>
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={bottomStyle}>
        <Col span={12} xs={14} md={10} lg={12}>
          <Card>
            <div style={style}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/UySmic4Lw3I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Card>
        </Col>
        <Col span={12} xs={14} md={10} lg={12}>
          <Card>
            <div style={style}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/z0iYmrykSL4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Card>
        </Col>
        <BottomSupport />
        <Footnote />
      </Row>

    </>
  )
}

export default Bottom
