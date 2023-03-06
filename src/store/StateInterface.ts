export interface Category {
  id: string,
  title: string,
  path: string,
  color: string,
};

export enum StatusTodo {
  backlog = 0,
  inProgress = 1,
  done = 2
}

export interface Todo {
  id: string,
  parentId: string|null,
  title: string,
  done: boolean,
  status: StatusTodo,
  categoryId: string,
};

export interface TodoList {
  backlog: Todo[],
  inProgress: Todo[],
  done: Todo[],
};

export interface State {
  categories: Category[],
  category: Category|null,
  todoList: TodoList
};