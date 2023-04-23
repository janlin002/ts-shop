import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';

type voucher = {
    voucherFakeData: {
        url: string
    }[],
    height: string
}

function CustomCarousel({ voucherFakeData, height }: voucher) {
  const contentStyle: React.CSSProperties = {
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '750px',
    height,
  };
  return (
    <Carousel autoplay style={{ width: '750px' }}>
      {
            voucherFakeData.map((item) => (
              <div>
                <img src={item?.url} alt="" style={contentStyle} />
              </div>
            ))
        }

    </Carousel>
  );
}

export default CustomCarousel;

CustomCarousel.propTypes = {
  voucherFakeData: PropTypes.instanceOf(Array).isRequired,
};
