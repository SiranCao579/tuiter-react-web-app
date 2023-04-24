import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "../../../services/users-thunks";
import {useNavigate} from "react-router";

function RegisterScreen() {
    // const {currentUser} = useSelector((state) => state.users);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const register = () => {
        try {
            dispatch(registerThunk({userName, password, email, firstName, lastName}));
            navigate("/profile")
        } catch (err) {
            console.log(err);
        }
    };
    return(
        <div>
            <h1>Register</h1>
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
            <div>
                <label className="form-label">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => {setFirstName(e.target.value)}}/>
            </div>
            <div>
                <label className="form-label">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => {setLastName(e.target.value)}}/>
            </div>
            <div>
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <button className="btn btn-primary mt-3" onClick={register}>Register</button>
        </div>
    );
}

export default RegisterScreen;