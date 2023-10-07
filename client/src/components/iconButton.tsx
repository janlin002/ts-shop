import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

type Props = {
    iconLink: string,
    iconName: string
}

function IconButton({ iconLink, iconName }: Props) {
  return (
    <Button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
      }}
    >
      <img style={{ width: '22px' }} src={iconLink} alt="" />
      <Box>
        {iconName}
      </Box>
    </Button>
  );
}

export default IconButton;

IconButton.propTypes = {
  iconLink: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};
