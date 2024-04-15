import { createSlice } from "@reduxjs/toolkit";

const initialTodo = {
  todo: [
    { id: 1, task: "Completar curso de JavaScript", status: false },
    { id: 2, task: "Organizar escritorio", status: true },
    { id: 3, task: "Preparar cena", status: false },
    { id: 4, task: "Hacer ejercicio", status: false },
    { id: 5, task: "Leer un libro", status: true },
    { id: 6, task: "Visitar a un amigo", status: false },
    { id: 7, task: "Terminar proyecto de diseño", status: true },
    { id: 8, task: "Ir al supermercado", status: false },
    { id: 9, task: "Pagar facturas", status: false },
    { id: 10, task: "Llamar a un familiar", status: false },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodo,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        id: state.todo.length + 1,
        task: action.payload,
        status: false,
      });
    },
    addTask: (state, action) => {
      state.todo = [
        ...state.todo,
        {
          id: state.todo.length + 1,
          task: action.payload,
          status: false,
        },
      ];
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

export const { addTask, deleteTodo, setStatusTodo, editTask } =
  todoSlice.actions;
export default todoSlice.reducer;
