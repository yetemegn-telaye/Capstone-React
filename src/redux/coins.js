import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.coincap.io/v2/assets';
const coinsList = [];

export const fetchCoinsData = createAsyncThunk('coins/fetchCoinsData', async () => {
  const response = await axios.get(baseUrl);
  if (response.data) {
    return response.data;
  }
  return [];
});

const coinSlice = createSlice({
  name: 'coins',
  initialState: coinsList,
  reducers: {},
  extraReducers: (buid) => {
    buid.addCase(fetchCoinsData.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload.data).forEach((element) => {
        newState.push({
          id: element[1].id,
          coinName: element[1].name,
          rank: element[1].rank,
          symbol: element[1].symbol,
          priceUsd: element[1].priceUsd,
        });
      });
      return newState;
    });
  },
});

export default coinSlice.reducer;
