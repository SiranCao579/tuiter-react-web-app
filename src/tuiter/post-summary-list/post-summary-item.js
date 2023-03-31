import React from "react";
const PostSummaryItem = (
    {
        post = {
            "_id": "123", "topic": "Space", "username": "SpaceX",
            "handle": "@spacex", "time": "2h", "image": "spacex.jpg",
            "title": "SpaceX's Mission",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
            "liked": true, "likes": 2345, "replies": 123, "retuits": 432, "dislikes": 678, "disliked": false
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{post.username} · {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;