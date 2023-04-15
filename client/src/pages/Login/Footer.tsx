import React from 'react';

import NormalFooterList from '@components/normalFooterList';
import { Row, Col } from 'antd';

import cusServices from '@asset/data/loginFooter';

function Footer() {
  // console.log(cusServices, 'cusServices');
  return (
    <Row style={{ margin: '30px' }}>
      <Col span={16} offset={4}>
        <div className="login-footer-bar">
          <NormalFooterList
            listData={cusServices}
          />
          <NormalFooterList
            listData={cusServices}
          />
          <NormalFooterList
            listData={cusServices}
          />
          <NormalFooterList
            listData={cusServices}
          />
          <NormalFooterList
            listData={cusServices}
          />
        </div>
        {/* <hr style={{ marginTop: '40px', color: 'rgba(0, 0, 0, 0.26)' }} />
        <div className="text-center">
          @2023 Jan MADE. 版權所有。
        </div> */}
      </Col>

    </Row>

  );
}

export default Footer;
