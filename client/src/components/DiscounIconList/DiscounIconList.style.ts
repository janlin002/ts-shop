import { Box, styled } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const StyledDiscountIconList = {
  Container: styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  })),
  Wrap: styled(Box)(() => ({
    minWidth: '1200px',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px 0',
  })),
  Content: styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })),
};
