import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("getPosts", async (_, thunkAPI) => {
  axios
    .get("http://localhost:5000/post/")
    .then((res) => thunkAPI.dispatch(getPostsSuccess(res.data)));
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postsData: [],
  },
  reducers: {
    getPostsSuccess: (state, action) => {
      state.postsData = action.payload;
    },
    createPosts: (state, action) => {
      state.postsData.push(action.payload);
    },
    editPosts: (state, action) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === action.payload[1]) {
          return { ...post, message: action.payload[0] };
        } else {
          return post;
        }
      });
    },
    deletePosts: (state, action) => {
      state.postsData = state.postsData.filter(
        (post) => post._id !== action.payload
      );
    },
    like: (state, action) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === action.payload[1]) {
          return {
            ...post,
            likers: [...post.likers, action.payload[0]],
          };
        } else {
          return post;
        }
      });
    },
    dislike: (state, action) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === action.payload[1]) {
          return {
            ...post,
            likers: post.likers.filter(
              (userId) => userId !== action.payload[0]
            ),
          };
        } else {
          return post;
        }
      });
    },
  },
});

export const {
  getPostsSuccess,
  createPosts,
  editPosts,
  deletePosts,
  like,
  dislike,
} = postSlice.actions;
export default postSlice.reducer;
