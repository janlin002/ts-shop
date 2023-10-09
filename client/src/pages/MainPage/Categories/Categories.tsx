import React from 'react';
import CATEGORY_LIST from '@asset/data/category';
import { Typography } from '@mui/material';
import { Image } from 'mui-image';
import { StyledCategory, StyledCategoryTitle } from './Categories.style';

function Categories() {
  const handleContntClick = (e: MouseEvent) => {
    const target = e.target as HTMLInputElement;
  };
  return (
    <StyledCategory.Container>
      <StyledCategory.SubContainer>
        <StyledCategoryTitle>
          分類
        </StyledCategoryTitle>
        <StyledCategory.Wrap>
          {CATEGORY_LIST.map((item) => (
            <StyledCategory.Content onClick={(e) => handleContntClick(e as any)}>
              <Image width={80} height={80} src={item.image} alt="" />
              <Typography fontSize={13} noWrap>{item.title}</Typography>
            </StyledCategory.Content>
          ))}
        </StyledCategory.Wrap>
      </StyledCategory.SubContainer>
    </StyledCategory.Container>
  );
}

export default Categories;
