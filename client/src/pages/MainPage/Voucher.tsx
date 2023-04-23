import React from 'react';

import Carousel from '@components/carousel';
import voucherFakeData from '@asset/data/voucher';

function Voucher() {
  return (
    <div className="main-voucher-container">
      <Carousel
        voucherFakeData={voucherFakeData}
        height="247px"
      />
      <div>
        <div>
          <img
            className="main-voucher-mini-img mini-img-1"
            src={voucherFakeData[1]?.url}
            alt=""
          />
        </div>

        <div>
          <img
            className="main-voucher-mini-img mini-img-2"
            src={voucherFakeData[2]?.url}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Voucher;
