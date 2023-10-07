import React from 'react';
import { Col, Row } from 'antd';
import CATEGORY_LIST from '@asset/data/category';
import { StyledCategory, StyledCategoryTitle } from './Categories.style';

function Categories() {
  console.log();
  return (
    <Row>
      <Col span={14} offset={5}>
        <StyledCategoryTitle>
          分類
        </StyledCategoryTitle>
        <StyledCategory.Wrap>
          {CATEGORY_LIST.map((item) => (
            <StyledCategory.Content>
              <img src={item.image} alt="" className="category-box-image" />
              <p>{item.title}</p>
            </StyledCategory.Content>
          ))}
        </StyledCategory.Wrap>
      </Col>
    </Row>
  );
}

export default Categories;

// 上方加陰影
// 分類用border包起來
