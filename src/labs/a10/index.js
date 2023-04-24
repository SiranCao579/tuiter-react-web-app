import React, {useState} from "react";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./reducer/users-reducer";
import LoginScreen from "./screens/login_screen";
import ProfileScreen from "./screens/profile_screen";
import {Provider, useSelector} from "react-redux";
import {Route, Routes} from "react-router";
import Assignment6 from "../a6";
import Assignment7 from "../a7";

const Assignment10 = () => {
    return(
        <div>
            <h1>Profile</h1>
            <LoginScreen/>
        </div>
    );
};
export default Assignment10;