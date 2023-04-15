import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import '@asset/css/style.css';

interface SubContent {
  title: string;
  href: string;
}

interface FooterDataType {
  mainTitle: string;
  subContent: SubContent[];
}

function NormalFooterList({ FooterData }: { FooterData: FooterDataType[] }) {
  return (
    <Row style={{ margin: '30px' }}>
      <Col span={16} offset={4}>
        <div className="login-footer-bar">
          {
            FooterData.map((item:any) => (
              <div key={Math.random()}>
                <p className="login-footer-main-text">
                  {item.mainTitle}
                </p>
                <div>
                  {
                item.subContent.map((subItem:any) => (
                  <div key={Math.random()}>
                    <a className="login-footer-sub-text" href={subItem.href}>
                      <div>{subItem.icon ? subItem.icon : ''}</div>
                      {subItem.title}
                    </a>
                  </div>

                ))
              }
                </div>
              </div>
            ))
    }
        </div>
      </Col>
    </Row>

  );
}

export default NormalFooterList;

NormalFooterList.propTypes = {
  FooterData: PropTypes.instanceOf(Array).isRequired,
};
