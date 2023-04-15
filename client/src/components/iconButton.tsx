import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

interface Type {
    iconLink: string,
    iconName: string
}

function IconButton({ iconLink, iconName }: Type) {
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
      <div>
        {iconName}
      </div>
    </Button>
  );
}

export default IconButton;

IconButton.propTypes = {
  iconLink: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};
