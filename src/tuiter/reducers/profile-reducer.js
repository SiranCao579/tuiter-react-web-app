import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {
        firstName: 'Siran',
        lastName: 'Cao',
        handle: '@siranCao',
        profilePicture: 'siran.jpg',
        bannerPicture: 'banner.jpg',
        bio: 'Student of webdev of class Spring 2023, who loves coding, hiking, and animals.',
        website: 'youtube.com/webdevtv',
        location: 'San Jose, CA',
        dateOfBirth: '11/1/1996',
        dateJoined: '4/2009',
        followingCount: 340,
        followersCount: 223,
        totalTweets: 1246,
    }
};


const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            state.user = action.payload;
        },

    },
});
export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;