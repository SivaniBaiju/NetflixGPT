import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {},
  },
  reducers: {
    addUser: (state, action) => ({
      currentUser: action.payload,
    }),
    removeUser: (state) => ({
      currentUser: null,
    }),
  },
});

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;