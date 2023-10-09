import React from 'react';
import Carousel from '@components/carousel';
import voucherFakeData from '@asset/data/voucher';
import shopeeIconList from '@asset/data/shopeeIcon';
import DiscounIconList from '@components/DiscounIconList/DiscounIconList';
import { Image } from 'mui-image';

import { StyledDiscountWrap, StyledDiscountImageGroup } from './Discount.style';

function Discount() {
  return (
    <>
      <StyledDiscountWrap>
        <Carousel
          voucherFakeData={voucherFakeData}
          height="247px"
        />
        <StyledDiscountImageGroup>
          <Image
            width={400}
            src={voucherFakeData[1]?.url}
            alt=""
          />

          <Image
            width={400}
            src={voucherFakeData[2]?.url}
            alt=""
          />
        </StyledDiscountImageGroup>
      </StyledDiscountWrap>
      <DiscounIconList
        list={shopeeIconList}
      />
    </>
  );
}

export default Discount;
