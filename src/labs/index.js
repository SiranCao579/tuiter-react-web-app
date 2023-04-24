import Nav from "../nav";
import Assignment6 from "./a6";
import Assignment7 from "./a7";
import {Routes, Route} from "react-router";
import Assignment10 from "./a10";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./a10/reducer/users-reducer";
import {Provider} from "react-redux";
import ProfileScreen from "./a10/screens/profile_screen";
import React from "react";
import LoginScreen from "./a10/screens/login_screen";
import RegisterScreen from "./a10/screens/register_screen";
import AdminScreen from "./a10/screens/admin_screen";
const store = configureStore({reducer: {users: usersReducer}});

function Labs() {
    return (
        <Provider store={store}>
            <div className="container mt-2">
                <Nav/>
                <Routes>
                    <Route index element={<Assignment6/>}/>
                    <Route path="a7" element={<Assignment7/>}/>
                    <Route path="login" element={<LoginScreen/>}/>
                    <Route path="profile" element={<ProfileScreen/>}/>
                    <Route path="register" element={<RegisterScreen/>}/>
                    <Route path="admin" element={<AdminScreen/>}/>
                </Routes>
            </div>
        </Provider>
    );
}

export default Labs;