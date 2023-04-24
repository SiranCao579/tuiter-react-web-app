import React from "react";
import {deleteUserThunk} from "../../../services/users-thunks";
import {useDispatch} from "react-redux";

const UserItem = (
    {
        user = {userName: ""}
    }
) =>{
    const dispatch = useDispatch();

    const deleteUserHandler = (id) => {
        dispatch(deleteUserThunk(id));
    }
    return(
        <li className="list-group-item">
            <h2>{user.userName}</h2>
            <button
                onClick={() => deleteUserHandler(user._id)}
                className="btn btn-danger float-end">Delete User</button>
        </li>
    );
};

export default UserItem;