import React from 'react';
import { Box } from '@mui/material';
import Carousel from '@components/carousel';
import voucherFakeData from '@asset/data/voucher';
import shopeeIconList from '@asset/data/shopeeIcon';
import VoucherIconList from '@components/voucherIconList';

import { StyledDiscountWrap } from './Discount.style';

function Discount() {
  return (
    <>
      <StyledDiscountWrap>
        <Carousel
          voucherFakeData={voucherFakeData}
          height="247px"
        />
        <Box>
          <Box>
            <img
              className="main-voucher-mini-img mini-img-1"
              src={voucherFakeData[1]?.url}
              alt=""
            />
          </Box>

          <Box>
            <img
              className="main-voucher-mini-img mini-img-2"
              src={voucherFakeData[2]?.url}
              alt=""
            />
          </Box>
        </Box>
      </StyledDiscountWrap>
      <VoucherIconList
        list={shopeeIconList}
      />
    </>
  );
}

export default Discount;
