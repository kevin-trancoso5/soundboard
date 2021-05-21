import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { name: "sortir le chien", completed: false, id: 1 },
    { name: "sortir le chat", completed: true, id: 2 },
    { name: "sortir le poisson", completed: false, id: 3 },
  ],
  reducers: {
    addTodo: (state, action) => {
      let id = state.length ? state[state.length - 1].id + 1 : 0;
      return [
        ...state,
        {
          name: action.payload,
          completed: false,
          id: id,
        },
      ];
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    toogleTodo: (state, action) => {
      return state.map((item) =>
        item.id == action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
  },
});

export const { addTodo, removeTodo, toogleTodo } = todosSlice.actions;
export const todosSelector = (state) => state.todos;
export default todosSlice.reducer;
