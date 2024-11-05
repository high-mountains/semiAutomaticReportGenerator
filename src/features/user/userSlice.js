import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signin = createAsyncThunk("/user/signin", async (payload) => {
  try {
    const response = await axios.get("/user", {
      params: { userId: payload.userId, password: payload.password },
    });
    if (window.socket) {
      window.socket.connect();
    }
    return response.data;
  } catch (e) {
    if (e.response) {
      return e.response.data;
    }
    return { message: "Server is not running correctly." };
  }
});

export const signup = createAsyncThunk("/user/signup", async (payload) => {
  const { userId, password, realName, birthday } = payload;
  try {
    const response = await axios.post("/user", {
      userId,
      password,
      realName,
      birthday,
    });
    return response.data;
  } catch (e) {
    return { error: true, message: "Server is not running correctly." };
  }
});

export const setUserInfo = createAsyncThunk(
  "/user/setUserInfo",
  async (payload) => {
    const response = await axios.put("/user", payload);
    return response.data;
  }
);

export const getUser = createAsyncThunk("/tokenLogin", async () => {
  const response = await axios.post("/tokenLogin");
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    user: null,
    pages: [],
    menu: [],
    error: "",
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    getToken: (state) => {
      state.token = localStorage.getItem("token");
    },
    logOut: (state) => {
      state.token = null;
      localStorage.removeItem("token");
      state.user = null;
      state.pages = [];
    },
    resetError: (state) => {
      state.error = "";
    },
  },
  extraReducers: {
    [signin.pending]: (state) => {
      state.isLoading = true;
    },
    [signin.fulfilled]: (state, { payload }) => {
      if (payload.token) {
        axios.defaults.headers.common["Authorization"] = payload.token;
        localStorage.setItem("token", payload.token);
        state.user = payload.user;
        state.pages = payload.page;
        state.menu = payload.menu;
        state.token = payload.token;
        state.isLoading = false;
      } else {
        state.error = payload.message;
        state.isLoading = false;
      }
    },
    [signin.rejected]: (state, payload) => {
      state.error = payload.message;
      state.isLoading = false;
    },
    [signup.fulfilled]: (state, payload) => {
      if (payload.error) {
        state.error = payload.message;
      }
    },
    [getUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      state.user = payload.user;
      state.pages = payload.page;
      state.token = payload.token;
      state.menu = payload.menu;
    },
    [setUserInfo.fulfilled]: (state, { payload }) => {
      if (payload.err != 1 && payload.profileUpdate) {
        state.user = payload.data;
      }
    },
    [setUserInfo.rejected]: (state, payload) => {
      state.error = "User not found";
      state.isLoading = false;
    },
  },
});
export const { getToken, logOut, resetError } = userSlice.actions;
export default userSlice.reducer;
