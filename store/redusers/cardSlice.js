import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedCount: 0,
  inBucketCount: 0,
  inBucketCards:[],
};

export const likeFetch = createAsyncThunk("like/likeFetch", async () => {});
export const addToBucketFetch = createAsyncThunk(
  "bucket/bucketFetch",
  async () => {}
);

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addLike: (state, action) => {
      state.likedCount += 1;
    },
    removeLike: (state, action) => {
      state.likedCount -= 1;
    },
    addToBucket: (state, action) => {
      state.inBucketCount += 1;
      state.inBucketCards.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(likeFetch.pending, (state) => {});
    builder.addCase(likeFetch.fulfilled, (state) => {
      state.liked += 1;
    });
    builder.addCase(likeFetch.rejected, (state) => {});

    builder.addCase(addToBucketFetch.pending, () => {});
    builder.addCase(addToBucketFetch.fulfilled, () => {
      state.inBucket += 1;
    });
    builder.addCase(addToBucketFetch.rejected, () => {});
  },
});

export const { addLike, addToBucket, removeLike } = cardSlice.actions;

export default cardSlice.reducer;
