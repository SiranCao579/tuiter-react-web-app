import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, profileThunk} from "../../../services/users-thunks";
import {useNavigate} from "react-router";

function ProfileScreen() {
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {dispatch(profileThunk())}, []);
    return(
        <div>
            <h1>Profile</h1>
            {currentUser && (
                <div>
                    <h2>Hi {currentUser.userName}</h2>
                    <button onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/login");
                    }} className="btn btn-danger">Logout</button>
                </div>)
            }
        </div>
    );
}

export default ProfileScreen;