import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
   
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
    playSound: async (state, action) => {
        console.log("loading");
        const { sound } = await Audio.Sound.createAsync(defaultSound[0]);
        setSound(sound);
        await sound.playAsync();
    },
  },
});

export const { addTodo, removeTodo, toogleTodo } = todosSlice.actions;
export const todosSelector = (state) => state.todos;
export default todosSlice.reducer;
