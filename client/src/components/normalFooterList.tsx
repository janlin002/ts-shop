import React from 'react';
import PropTypes from 'prop-types';

import '@asset/css/style.css';

// type SubContent = {
//     title: string,
//     href: string
// }

type DataType = {
  listData: {
    mainTitle: string,
    subContent: [
        {
            title: string,
            href: string
        }
    ]
  }
}

function NormalFooterList(props : DataType) {
  return (
    <div>
      <p className="login-footer-main-text">
        {props.listData.mainTitle}
      </p>
      {
        props.listData.subContent.map((item) => (
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

// NormalFooterList.propTypes = {
//   props: PropTypes.instanceOf(Object).isRequired,
// };
