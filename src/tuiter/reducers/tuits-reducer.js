import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        updateLikes: (state, action) => {
            state.tuits = action.payload;
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },


    }
});

export default tuitsSlice.reducer;
export const {updateLikes, createTuit, deleteTuit} = tuitsSlice.actions;