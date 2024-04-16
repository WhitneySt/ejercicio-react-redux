import { createSlice } from "@reduxjs/toolkit";

const initialTodo = {
  todo: [],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodo,
  reducers: {
    startingTodoFetch: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    todoFetchSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todo = action.payload;
    },
    todoFetchFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fillTodo: (state, action) => {
      state.todo = action.payload;
    },
    addTodo: (state, action) => {
      state.todo.push(action.payload);
      state.isLoading = false;
    },
    addTask: (state, action) => {
      state.todo = [...state.todo, action.payload];
      state.isLoading = false;
    },
    deleteTodo: (state, action) => {
      const deletedTask = state.todo.filter(
        (item) => item.id !== action.payload
      );
      state.todo = deletedTask;
    },
    setStatusTodo: (state, action) => {
      const updatedStatus = state.todo.map((item) =>
        item.id === action.payload ? { ...item, status: !item.status } : item
      );
      state.todo = updatedStatus;
    },
    editTask: (state, action) => {
      const editedTask = state.todo.map((item) =>
        item.id === action.payload.id
          ? { ...item, task: action.payload.task }
          : item
      );
      state.todo = editedTask;
    },
  },
});

export const {
  addTask,
  deleteTodo,
  setStatusTodo,
  editTask,
  startingTodoFetch,
  todoFetchSuccess,
  todoFetchFail,
} = todoSlice.actions;
export default todoSlice.reducer;
