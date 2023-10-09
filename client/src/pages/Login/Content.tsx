import React from 'react';
import { Box } from '@mui/material';
import LoginInput from '@components/LoginInput';
import { Image } from 'mui-image';

import './Login.css';

function Content() {
  return (
    <Box className="login-content">
      <Image
        src="https://cf.shopee.tw/file/41dd0e7f9ef7c93289655a5e203fcfb8"
        height={600}
        alt=""
      />
      <LoginInput />
    </Box>
  );
}

export default Content;
