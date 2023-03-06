import { createStore } from 'vuex'
import { State, Category, Todo, TodoList } from './StateInterface'
import {categoriesMock, todosMock} from './mockData'



export const store = createStore<State>({
  state: {
    categories: [],
    category: null,
    todoList: {
      backlog: [],
      inProgress: [],
      done: []
    },
  },
  getters: {
    getCategories(state): Category[] {
      return state.categories;
    },
    getCategory(state): Category|null {
      return state.category;
    },
    getBacklogTodoList(state): Todo[]|null {
      return state.todoList.backlog;
    },
    getInProgressTodoList(state): Todo[]|null {
      return state.todoList.inProgress;
    },
    getDoneTodoList(state): Todo[]|null {
      return state.todoList.done;
    }
  },
  mutations: {
    SET_CATEGORIES(state: State, categories: Category[]) {
      state.categories = categories;
    },
    ADD_CATEGORY(state: State, category: Category) {
      state.categories.push(category);
    },
    SET_CATEGORY(state: State, category: Category|null) {
      state.category = category;
    },
    SET_TODO_LIST_BACKLOG(state: State, todoList: Todo[]) {
      state.todoList.backlog = todoList;
    },
    SET_TODO_LIST_IN_PROGRESS(state: State, todoList: Todo[]) {
      state.todoList.inProgress = todoList;
    },
    SET_TODO_LIST_IN_DONE(state: State, todoList: Todo[]) {
      state.todoList.done = todoList;
    },
  },
  actions: {
    getCategories({ commit }):void {
      //get categories from backend
      commit('SET_CATEGORIES', categoriesMock);
    },
    addCategory({ commit }, category: Category):void {
      //post categories from backend
      commit('ADD_CATEGORY', category);
    },
    getCategoryByPath({ commit }, path: string): void {
      //get category from backend
      const category = categoriesMock.find((category: Category) => category.path === path)
      commit('SET_CATEGORY', (typeof category !== 'undefined' ? category : null));
    },
    getTodoListByCategoryId({ commit }, id: string): void {
      //get todo list 
      if (!id) {
        return
      }
      const todos:Todo[] = todosMock.filter((todo: Todo) => todo.categoryId === id)
      const todoList:TodoList = {
        backlog: todos.filter((todo: Todo) => todo.status === 0),
        inProgress: todos.filter((todo: Todo) => todo.status === 1),
        done: todos.filter((todo: Todo) => todo.status === 2),
      }
      commit('SET_TODO_LIST_BACKLOG', todoList.backlog);
      commit('SET_TODO_LIST_IN_PROGRESS', todoList.inProgress);
      commit('SET_TODO_LIST_IN_DONE', todoList.done);
    },
    addTodo({ commit }, path: string): void {

    }
  },

  modules: {
  }
})
