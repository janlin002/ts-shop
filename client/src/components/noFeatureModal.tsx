import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'antd';

interface NoFeatureType {
    modalOpen: boolean,
    handleModalClose: ()=>void
}

function NoFeatureModal({
  modalOpen,
  handleModalClose,
}: NoFeatureType) {
  return (
    <div>
      <Modal
        title="注意!"
        open={modalOpen}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        okButtonProps={{ style: { backgroundColor: '#ee4d2d' } }}
      >
        <p>目前功能尚未開放，敬請期待</p>
      </Modal>
    </div>
  );
}

export default NoFeatureModal;

NoFeatureModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};
