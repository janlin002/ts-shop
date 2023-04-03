import type {
  CounterState,
} from './reducer';

export const test = (state: CounterState) => (
  state.value
);

export const abc = (): string => '123';
