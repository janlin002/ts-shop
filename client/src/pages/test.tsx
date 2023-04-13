import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import type { RootState } from '@redux/store';

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
    <div>
      <button
        type="button"
        onClick={() => dispatch(increment())}
      >
        點擊測試

      </button>
      <Test2 />
    </div>

  );
}

export default Test;
