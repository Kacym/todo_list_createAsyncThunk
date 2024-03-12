import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

export const getData = createAsyncThunk("getData", async () => {
  const response = (await axios.get(url)).data;
  return response;
});

export const addTodo = createAsyncThunk("addTodo", async (newData) => {
  const response = (await axios.post(url, newData)).data;
  return response;
});

export const deleteTodo = createAsyncThunk("deleteTodo", async (id) => {
  const response = (await axios.delete(`${url}/${id}`)).data;
  return response;
});

export const updateTodo = createAsyncThunk("updateTodo", async (task) => {
  const response = (
    await axios.patch(`${url}/${task._id}`, { completed: !task.completed })
  ).data;
  return response;
});

const todoSlice = createSlice({
  name: "todo-slice",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
