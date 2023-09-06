import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dollar, hryvna, evro } from "../../images/index";

const initialState = {
  lang: "",
  cur: "",
  curImg: null,
  currentCource: 1,
};


export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
    setCur: (state, action) => {
      state.cur = action.payload;
      localStorage.setItem("cur", action.payload);
      switch (action.payload) {
        case "hryvna":
          state.curImg = hryvna;
          break;
        case "evro":
          state.curImg = evro;
          break;
        case "dollar":
          state.curImg = dollar;
          break;
        default:
          break;
      }
    },
    setCurrentCource: (state, action) => {
      state.currentCource = action.payload;
    },
  },
});

export const { setLang, setCur, setCurrentCource } = globalSlice.actions;

export default globalSlice.reducer;
