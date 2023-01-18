import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "picture",
  initialState: {
    pictures: null,
  },
  reducers: {
    setPictureData: (state, action) => {
      state.pictures = action.payload;
    },
    addPicture: (state, action) => {
      state.pictures.push(action.payload);
    },
    editPicture: (state, action) => {
      // On map parce qu'on retourne un tableau avec le même nombre d'élément et on en modifie qu'un seul
      state.pictures = state.pictures.map((pic) => {
        // on fait un payload en tableau pour pouvoir donner la nouvelle data mais ausis l'id de l'objet qu'on modifie
        if (pic.id === action.payload[1]) {
          return {
            // retourne le tableau pic normal
            ...pic,
            // retourne le changement dans la propriété artiste
            artist: action.payload[0],
          };
        } else {
          return pic;
        }
      });
    },
    deletePicture: (state, action) => {
      state.pictures = state.pictures.filter(
        (pic) => pic.id !== action.payload
      );
    },
  },
});

export const { deletePicture } = picturesSlice.actions;
export const { editPicture } = picturesSlice.actions;
export const { setPictureData } = picturesSlice.actions;
export const { addPicture } = picturesSlice.actions;
export default picturesSlice.reducer;
