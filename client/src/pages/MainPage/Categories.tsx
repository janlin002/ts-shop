import React from 'react';
import { Col, Row } from 'antd';

// import CategoriesBox from '@components/categoriesBox';
import CATEGORY_LIST from '@asset/data/category';
import './Main.css';

function Categories() {
  console.log(CATEGORY_LIST, 'CATEGORY_LIST');
  return (
    <div>
      <Row>
        <Col span={14} offset={5}>
          <div className="category-title">
            分類
          </div>
          <div className="category-box-container">
            {CATEGORY_LIST.map((item) => (
              <div className="category-box-content">
                <img src={item.image} alt="" className="category-box-image" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* <Row>
        <Col span={14} offset={5}>

        </Col>
      </Row> */}
    </div>
  );
}

export default Categories;

// 上方加陰影
// 分類用border包起來
