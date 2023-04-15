import React from 'react';
import PropTypes from 'prop-types';

// import

import '@asset/css/style.css';

interface DataType {
  listData:{
    mainTitle: string;
    subContent: {
      title: string;
      href: string;
    }[];
  }
}

function NormalFooterList({ listData } : DataType) {
  return (
    <div>
      <p className="login-footer-main-text">
        {listData.mainTitle}
      </p>
      {
        listData.subContent.map((item) => (
          <div>
            <a className="login-footer-sub-text" href={item.href}>
              {item.title}
            </a>
          </div>

        ))
      }

    </div>
  );
}

export default NormalFooterList;

NormalFooterList.propTypes = {
  listData: PropTypes.instanceOf(Object).isRequired,
};
