import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: JSON.parse(localStorage.getItem("token")) || null,
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const token = action.payload.token;
      const user = action.payload.user;
      state.user = user;
      state.token = token;
      localStorage.setItem("token", JSON.stringify(token));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token"); // .clear
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
