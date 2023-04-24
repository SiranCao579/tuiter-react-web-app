import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../../services/users-thunks";
import {useNavigate} from "react-router";

function LoginScreen() {
    const {currentUser} = useSelector((state) => state.users);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = () => {
        try {
            dispatch(loginThunk({userName, password}));
            navigate("/profile")
        } catch (err) {
            console.log(err);
        }

    };
    return(
        <div>
            <h1>Login</h1>
            <div>
                <label className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={(e) => {setUsername(e.target.value)}}/>
            </div>
            <div>
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button className="btn btn-primary mt-3" onClick={login}>Login</button>
            <div>
                {currentUser && (
                    <h2>Hi {currentUser.userName}</h2>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;