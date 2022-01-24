export type CounterState = {
  count: number,
};

export type CounterAction = {
  type: string,
};

// eslint-disable-next-line no-unused-vars
export type DispatchType = (args: CounterAction) => CounterAction
