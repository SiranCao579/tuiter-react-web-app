import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [])
    return(
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item">Loading...</li>
            }
            {tuits.map(tuit => <TuitItem key={tuit._id} post={tuit}/>)}
        </div>
    );
};
export default TuitsList;