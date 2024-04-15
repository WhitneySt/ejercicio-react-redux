import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [
        ...state.todo,
        {
          id: state.todo.length + 1,
          task: action.payload,
          status: false,
        },
      ];
    },
    setStatusTodo: (state, action) => {
      const updateStatus = state.todo.map((item) =>
        action.payload == item.id ? { ...item, status: !item.status } : item
      );
      state.todo = updateStatus;
    },
    deleteTodo: (state, action) => {
      const deletedTodo = state.todo.filter(
        (item) => item.id !== action.payload
      );
      state.todo = deletedTodo;
    },
    editTodo: (state, action) => {
      const editedTodo = state.todo.map((item) =>
        item.id === action.payload.id
          ? { ...item, task: action.payload.task }
          : item
      );
      state.todo = editedTodo;
    },
  },
});

export const { addTodo, setStatusTodo, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
