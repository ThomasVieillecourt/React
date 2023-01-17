import { configureStore } from "@reduxjs/toolkit";
import pictureReducer from "../features/picture.slice";

export default configureStore({
  reducer: {
    pictures: pictureReducer,
  },
});
