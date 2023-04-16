import React from 'react';

function FormErrorMessage({
  formik,
  id,
}: {
    formik: any,
    id: string
}) {
  return (
    <div>
      {
        formik.errors[id] && formik.touched[id] === true ? (
          <div style={{ fontSize: '12px', color: '#ee4d2d' }}>
            {formik.errors[id]}
          </div>
        ) : ''
    }
    </div>
  );
}

export default FormErrorMessage;
