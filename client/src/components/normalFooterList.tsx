import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { Box } from '@mui/material';
import icon from '@utils/icon';

import '@asset/css/style.css';

type SubContent = {
  title: string;
  href: string;
  icon: string
}

type FooterDataType = {
  mainTitle: string;
  subContent: SubContent[];
}

function NormalFooterList({ FooterData }: { FooterData: FooterDataType[] }) {
  return (
    <Row style={{ margin: '30px' }}>
      <Col span={16} offset={4}>
        <Box className="login-footer-bar">
          {
            FooterData.map((item:any) => (
              <Box key={Math.random()}>
                <p className="login-footer-main-text">
                  {item.mainTitle}
                </p>
                <Box>
                  {
                item.subContent.map((subItem:any) => (
                  <Box key={Math.random()}>
                    <a className="login-footer-sub-text" href={subItem.href}>
                      {subItem.icon
                        ? icon(subItem.icon)
                        : ''}
                      {subItem.title}
                    </a>
                  </Box>

                ))
              }
                </Box>
              </Box>
            ))
    }
        </Box>
      </Col>
    </Row>

  );
}

export default NormalFooterList;

NormalFooterList.propTypes = {
  FooterData: PropTypes.instanceOf(Array).isRequired,
};
