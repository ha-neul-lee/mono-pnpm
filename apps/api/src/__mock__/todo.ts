type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const todo: Todo = {
  id: 1,
  text: 'Buy the milk',
  done: false,
};

export { todo };
export type { Todo };
