import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits);
    return(
        <div className="list-group">
            {postsArray.map(post => <TuitItem key={post._id} post={post}/>)}
        </div>
    );
};
export default TuitsList;