import React from "react";
import postArray from './posts.json';
import HomePostItem from "./HomePostItem";

const HomeCompoment = () => {
    return (
        <div className="list-group">
            {postArray.map(post => <HomePostItem key={post._id} post={post}/>)}
        </div>
    );
};

export default HomeCompoment;