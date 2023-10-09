import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Image } from 'mui-image';

type Props = {
    voucherFakeData: Array<{
        url: string
    }>,
    height: string
}

function CustomCarousel({ voucherFakeData, height }: Props) {
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
              <Box>
                <Image src={item?.url} alt="" style={contentStyle} />
              </Box>
            ))
        }

    </Carousel>
  );
}

export default CustomCarousel;

CustomCarousel.propTypes = {
  voucherFakeData: PropTypes.instanceOf(Array).isRequired,
};
