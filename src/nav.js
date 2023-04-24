import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function Nav() {
    const {currentUser} = useSelector((state) => state.users);

    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/">Assignment 6</Link> |
            <Link to="/a7">Assignment 7</Link> |
            <Link to="/tuiter">Tuiter</Link> |
            {currentUser
                ? <>
                    |<Link to="/profile">Profile</Link>
                    {currentUser.role === "ADMIN" && <>|<Link to="/admin">Admin</Link></>}
                </>
                : <>
                    |<Link to="/login">Login</Link>
                    |<Link to="/register">Register</Link>
                </> }

        </div>
    )
}

export default Nav;