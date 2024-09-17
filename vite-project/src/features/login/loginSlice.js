import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userLoggedIn: false,
    user_id: null
  },
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.userLoggedIn = action.payload.userLoggedIn;
      state.user_id = action.payload.user_id;
    },
    clearUserLoggedIn: (state) => {
      state.userLoggedIn = false;
      state.user_id = null;
    }
  }
});

export const { setUserLoggedIn, clearUserLoggedIn } = loginSlice.actions;
export default loginSlice.reducer;
