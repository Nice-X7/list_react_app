import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { favorite: false, text: 'Купить продукты' },
    { favorite: false, text: 'Купить бананы' },
    { favorite: false, text: 'Купить машину' },
    { favorite: false, text: 'Купить дом' },
    { favorite: false, text: 'Купить участок' },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    DeleteElement: (state, action) => {
      state.todos = state.todos.filter((element, ind) => ind !== action.payload.index);
    },
    AddFavorite: (state, action) => {
      state.todos = state.todos.map((item, index) => {
        if (action.payload.index === index) {
          return {
            ...item,
            favorite: !item.favorite,
          };
        }
        return item;
      });
    },
    AddElement: (state, action) => {
      state.todos = [
        {
          favorite: action.payload.favorite,
          text: action.payload.text,
        },
        ...state.todos,
      ];
    },
  },
});

export const { DeleteElement, AddFavorite, AddElement } = todoSlice.actions;

export default todoSlice.reducer;