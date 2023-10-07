import React from 'react';
import {
  Input,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagramSquare,
  faLine,
} from '@fortawesome/free-brands-svg-icons';
import { Box, Typography } from '@mui/material';
import {
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import {
  StyleHeadser, StyledHeaderLink, StyledHeaderIcon, StyledHeaderUser, StyledHeaderBlock,
} from './Header.style';
import '../Main.css';

function Header() {
  const { Search } = Input;
  const onSearch = () => {};

  return (
    <>
      <StyleHeadser>
        <Box className="main-right">
          <StyledHeaderLink href="123">
            賣家中心
          </StyledHeaderLink>
          <StyledHeaderBlock>|</StyledHeaderBlock>
          <StyledHeaderLink href="123">
            下載
          </StyledHeaderLink>
          <StyledHeaderBlock>|</StyledHeaderBlock>
          <StyledHeaderLink href="123">
            追蹤我們
          </StyledHeaderLink>
          <StyledHeaderIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </StyledHeaderIcon>
          <StyledHeaderIcon>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </StyledHeaderIcon>
          <StyledHeaderIcon>
            <FontAwesomeIcon icon={faLine} />
          </StyledHeaderIcon>
        </Box>
        <Box className="main-right">
          <StyledHeaderLink href="123">
            通知總覽
          </StyledHeaderLink>
          <StyledHeaderLink href="123">
            幫助中心
          </StyledHeaderLink>
          <StyledHeaderLink href="123">
            繁體中文
          </StyledHeaderLink>
          <StyledHeaderUser.StyledHeaderUserButton
            startIcon={(
              <img
                src="https://www.popdaily.com.tw/u/202008/570e56ce-9be2-473f-a5da-8cbe534561b5.jpg"
                alt=""
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                }}
              />
          )}
          >
            <Typography fontSize="14px" my="auto">Janlin002</Typography>
          </StyledHeaderUser.StyledHeaderUserButton>
        </Box>
      </StyleHeadser>

      <Box className="main-search-bar">
        <img
          src="https://logodix.com/logo/2015036.png"
          alt=""
          style={{ maxHeight: '85px', margin: '10px' }}
        />

        <Search placeholder="請輸入" onSearch={onSearch} style={{ width: '1000px', margin: '10px' }} />
        <Box className="main-shopping-cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Box>
        <Box className="main-shopping-cart-number">123</Box>
      </Box>

    </>

  );
}

export default Header;
