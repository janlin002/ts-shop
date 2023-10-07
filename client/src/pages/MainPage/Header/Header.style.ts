import {
  styled, Box, Link, IconButton, Button,
} from '@mui/material';

const commonHeaderStyles = {
  color: '#fff',
  fontSize: '13px',
  mx: '5px',
};

export const StyleHeadser = styled(Box)(() => ({
  minHeight: '35px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'rgb(251, 87, 34)',
}));

export const StyledHeaderLink = styled(Link)(() => ({
  color: '#fff',
  fontSize: '13px',

  '&:hover': {
    color: 'hsla(0,0%,100%,.7)',
  },
}));
StyledHeaderLink.defaultProps = {
  underline: 'none',
  mx: '10px',
};

export const StyledHeaderIcon = styled(IconButton)(() => ({
  ...commonHeaderStyles,
}));

export const StyledHeaderUser = {
  StyledHeaderUserButton: styled(Button)(() => ({
    ...commonHeaderStyles,
    display: 'flex',
    alignItem: 'center',
    height: '32px',

    '&:hover': {
      backgroundColor: 'inherit',
    },

    '&:active': {
      backgroundColor: 'inherit',
    },
  })),
  StyledHeaderUserImage: styled(Box)(() => ({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  })),
};

export const StyledHeaderBlock = styled(Box)(() => ({
  color: 'rgba(255,255,255, 0.3)',
}));
