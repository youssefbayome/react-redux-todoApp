import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
  filterStatus: 'all',
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    updateTodo: (state, action) => {
      const todoList = state.todoList;
      if (todoList) {
        todoList.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });

      }
    },
    deleteTodo: (state, action) => {
      const todoList = state.todoList;
      if (todoList) {
        todoList.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoList.splice(index, 1);
          }
        });

      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
