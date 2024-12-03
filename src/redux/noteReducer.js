import { createStore, combineReducers } from 'redux';

// Action Types
const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_FILTER = 'SET_FILTER';

// Action Creators
export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: { title }
});

export const editTodo = (id, title) => ({
  type: EDIT_TODO,
  payload: { id, title }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter }
});

// Reducers
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Date.now(), title: action.payload.title, completed: false }];
    case EDIT_TODO:
      return state.map(todo => todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo);
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo);
    default:
      return state;
  }
};

const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos,
  filter
});

// Store
const store = createStore(rootReducer);

export default store;