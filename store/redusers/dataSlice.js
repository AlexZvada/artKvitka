import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cards from "../../js/cards";

const initialState = {
  data: cards,
  toShow: [],
  arrayOfDependencies: [],
  isFinded: false,
};

export const dataFetch = createAsyncThunk('data/fetchData', async ()=>{
  const res = await fetch("");
    if (res.ok) {
      const data = await res.json();
      return data
    } else {
      return Promise.reject('rejected')
    }
  },
)

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filter: (state) => {
      if (!state.arrayOfDependencies[0]) {
        state.toShow = [...state.data];
        return;
      } else {
        state.toShow = [];
      }
      state.arrayOfDependencies.forEach((dep) => {
        state.data.forEach((el) => {
          if (el.category === dep) {
            state.toShow.push(el);
          }
        });
      });
    },
    sort:(state, action)=>{
      switch (action.payload) {
        case "recomended":
          state.toShow = state.toShow
          break;
        case "oldFirst":
          state.toShow.sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) {
              return 1;
            }
            if (new Date(a.date) < new Date(b.date)) {
              return -1;
            }
            return 0;
          });
          break;
        case "newFirst":
          state.toShow.sort((a, b) => {
            if (new Date(a.date) < new Date(b.date)) {
              return 1;
            }
            if (new Date(a.date) > new Date(b.date)) {
              return -1;
            }
            return 0;
          });
          break;
        case "cheapFirst":
          state.toShow.sort((a, b) => {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          break;
        case "expenciveFirst":
          state.toShow.sort((a, b) => {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            return 0;
          });
          break;
        default:
          break;
      }
    },
    setDataToShow: (state) => {
      state.toShow = [...state.data];
    },
    addDependency: (state, action) => {
      state.arrayOfDependencies.push(action.payload);
    },
    removeDependency: (state, action) => {
      state.arrayOfDependencies = state.arrayOfDependencies.filter(
        (el) => el !== action.payload
      );
    },
    toglleLike:(state, action)=>{
      state.data = state.data.map(el => {
        if (el.id === action.payload) {
          el.like = !el.like
        }
        return el;
      })
      state.toShow = state.toShow.map((el) => {
        if (el.id === action.payload) {
          el.like = !el.like;
        }
        return el;
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(dataFetch.pending, (state => {}));
    builder.addCase(dataFetch.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }
    });
    builder.addCase(dataFetch.rejected, (state, action) => {});

    // searchFetch: async (state, payload) => {
    //   const res = await fetch("");
    //   if (res.ok) {
    //     const data = await res.json();
    //     state.data = data;
    //   }
    // },
  },
});

export const {
  filter,
  setDataToShow,
  addDependency,
  removeDependency,
  toglleLike,
  sort,
} = dataSlice.actions;

export default dataSlice.reducer;


// import cards from "./cards";
