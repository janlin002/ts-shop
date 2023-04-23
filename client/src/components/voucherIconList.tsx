import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import '../asset/css/style.css';

type ListType = {
    list: {
        iconUrl: string,
        info: string
    }[]
}

function VoucherIconList({ list }: ListType) {
  return (
    <div className="icon-list-wrap">
      <Row>
        <Col span={14} offset={5}>
          <div className="icon-list-container">
            {list.map((item) => (
              <div
                // eslint-disable-next-line jsx-a11y/aria-role
                role="bitton"
                className="icon-list-style"
              >
                <img
                  className="icon-list-item"
                  src={item.iconUrl}
                  alt=""
                />
                <p style={{
                  whiteSpace: 'nowrap',
                }}
                >
                  {item.info}

                </p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default VoucherIconList;

VoucherIconList.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};
