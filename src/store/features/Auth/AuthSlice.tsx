import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  authenticated: false,
  userPhoto: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("----------->>>>>>>>>>>>>>>>>>>>>>>>>>>", action.payload);
      state.token = action.payload?.token;
      state.user = action.payload?.user;
      state.authenticated = true;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.user = null;
      state.authenticated = false;
    },
    profilePhoto: (state, action) => {
      state.userPhoto = action.payload?.userPhoto;
    },
  },
});

export const { loginSuccess, logoutSuccess, profilePhoto } = authSlice.actions;
export default authSlice.reducer;
