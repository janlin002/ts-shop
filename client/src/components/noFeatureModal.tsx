import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Modal } from 'antd';

type Props = {
    modalOpen: boolean,
    handleModalClose: () => void
}

function NoFeatureModal({
  modalOpen,
  handleModalClose,
}: Props) {
  return (
    <Box>
      <Modal
        title="注意!"
        open={modalOpen}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        okButtonProps={{ style: { backgroundColor: '#ee4d2d' } }}
      >
        <p>目前功能尚未開放，敬請期待</p>
      </Modal>
    </Box>
  );
}

export default NoFeatureModal;

NoFeatureModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};
