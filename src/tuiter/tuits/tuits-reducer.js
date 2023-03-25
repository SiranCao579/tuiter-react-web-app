import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        updateLikes: (state, action) => {
            state.tuits = action.payload;
        },
    }
});

export default tuitsSlice.reducer;
export const {updateLikes} = tuitsSlice.actions;