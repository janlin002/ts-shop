import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Image } from 'mui-image';
import { StyledDiscountIconList } from './DiscounIconList.style';

type ListType = {
    list: Array<{
      iconUrl: string,
      info: string
  }>
}

function VoucherIconList({ list }: ListType) {
  return (
    <StyledDiscountIconList.Container>
      <StyledDiscountIconList.Wrap>
        {list.map((item) => (
          <StyledDiscountIconList.Content>
            <Image
              width={50}
              height={50}
              src={item.iconUrl}
              alt=""
            />
            <Typography fontSize={13} noWrap>{item.info}</Typography>
          </StyledDiscountIconList.Content>
        ))}
      </StyledDiscountIconList.Wrap>
    </StyledDiscountIconList.Container>
  );
}

export default VoucherIconList;

VoucherIconList.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};
