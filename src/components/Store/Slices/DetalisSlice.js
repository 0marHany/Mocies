import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDetails = createAsyncThunk("movies/getDetails", async ({ media_type, id }) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=6f0419d377cd2732789b55d594ddb25b&append_to_response=videos`);
  return data;
});

const initialState = { details: {} };

const moviesSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.details = action.payload;
    });
  },
});

export default moviesSlice.reducer;
