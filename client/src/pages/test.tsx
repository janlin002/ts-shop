import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import type { RootState } from '@redux/store';
import { Box } from '@mui/material';
import Test2 from '@pages/test2';
import { test } from '@redux/selector';

import {
  increment,
} from '../redux/reducer/test';

function Test() {
  const dispatch = useDispatch();

  // const count = useSelector((state: RootState) => state.counter.value);
  const myTest = useSelector(test);

  console.log(myTest, 'count');

  return (
    <Box>
      <button
        type="button"
        onClick={() => dispatch(increment())}
      >
        點擊測試

      </button>
      <Test2 />
    </Box>

  );
}

export default Test;
