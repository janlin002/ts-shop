import React from 'react';
import { Box } from '@mui/material';

function FormErrorMessage({
  formik,
  id,
}: {
    formik: any,
    id: string
}) {
  return (
    <Box>
      {
        formik.errors[id] && formik.touched[id] === true ? (
          <Box style={{ fontSize: '12px', color: '#ee4d2d' }}>
            {formik.errors[id]}
          </Box>
        ) : ''
    }
    </Box>
  );
}

export default FormErrorMessage;
