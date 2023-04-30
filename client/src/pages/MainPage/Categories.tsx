import React from 'react';
import { Col, Row } from 'antd';
// import moment from 'moment';

// import CategoriesBox from '@components/categoriesBox';
import CATEGORY_LIST from '@asset/data/category';
import './Main.css';

function Categories() {
  // const []
  // const end = moment().endOf('day');

  // setInterval(() => {
  //   const timeLeft = moment(end.diff(moment())).subtract(8, 'hours');
  //   const formatted = timeLeft.format('HH:mm:ss');

  //   console.log(formatted);
  // }, 1000);
  return (
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
  );
}

export default Categories;

// 上方加陰影
// 分類用border包起來
