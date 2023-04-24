import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../../../services/users-thunks";
import UserItem from "./userListItem";
import {useNavigate} from "react-router";

function AdminScreen() {
    const {currentUser, users} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (!currentUser || currentUser.role !== "ADMIN") {navigate("/login")}
    useEffect(() => {dispatch(findAllUsersThunk())}, []);

    return(
        <div>
            <h1>Admin</h1>
            <ul className="list-group">
                {currentUser && <h2>Hi {currentUser.firstName}</h2>}
                {users && users.map(user => <UserItem key={user._id} user={user}/>)}
            </ul>
        </div>
    );
}

export default AdminScreen;