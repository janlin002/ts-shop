import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@redux/store';

import Test2 from '@pages/test2';

import {
  increment,
} from '../redux/reducer/test';

function Test() {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter.value);

  console.log(count, 'count');

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
