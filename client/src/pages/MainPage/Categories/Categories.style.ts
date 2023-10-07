import { styled, Box } from '@mui/material';

export const StyledCategory = {
  Wrap: styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  })),
  Content: styled(Box)(() => ({
    width: '110px',
    height: '150px',
    border: '1px solid #f4f4f4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      boxShadow: '0 1px 3px 1px #e4e4e4',
    },
  })),
};

export const StyledCategoryTitle = styled(Box)(() => ({
  color: '#8c8c8c',
  fontSize: '17px',
}));
StyledCategoryTitle.defaultProps = {
  m: '10px',
};
