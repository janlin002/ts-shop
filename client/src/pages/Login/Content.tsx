import React from 'react';
import { Box } from '@mui/material';
import LoginInput from '@components/LoginInput';

import './Login.css';

function Content() {
  return (
    <Box className="login-content">
      <img
        src="https://cf.shopee.tw/file/41dd0e7f9ef7c93289655a5e203fcfb8"
        style={{ maxHeight: '600px' }}
        alt=""
      />
      <LoginInput />
    </Box>
  );
}

export default Content;
