import { styled, Box } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const StyledDiscountWrap = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));
StyledDiscountWrap.defaultProps = {
  my: '30px',
};
